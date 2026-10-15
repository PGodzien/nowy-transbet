'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff, Plus, Edit2, Trash2, Save, X, Loader2, Archive, RotateCcw, Bold, Italic, List, Heading2, ListOrdered, Type } from 'lucide-react';

interface Oferta {
  slug: string;
  nazwa: string;
  miejsce: string;
  img: string;
  content: string;
  recruitment_url?: string | null;
}

export default function CMSPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [oferty, setOferty] = useState<Oferta[]>([]);
  const [archivedOferty, setArchivedOferty] = useState<Oferta[]>([]);
  const [activeTab, setActiveTab] = useState<'active' | 'archived'>('active');
  const [isEditing, setIsEditing] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [availableImages, setAvailableImages] = useState<{name: string; url: string}[]>([]);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [formData, setFormData] = useState({
    nazwa: '',
    miejsce: '',
    img: '',
    content: '',
    recruitment_url: ''
  });

  // Logowanie sprawdza serwer (CMS_USERNAME / CMS_PASSWORD w zmiennych środowiskowych), sesja w ciasteczku httpOnly.
  useEffect(() => {
    fetch('/api/cms/session')
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(Boolean(data.loggedIn)))
      .catch(() => {});
  }, []);

  // Pobierz oferty z API
  const fetchOferty = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/oferty-db');
      const data = await res.json();
      setOferty(data.oferty || []);
    } catch (err) {
      console.error('Błąd pobierania ofert:', err);
      alert('Nie udało się pobrać ofert');
    } finally {
      setLoading(false);
    }
  };

  // Pobierz zarchiwizowane oferty z API
  const fetchArchivedOferty = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/oferty-archived-db');
      const data = await res.json();
      setArchivedOferty(data.oferty || []);
    } catch (err) {
      console.error('Błąd pobierania zarchiwizowanych ofert:', err);
      alert('Nie udało się pobrać zarchiwizowanych ofert');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchOferty();
      fetchArchivedOferty();
      fetch('/api/images').then(r => r.json()).then(setAvailableImages).catch(() => {});
    }
  }, [isLoggedIn]);

  const editorRef = useRef<HTMLDivElement>(null);
  const editorContentRef = useRef('');
  const [editorVersion, setEditorVersion] = useState(0);
  const [isEditorEmpty, setIsEditorEmpty] = useState(true);

  const escapeHtml = (value: string): string =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const inlineMarkdownToHtml = (value: string): string =>
    escapeHtml(value)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g, '$1<em>$2</em>');

  const markdownToEditorHtml = (markdown: string): string => {
    const lines = markdown.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    let html = '';
    let listType: 'ul' | 'ol' | null = null;
    let paragraphLines: string[] = [];

    const closeList = () => {
      if (!listType) return;
      html += `</${listType}>`;
      listType = null;
    };

    const flushParagraph = () => {
      if (paragraphLines.length === 0) return;
      html += `<p>${paragraphLines.map(inlineMarkdownToHtml).join('<br>')}</p>`;
      paragraphLines = [];
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (!trimmed) {
        flushParagraph();
        closeList();
        return;
      }

      const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        flushParagraph();
        closeList();
        const level = Math.min(6, Math.max(2, headingMatch[1].length));
        html += `<h${level}>${inlineMarkdownToHtml(headingMatch[2].trim())}</h${level}>`;
        return;
      }

      const unorderedMatch = trimmed.match(/^[-*]\s+(.+)$/);
      if (unorderedMatch) {
        flushParagraph();
        if (listType !== 'ul') {
          closeList();
          html += '<ul>';
          listType = 'ul';
        }
        html += `<li>${inlineMarkdownToHtml(unorderedMatch[1])}</li>`;
        return;
      }

      const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
      if (orderedMatch) {
        flushParagraph();
        if (listType !== 'ol') {
          closeList();
          html += '<ol>';
          listType = 'ol';
        }
        html += `<li>${inlineMarkdownToHtml(orderedMatch[1])}</li>`;
        return;
      }

      closeList();
      paragraphLines.push(trimmed);
    });

    flushParagraph();
    closeList();

    return html || '<p><br></p>';
  };

  const syncEditorFromMarkdown = (markdown: string) => {
    editorContentRef.current = markdown;
    setIsEditorEmpty(!markdown.trim());
    setEditorVersion((version) => version + 1);
  };

  useEffect(() => {
    if (!isEditing || !editorRef.current) return;
    editorRef.current.innerHTML = markdownToEditorHtml(editorContentRef.current);
  }, [editorVersion, isEditing]);

  // Funkcja formatowania tekstu wklejanego z różnych źródeł (OLX, Google Docs, itp.)
  const formatPastedText = (text: string): string => {
    let formatted = text
      // Zamień różne typy bullet points na markdown
      .replace(/•\s*/g, '- ')
      .replace(/●\s*/g, '- ')
      .replace(/○\s*/g, '- ')
      .replace(/■\s*/g, '- ')
      .replace(/□\s*/g, '- ')
      .replace(/►\s*/g, '- ')
      .replace(/▪\s*/g, '- ')
      // Zamień numerowane listy z Google Docs (1. 2. 3.)
      .replace(/^\s*(\d+)\.\s+/gm, '$1. ')
      // Normalizuj myślniki na początku linii
      .replace(/^\s*[---]\s+/gm, '- ')
      // Zamień nagłówki (tekst kończący się dwukropkiem)
      .replace(/^(Opis stanowiska|Wymagania|Oferujemy|Co oferujemy|Zakres obowiązków|Obowiązki|Oczekujemy|Twoje zadania|Twój zakres obowiązków):?\s*$/gim, '\n## $1\n')
      // Usuń znaki specjalne Windows
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      // Usuń wielokrotne puste linie (zostaw max 2)
      .replace(/\n{3,}/g, '\n\n')
      // Usuń spacje na końcu linii
      .replace(/[ \t]+$/gm, '')
      // Usuń spacje na początku i końcu całego tekstu
      .trim();
    
    return formatted;
  };

  // Konwersja HTML na Markdown (dla OLX, Google Docs, Word itp.)
  const htmlToMarkdown = (html: string, detectSectionHeaders = true): string => {
    const temp = document.createElement('div');
    temp.innerHTML = html;

    const SECTION_HEADERS = /^(opis|zakres obowi[aą]zk[oó]w|wymagania|oferujemy|co oferujemy|obowi[aą]zki|oczekujemy|twoje zadania|w razie pyta[nń]|kontakt|prosimy|mile widziane)/i;

    const processNode = (node: Node): string => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent || '';
      }

      if (node.nodeType !== Node.ELEMENT_NODE) return '';

      const el = node as Element;
      const tag = el.tagName.toLowerCase();
      const processChildren = (element: Element): string => {
        let out = '';
        element.childNodes.forEach(child => { out += processNode(child); });
        return out;
      };

      // Listy
      if (tag === 'ul' || tag === 'ol') {
        let out = '\n';
        el.querySelectorAll(':scope > li').forEach((li, i) => {
          const text = processChildren(li).replace(/\n+/g, ' ').trim();
          out += tag === 'ul' ? `- ${text}\n` : `${i + 1}. ${text}\n`;
        });
        return out + '\n';
      }

      if (tag === 'li') return `- ${processChildren(el).replace(/\n+/g, ' ').trim()}\n`;

      if (tag === 'br') return '\n';

      // Nagłówki HTML
      if (/^h[1-6]$/.test(tag)) {
        return `\n## ${el.textContent?.trim()}\n\n`;
      }

      // Paragraf / div — sprawdź czy to nagłówek sekcji
      if (tag === 'p' || tag === 'div') {
        // Zbierz zawartość z formatowaniem
        let inner = processChildren(el);
        inner = inner.trim();
        if (!inner) return '\n';

        // Cały paragraf pogrubiony lub pasuje do wzorca nagłówka → nagłówek sekcji
        const isBoldOnly = detectSectionHeaders && el.querySelector('b, strong') &&
          el.textContent?.trim() === el.querySelector('b, strong')?.textContent?.trim();
        const matchesHeader = detectSectionHeaders && SECTION_HEADERS.test(inner.replace(/\*\*/g, ''));

        if (isBoldOnly || matchesHeader) {
          const clean = inner.replace(/\*\*/g, '').replace(/:$/, '').trim();
          return `\n## ${clean}\n\n`;
        }

        return inner + '\n\n';
      }

      // Bold / strong
      if (tag === 'b' || tag === 'strong') {
        const text = el.textContent?.trim() || '';
        if (!text) return '';
        // Jeśli to nagłówek sekcji inline, nie owijaj w **
        if (detectSectionHeaders && SECTION_HEADERS.test(text)) return text;
        return `**${text}**`;
      }

      // Italic
      if (tag === 'i' || tag === 'em') {
        return `*${el.textContent?.trim()}*`;
      }

      // Span i inne — przetwórz dzieci
      return processChildren(el);
    };

    let result = '';
    temp.childNodes.forEach(node => { result += processNode(node); });

    return result
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  };

  const editorHtmlToMarkdown = (): string => {
    const html = editorRef.current?.innerHTML || '';
    return htmlToMarkdown(html, false);
  };

  const updateContentFromEditor = () => {
    const markdown = editorHtmlToMarkdown();
    editorContentRef.current = markdown;
    setIsEditorEmpty(!markdown.trim());
  };

  const runEditorCommand = (command: string, value?: string) => {
    const editor = editorRef.current;
    if (!editor) return;

    editor.focus();
    document.execCommand(command, false, value);
    updateContentFromEditor();
  };

  const formatBold = () => runEditorCommand('bold');
  const formatItalic = () => runEditorCommand('italic');
  const formatParagraph = () => runEditorCommand('formatBlock', 'p');
  const formatHeading = () => runEditorCommand('formatBlock', 'h2');
  const formatList = () => runEditorCommand('insertUnorderedList');
  const formatOrderedList = () => runEditorCommand('insertOrderedList');

  const insertHtmlAtCursor = (html: string) => {
    const editor = editorRef.current;
    if (!editor) return;

    editor.focus();
    document.execCommand('insertHTML', false, html);
    updateContentFromEditor();
  };

  // Obsługa wklejania tekstu - zawsze formatuj
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    // Sprawdź czy jest HTML (z Google Docs, Word itp.)
    const htmlData = e.clipboardData.getData('text/html');
    const plainText = e.clipboardData.getData('text/plain') || e.clipboardData.getData('text');
    
    let formatted: string;
    
    if (htmlData) {
      // Jeśli schowek zawiera HTML, użyj konwersji HTML → Markdown
      formatted = htmlToMarkdown(htmlData, true);
      // Dodatkowo przetwórz przez formatPastedText dla nagłówków itp.
      formatted = formatPastedText(formatted);
    } else {
      // Użyj zwykłego tekstu
      formatted = formatPastedText(plainText);
    }

    insertHtmlAtCursor(markdownToEditorHtml(formatted));
  };

  const handleLogin = async () => {
    try {
      const res = await fetch('/api/cms/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        setIsLoggedIn(true);
        setError('');
        setPassword('');
      } else {
        setError('Nieprawidłowa nazwa użytkownika lub hasło');
      }
    } catch {
      setError('Nie udało się połączyć z serwerem');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setIsEditing(false);
    fetch('/api/cms/logout', { method: 'POST' }).catch(() => {});
  };

  const handleAddNew = () => {
    setIsEditing(true);
    setEditingSlug(null);
    setFormData({
      nazwa: '',
      miejsce: '',
      img: '',
      content: '',
      recruitment_url: ''
    });
    syncEditorFromMarkdown('');
  };

  const handleEdit = (oferta: Oferta) => {
    setIsEditing(true);
    setEditingSlug(oferta.slug);
    setFormData({
      nazwa: oferta.nazwa,
      miejsce: oferta.miejsce,
      img: oferta.img,
      content: oferta.content,
      recruitment_url: oferta.recruitment_url || ''
    });
    syncEditorFromMarkdown(oferta.content);
  };

  const handleArchive = async (slug: string) => {
    if (!confirm('Czy na pewno chcesz zarchiwizować tę ofertę?')) return;
    
    try {
      setLoading(true);
      const res = await fetch(`/api/oferty-db?slug=${slug}`, {
        method: 'PATCH',
      });
      
      const data = await res.json();
      
      if (res.ok) {
        alert('Oferta zarchiwizowana pomyślnie!');
        fetchOferty();
        fetchArchivedOferty();
      } else {
        alert(data.error || 'Błąd archiwizacji oferty');
      }
    } catch (err) {
      console.error('Błąd:', err);
      alert('Nie udało się zarchiwizować oferty');
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async (slug: string) => {
    if (!confirm('Czy na pewno chcesz przywrócić tę ofertę?')) return;
    
    try {
      setLoading(true);
      const res = await fetch(`/api/oferty-archived-db?slug=${slug}`, {
        method: 'PATCH',
      });
      
      const data = await res.json();
      
      if (res.ok) {
        alert('Oferta przywrócona pomyślnie!');
        fetchOferty();
        fetchArchivedOferty();
      } else {
        alert(data.error || 'Błąd przywracania oferty');
      }
    } catch (err) {
      console.error('Błąd:', err);
      alert('Nie udało się przywrócić oferty');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteArchived = async (slug: string) => {
    if (!confirm('Czy na pewno chcesz TRWALE usunąć tę zarchiwizowaną ofertę? Tej operacji nie można cofnąć!')) return;
    
    try {
      setLoading(true);
      const res = await fetch(`/api/oferty-archived-db?slug=${slug}`, {
        method: 'DELETE',
      });
      
      const data = await res.json();
      
      if (res.ok) {
        alert('Zarchiwizowana oferta usunięta na stałe!');
        fetchArchivedOferty();
      } else {
        alert(data.error || 'Błąd usuwania oferty');
      }
    } catch (err) {
      console.error('Błąd:', err);
      alert('Nie udało się usunąć oferty');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Czy na pewno chcesz usunąć tę ofertę?')) return;
    
    try {
      setLoading(true);
      const res = await fetch(`/api/oferty-db?slug=${slug}`, {
        method: 'DELETE',
      });
      
      const data = await res.json();
      
      if (res.ok) {
        alert('Oferta usunięta pomyślnie!');
        fetchOferty();
      } else {
        alert(data.error || 'Błąd usuwania oferty');
      }
    } catch (err) {
      console.error('Błąd:', err);
      alert('Nie udało się usunąć oferty');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    const content = editorHtmlToMarkdown();
    editorContentRef.current = content;

    if (!formData.nazwa || !formData.miejsce || !content) {
      alert('Wypełnij wszystkie wymagane pola!');
      return;
    }
    
    try {
      setLoading(true);
      
      const url = '/api/oferty-db';
      const method = editingSlug ? 'PUT' : 'POST';
      const payload = { ...formData, content };
      const body = editingSlug 
        ? { ...payload, oldSlug: editingSlug }
        : payload;
      
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        alert(data.message || 'Oferta zapisana pomyślnie!');
        setIsEditing(false);
        setFormData({ nazwa: '', miejsce: '', img: '', content: '', recruitment_url: '' });
        fetchOferty();
      } else {
        alert(data.error || 'Błąd zapisywania oferty');
      }
    } catch (err) {
      console.error('Błąd:', err);
      alert('Nie udało się zapisać oferty');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ nazwa: '', miejsce: '', img: '', content: '', recruitment_url: '' });
  };


  // Widok logowania
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 pt-36 md:pt-32">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">CMS Kariera</h1>
            <p className="text-gray-600">Zaloguj się, aby zarządzać ofertami</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nazwa użytkownika
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="admin"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hasło
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Zaloguj się
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Widok edycji/dodawania
  if (isEditing) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8 pt-36 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {editingSlug ? 'Edytuj ofertę' : 'Dodaj nową ofertę'}
              </h2>
              <button
                onClick={handleCancel}
                disabled={loading}
                className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nazwa stanowiska *
                </label>
                <input
                  type="text"
                  value={formData.nazwa}
                  onChange={(e) => setFormData({...formData, nazwa: e.target.value})}
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100"
                  placeholder="np. Frontend Developer"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Miejsce pracy *
                </label>
                <input
                  type="text"
                  value={formData.miejsce}
                  onChange={(e) => setFormData({...formData, miejsce: e.target.value})}
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100"
                  placeholder="np. Warszawa / Zdalnie"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link do rekrutacji
                </label>
                <input
                  type="url"
                  value={formData.recruitment_url}
                  onChange={(e) => setFormData({...formData, recruitment_url: e.target.value})}
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100"
                  placeholder="https://system.erecruiter.pl/..."
                />
                <p className="mt-2 text-sm text-gray-500">
                  Pole opcjonalne. Jeśli pozostanie puste, przycisk „Aplikuj” nie pojawi się na stronie oferty.
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zdjęcie oferty
                </label>
                
                {/* Podgląd zdjęcia */}
                {formData.img && (
                  <div className="mb-3 relative">
                    <img
                      src={formData.img}
                      alt="Podgląd"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => setFormData({...formData, img: ''})}
                      className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                      disabled={uploading || loading}
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}

                {/* Dropdown z dostępnymi zdjęciami */}
                <div className="mb-3">
                  <select
                    value={formData.img}
                    onChange={(e) => setFormData({...formData, img: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  >
                    <option value="">— wybierz zdjęcie z listy —</option>
                    {availableImages.map((img) => (
                      <option key={img.url} value={img.url}>{img.name}</option>
                    ))}
                  </select>
                </div>

                {/* Upload nowego zdjęcia */}
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      setUploading(true);
                      try {
                        const fd = new FormData();
                        fd.append('file', file);
                        const res = await fetch('/api/upload', { method: 'POST', body: fd });
                        const data = await res.json();
                        if (res.ok) {
                          setFormData({...formData, img: data.url});
                          const updated = await fetch('/api/images').then(r => r.json());
                          setAvailableImages(updated);
                        } else {
                          alert(data.error || 'Błąd przesyłania');
                        }
                      } catch { alert('Nie udało się przesłać zdjęcia'); }
                      finally { setUploading(false); }
                    }}
                    disabled={uploading || loading}
                    className="hidden"
                  />
                  <div className="w-full px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer text-center font-medium">
                    {uploading ? 'Przesyłanie...' : '📁 Wgraj nowe zdjęcie'}
                  </div>
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Treść oferty *
                </label>
                
                {/* Przyciski formatowania */}
                <div className="flex gap-2 mb-2 p-2 bg-gray-100 rounded-t-lg border border-b-0 border-gray-300">
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={formatBold}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Pogrubienie"
                  >
                    <Bold size={18} />
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={formatItalic}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Kursywa"
                  >
                    <Italic size={18} />
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={formatParagraph}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Akapit"
                  >
                    <Type size={18} />
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={formatHeading}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Nagłówek"
                  >
                    <Heading2 size={18} />
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={formatList}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Lista"
                  >
                    <List size={18} />
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={formatOrderedList}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Lista numerowana"
                  >
                    <ListOrdered size={18} />
                  </button>
                </div>
                
                <div className="relative">
                  {isEditorEmpty && (
                    <div className="pointer-events-none absolute left-4 top-3 text-sm text-gray-400">
                      Tutaj wpisz treść oferty.
                    </div>
                  )}
                  <div
                    key={editorVersion}
                    ref={editorRef}
                    contentEditable={!loading}
                    suppressContentEditableWarning
                    onInput={updateContentFromEditor}
                    onBlur={updateContentFromEditor}
                    onPaste={handlePaste}
                    className="min-h-[360px] w-full px-4 py-3 border border-gray-300 rounded-b-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-white prose prose-sm max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-5 [&_h2]:mb-3 [&_p]:my-3 [&_ul]:my-3 [&_ol]:my-3 [&_li]:my-1"
                    role="textbox"
                    aria-label="Treść oferty"
                  />
                </div>
                <textarea
                  readOnly
                  value={editorContentRef.current}
                  className="hidden"
                  aria-hidden="true"
                  tabIndex={-1}
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Zapisywanie...
                    </>
                  ) : (
                    <>
                      <Save size={20} />
                      Zapisz ofertę
                    </>
                  )}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={loading}
                  className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors disabled:bg-gray-100"
                >
                  Anuluj
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Widok listy ofert
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 pt-36 md:pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 mb-2">Panel CMS</h1>
              <p className="text-gray-600">Zarządzaj ofertami pracy</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddNew}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2 disabled:bg-gray-400"
              >
                <Plus size={20} />
                Dodaj ofertę
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Wyloguj
              </button>
            </div>
          </div>
          
          {/* Zakładki */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === 'active'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Aktywne oferty
              {oferty.length > 0 && (
                <span className="ml-2 bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                  {oferty.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('archived')}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === 'archived'
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Archive size={16} className="inline-block mr-1 -mt-0.5" />
              Archiwum
              {archivedOferty.length > 0 && (
                <span className="ml-2 bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full text-xs">
                  {archivedOferty.length}
                </span>
              )}
            </button>
          </div>

          {/* Widok aktywnych ofert */}
          {activeTab === 'active' && (
            <>
              {loading && oferty.length === 0 ? (
                <div className="text-center py-12">
                  <Loader2 size={48} className="animate-spin mx-auto text-blue-600 mb-4" />
                  <p className="text-gray-500">Ładowanie ofert...</p>
                </div>
              ) : oferty.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">Brak aktywnych ofert pracy</p>
                  <button
                    onClick={handleAddNew}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Dodaj pierwszą ofertę
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {oferty.map((oferta) => (
                    <div
                      key={oferta.slug}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {oferta.nazwa}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            📍 {oferta.miejsce}
                          </p>
                          <p className="text-sm text-gray-500">
                            Slug: <code className="bg-gray-100 px-2 py-1 rounded">{oferta.slug}</code>
                          </p>
                          <a 
                            href={`/kariera/${oferta.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block"
                          >
                            Zobacz ofertę →
                          </a>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(oferta)}
                            disabled={loading}
                            className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-lg transition-colors disabled:opacity-50"
                            title="Edytuj"
                          >
                            <Edit2 size={20} />
                          </button>
                          <button
                            onClick={() => handleArchive(oferta.slug)}
                            disabled={loading}
                            className="bg-amber-50 hover:bg-amber-100 text-amber-600 p-3 rounded-lg transition-colors disabled:opacity-50"
                            title="Archiwizuj"
                          >
                            <Archive size={20} />
                          </button>
                          <button
                            onClick={() => handleDelete(oferta.slug)}
                            disabled={loading}
                            className="bg-red-50 hover:bg-red-100 text-red-600 p-3 rounded-lg transition-colors disabled:opacity-50"
                            title="Usuń"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Widok zarchiwizowanych ofert */}
          {activeTab === 'archived' && (
            <>
              {loading && archivedOferty.length === 0 ? (
                <div className="text-center py-12">
                  <Loader2 size={48} className="animate-spin mx-auto text-amber-600 mb-4" />
                  <p className="text-gray-500">Ładowanie archiwum...</p>
                </div>
              ) : archivedOferty.length === 0 ? (
                <div className="text-center py-12">
                  <Archive size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg mb-2">Archiwum jest puste</p>
                  <p className="text-gray-400 text-sm">Zarchiwizowane oferty pojawią się tutaj</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {archivedOferty.map((oferta) => (
                    <div
                      key={oferta.slug}
                      className="border border-amber-200 bg-amber-50/30 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-800">
                              {oferta.nazwa}
                            </h3>
                            <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-medium">
                              Zarchiwizowana
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">
                            📍 {oferta.miejsce}
                          </p>
                          <p className="text-sm text-gray-500">
                            Slug: <code className="bg-gray-100 px-2 py-1 rounded">{oferta.slug}</code>
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleRestore(oferta.slug)}
                            disabled={loading}
                            className="bg-green-50 hover:bg-green-100 text-green-600 p-3 rounded-lg transition-colors disabled:opacity-50"
                            title="Przywróć ofertę"
                          >
                            <RotateCcw size={20} />
                          </button>
                          <button
                            onClick={() => handleDeleteArchived(oferta.slug)}
                            disabled={loading}
                            className="bg-red-50 hover:bg-red-100 text-red-600 p-3 rounded-lg transition-colors disabled:opacity-50"
                            title="Usuń na stałe"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
