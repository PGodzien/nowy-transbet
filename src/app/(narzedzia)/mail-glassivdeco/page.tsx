"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Base64Assets = {
  iconPhone: string;
  iconEmail: string;
  iconPin: string;
  logo: string;
};

export default function SignatureGeneratorGlassvideco() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const [circleSize, setCircleSize] = useState(100);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const outputCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const externalAssets = useMemo(() => ({
    iconPhone: "/phone.png",
    iconEmail: "/email.png",
    iconPin: "/pin.png",
    logo: "/logoglassivdeco.svg",
  }), []);

  const [base64Assets, setBase64Assets] = useState<Base64Assets | null>(null);

  const urlToBase64 = async (url: string): Promise<string> => {
    try {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0);
          const type = url.endsWith(".png") ? "image/png" : "image/png";
          resolve(canvas.toDataURL(type));
        };
        img.onerror = () => resolve(url);
        img.src = url;
      });
    } catch {
      return url;
    }
  };

  useEffect(() => {
    async function loadAssets() {
      const keys = Object.keys(externalAssets) as Array<keyof typeof externalAssets>;
      const base64Values = await Promise.all(keys.map((k) => urlToBase64(externalAssets[k])));
      const loaded: Partial<Base64Assets> = {};
      keys.forEach((k, i) => { loaded[k] = base64Values[i]; });
      setBase64Assets(loaded as Base64Assets);
    }
    loadAssets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fullName = useMemo(
    () => [firstName, lastName].filter(Boolean).join(" "),
    [firstName, lastName]
  );

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) { setImage(null); return; }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { setImage(img); setScale(1); setOffset({ x: 0, y: 0 }); };
    img.src = url;
  }

  useEffect(() => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    const cell = 10;
    for (let y = 0; y < H; y += cell)
      for (let x = 0; x < W; x += cell) {
        ctx.fillStyle = (Math.floor(x / cell) + Math.floor(y / cell)) % 2 === 0 ? "#eee" : "#ddd";
        ctx.fillRect(x, y, cell, cell);
      }
    const diameter = Math.min(W, H) - 8;
    const radius = diameter / 2;
    const cx = W / 2, cy = H / 2;
    if (image) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      const baseScale = Math.max(diameter / image.width, diameter / image.height);
      const s = baseScale * scale;
      const drawW = image.width * s, drawH = image.height * s;
      const dx = cx - drawW / 2 + offset.x, dy = cy - drawH / 2 + offset.y;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(image, dx, dy, drawW, drawH);
      ctx.restore();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [image, scale, offset]);

  function onMouseDown(e: React.MouseEvent<HTMLCanvasElement>) {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  }
  function onMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!isDragging) return;
    const start = dragStart.current;
    if (!start) return;
    setOffset({ x: e.clientX - start.x, y: e.clientY - start.y });
  }
  function onMouseUp() { setIsDragging(false); dragStart.current = null; }
  function onWheel(e: React.WheelEvent<HTMLCanvasElement>) {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.05 : -0.05;
    setScale((s) => Math.min(4, Math.max(0.3, s + delta)));
  }

  const circularDataUrl = useMemo(() => {
    const size = circleSize;
    const canvas = outputCanvasRef.current;
    if (!canvas) return null;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.clearRect(0, 0, size, size);
    ctx.save();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    if (image) {
      const diameter = size;
      const baseScale = Math.max(diameter / image.width, diameter / image.height);
      const s = baseScale * scale;
      const drawW = image.width * s, drawH = image.height * s;
      const scaleX = size / (previewCanvasRef.current?.width || size);
      const scaleY = size / (previewCanvasRef.current?.height || size);
      const dx = size / 2 - drawW / 2 + offset.x * scaleX;
      const dy = size / 2 - drawH / 2 + offset.y * scaleY;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(image, dx, dy, drawW, drawH);
    }
    ctx.restore();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 0.5, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(0,0,0,0.04)";
    ctx.lineWidth = 1;
    ctx.stroke();
    return image ? canvas.toDataURL("image/png") : null;
  }, [image, scale, offset, circleSize]);

  function escapeHtml(str: string) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function linkifyPhone(t: string) {
    const digits = t.replace(/[^0-9+]/g, "");
    return digits ? `tel:${digits}` : "#";
  }

  function buildSignatureHTML({
    name, title, photo, phone, phone2, email,
  }: {
    name: string; title: string; photo: string | null;
    phone?: string; phone2?: string; email?: string;
  }) {
    const finalAssets = base64Assets || externalAssets;
    const safeName = name || "";
    const safeTitle = title || "";
    const photoSize = 100;
    const nameFS = 18, nameLH = 24;
    const titleFS = 14, titleLH = 20;
    const bodyFS = 13, bodyLH = 18;
    const addrFS = 12, addrLH = 16;
    const companyFS = "6pt", companyLH = "8pt";
    const accent = "#1313ba";
    const hasPhoto = !!photo;

    let photoHtml = "";
    if (hasPhoto) {
      photoHtml = `<img src="${photo}" width="${photoSize}" height="${photoSize}" style="display:block;border:0;outline:none;text-decoration:none;" alt="" />`;
    }

    const rows: string[] = [];

    rows.push(`<tr>
      <td style="font-family:Arial, sans-serif; font-size:${bodyFS}px; line-height:${bodyLH}px; color:#111111;">
        ---<br>Pozdrawiam / Kind regards
      </td>
    </tr>`);

    rows.push(`<tr><td style="font-family:Arial, sans-serif; font-size:14px; line-height:20px; color:#555555;">&nbsp;</td></tr>`);

    if (safeName) {
      rows.push(`<tr><td style="font-family:Arial, sans-serif; font-size:${nameFS}px; line-height:${nameLH}px; color:${accent}; font-weight:bold;">${escapeHtml(safeName)}</td></tr>`);
    }

    if (safeTitle) {
      rows.push(`<tr><td style="font-family:Arial, sans-serif; font-size:${titleFS}px; line-height:${titleLH}px; color:#333333;">${escapeHtml(safeTitle)}</td></tr>`);
    }

    rows.push(`<tr><td style="font-family:Arial, sans-serif; font-size:14px; line-height:20px; color:#555555;">&nbsp;</td></tr>`);

    if (email) {
      const e = escapeHtml(email);
      rows.push(`<tr>
        <td style="font-family:Arial, sans-serif; font-size:${bodyFS}px; line-height:${bodyLH}px; color:#111111;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td valign="middle" style="padding-right:8px;"><img src="${finalAssets.iconEmail}" width="16" height="16" style="display:block;border:0;" alt="" /></td>
              <td valign="middle">E-mail: <a href="mailto:${e}" style="color:${accent}; text-decoration:none;">${e}</a></td>
            </tr>
          </table>
        </td>
      </tr>`);
    }

    if (phone) {
      const p = escapeHtml(phone);
      const href = linkifyPhone(phone);
      rows.push(`<tr>
        <td style="font-family:Arial, sans-serif; font-size:${bodyFS}px; line-height:${bodyLH}px; color:#111111;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td valign="middle" style="padding-right:8px;"><img src="${finalAssets.iconPhone}" width="16" height="16" style="display:block;border:0;" alt="" /></td>
              <td valign="middle">Telefon: <a href="${href}" style="color:${accent}; text-decoration:none;">${p}</a></td>
            </tr>
          </table>
        </td>
      </tr>`);
    }

    if (phone2) {
      const p = escapeHtml(phone2);
      const href = linkifyPhone(phone2);
      rows.push(`<tr>
        <td style="font-family:Arial, sans-serif; font-size:${bodyFS}px; line-height:${bodyLH}px; color:#111111;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td valign="middle" style="padding-right:8px;"><img src="${finalAssets.iconPhone}" width="16" height="16" style="display:block;border:0;" alt="" /></td>
              <td valign="middle">Telefon stacjonarny: <a href="${href}" style="color:${accent}; text-decoration:none;">${p}</a></td>
            </tr>
          </table>
        </td>
      </tr>`);
    }

    rows.push(`<tr>
      <td style="font-family:Arial, sans-serif; font-size:${addrFS}px; line-height:${addrLH}px; color:#555555;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr>
            <td valign="middle" style="padding-right:8px;"><img src="${finalAssets.iconPin}" width="16" height="16" style="display:block;border:0;" alt="" /></td>
            <td valign="middle">ul. Zbożowa 10, 37-500 Jarosław</td>
          </tr>
        </table>
      </td>
    </tr>`);

    rows.push(`<tr>
      <td style="padding-top:10px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr>
            <td valign="middle">
              <img src="${finalAssets.logo}" alt="Glassiv Deco" style="display:block;border:0;outline:none;text-decoration:none;" height="72" />
            </td>
          </tr>
        </table>
      </td>
    </tr>`);

    rows.push(`<tr>
      <td style="font-family:Arial, sans-serif; font-size:${companyFS}; line-height:${companyLH}; color:#555555; padding-top:8px;">
        TRANSBET BETONIARNIE GROCHOWICZ Sp. K.<br>
        NIP: 795-10-07-169<br>
        KRS: 0000573370
      </td>
    </tr>`);

    rows.push(`<tr><td style="font-family:Arial, sans-serif; font-size:14px; line-height:20px; color:#555555;">&nbsp;</td></tr>`);

    rows.push(`<tr>
      <td style="font-family:Arial, sans-serif; font-size:12px; line-height:18px; color:#777777;">
        Ten e-mail oraz wszelkie załączniki mogą zawierać informacje poufne. Jeśli nie jesteś adresatem, poinformuj nadawcę i usuń wiadomość.
      </td>
    </tr>`);

    let contentHtml;
    if (hasPhoto) {
      contentHtml = `
  <tr>
    <td valign="top" style="padding:0 16px 0 0;">${photoHtml}</td>
    <td valign="top" style="padding:0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
${rows.join("")}
      </table>
    </td>
  </tr>`;
    } else {
      contentHtml = `
  <tr>
    <td valign="top" style="padding:0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
${rows.join("")}
      </table>
    </td>
  </tr>`;
    }

    return `<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
<title>Signature</title>
</head>
<body style="margin:0;padding:0;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="border-collapse:collapse; width:600px;">
${contentHtml}
  </table>
</body>
</html>`;
  }

  function openInNewTab() {
    if (!base64Assets) { alert("Ładowanie zasobów w toku, spróbuj za chwilę."); return; }
    const html = buildSignatureHTML({ name: fullName, title: jobTitle, photo: circularDataUrl, phone, phone2, email });
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    window.open(URL.createObjectURL(blob), "_blank");
  }

  function downloadHtml() {
    if (!base64Assets) { alert("Ładowanie zasobów w toku, spróbuj za chwilę."); return; }
    const html = buildSignatureHTML({ name: fullName, title: jobTitle, photo: circularDataUrl, phone, phone2, email });
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safeFile = (fullName || "signature").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    a.href = url;
    a.download = `${safeFile || "signature"}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function copyHtml() {
    if (!base64Assets) { alert("Ładowanie zasobów w toku, spróbuj za chwilę."); return; }
    const html = buildSignatureHTML({ name: fullName, title: jobTitle, photo: circularDataUrl, phone, phone2, email });
    try {
      await navigator.clipboard.writeText(html);
      alert("Skopiowano HTML do schowka. Użyj Ctrl+V/Cmd+V w edytorze stopki.");
    } catch {
      alert("Nie udało się skopiować do schowka");
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 pt-12">
      <div className="mx-auto max-w-6xl p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Generator stopki mailowej glassvideco
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Field value={firstName} onChange={setFirstName} placeholder="Imię" />
          <Field value={lastName} onChange={setLastName} placeholder="Nazwisko" />
          <Field value={jobTitle} onChange={setJobTitle} placeholder="Stanowisko" />
          <Field value={phone} onChange={setPhone} placeholder="Telefon" />
          <Field value={phone2} onChange={setPhone2} placeholder="Telefon stacjonarny" />
          <Field value={email} onChange={setEmail} type="email" placeholder="Email" />

          <div className="flex flex-col space-y-4">
            <div className="bg-white rounded-2xl p-4 space-y-3">
              <label className="block text-sm font-medium text-gray-700">Wgraj zdjęcie</label>
              <input
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="block w-full text-sm text-gray-700
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 transition-colors"
              />
              <div className="text-xs text-gray-500">Wskazówka: użyj zdjęcia w dobrej rozdzielczości. Kółkiem myszy zmienisz zoom.</div>
            </div>
            <div className="bg-white rounded-2xl p-4">
              <h2 className="text-sm font-medium text-gray-700 mb-3">Ustawienia przycięcia</h2>
              <div className="flex items-center justify-between gap-3 mb-2">
                <label className="text-xs text-gray-600">Rozmiar finalnego kółka (px)</label>
                <input
                  type="number" min={64} max={256} step={4} value={circleSize}
                  onChange={(e) => setCircleSize(parseInt(e.target.value || "100", 10))}
                  className="w-24 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Powiększenie</span>
                <span className="text-xs text-gray-500">{scale.toFixed(2)}×</span>
              </div>
              <input
                type="range" min={0.3} max={4} step={0.01} value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-blue-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-sm font-medium text-gray-700 mb-3">Podgląd przycięcia</h2>
            <canvas
              ref={previewCanvasRef}
              width={150} height={150}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onWheel={onWheel}
              className={`w-40 h-40 border-2 border-gray-300 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              aria-label="Podgląd przycięcia"
            />
            <canvas ref={outputCanvasRef} className="hidden" />
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl p-4 flex flex-wrap gap-3">
            <button onClick={openInNewTab} disabled={!base64Assets}
              className="px-6 py-3 rounded-full bg-[#1313ba] text-white hover:bg-blue-900 transition text-sm font-semibold disabled:opacity-50">
              Generuj stopkę
            </button>
            <button onClick={downloadHtml} disabled={!base64Assets}
              className="px-6 py-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition text-sm font-semibold disabled:opacity-50">
              Pobierz .html
            </button>
            <button onClick={copyHtml} disabled={!base64Assets}
              className="px-6 py-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition text-sm font-semibold disabled:opacity-50">
              Kopiuj HTML
            </button>
            {!base64Assets && <span className="text-sm text-red-500 self-center">Ładowanie zasobów...</span>}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 mt-6">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Podgląd stopki</h2>
          <SignaturePreview
            html={
              base64Assets
                ? buildSignatureHTML({ name: fullName, title: jobTitle, photo: circularDataUrl, phone, phone2, email })
                : `<div style="padding: 20px; text-align: center; color: gray;">Ładowanie zasobów Base64... Proszę czekać.</div>`
            }
          />
          <div className="mt-4 text-xs text-gray-500">
            * Stopka generowana jest w 100% jako tabele z <em>inline styles</em> (Outlook‑safe).{" "}
            <strong>Obrazy zostały przekonwertowane na Base64, aby działały w Outlooku.</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ value, onChange, placeholder, type = "text" }: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) {
  return (
    <div className="p-4 border-b border-gray-200">
      <input
        type={type}
        className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none focus:border-blue-500 text-base placeholder-gray-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

function SignaturePreview({ html }: { html: string }) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState(240);
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(html);
    doc.close();
    const measure = () => {
      const newH = Math.max(160,
        (doc.documentElement && doc.documentElement.scrollHeight) ||
        (doc.body && doc.body.scrollHeight) || 0);
      setHeight(newH);
    };
    requestAnimationFrame(measure);
    setTimeout(measure, 50);
    setTimeout(measure, 200);
    const win = iframe.contentWindow as any;
    if (win && win.MutationObserver) {
      const mo = new win.MutationObserver(measure);
      mo.observe(doc.body, { childList: true, subtree: true, attributes: true, characterData: true });
      return () => { try { mo.disconnect(); } catch { } };
    }
  }, [html]);
  return (
    <div className="w-full p-4">
      <iframe
        ref={iframeRef}
        title="Podgląd stopki"
        style={{ width: "100%", height: `${height}px` }}
        sandbox="allow-same-origin"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}
