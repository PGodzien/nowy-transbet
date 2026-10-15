// Local landing pages "Betoniarnia <miejscowość>", 1:1 from the previous site (transbet-nextjs/app/betoniarnia-*),
// extracted by script: header title/description, intro, sections (text or "lead – text" lists), closing line, Google map.
export type PlantSection = { heading: string; text?: string; items?: { lead: string; text: string }[] };

export type ConcretePlant = {
  slug: string;
  title: string;
  description: string;
  intro: { heading: string; text: string };
  sections: PlantSection[];
  closing: { lead: string; text: string };
  map: string | null;
};

export const concretePlants: ConcretePlant[] = [
  {
    "slug": "betoniarnia-adamowka",
    "title": "Betoniarnia Adamówka",
    "description": "Nasza betoniarnia w Adamówce oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Adamówka",
      "text": "Betoniarnia Adamówka to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Adamówka to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Adamówka",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Adamówka,powiat+przeworski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-bialobrzegi",
    "title": "Betoniarnia Białobrzegi",
    "description": "Nasza betoniarnia w Białobrzegach oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Białobrzegi",
      "text": "Betoniarnia Białobrzegi to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Białobrzegi to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Białobrzegi",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Białobrzegi,powiat+łańcucki,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-bircza",
    "title": "Betoniarnia Bircza",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Bircza",
      "text": "Betoniarnia Bircza to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Bircza to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Bircza",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20649.192994714478!2d22.460815611369366!3d49.689164523211005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c7969a51ea17b%3A0xf90d65deec527e1b!2s37-740%20Bircza!5e0!3m2!1spl!2spl!4v1736199525569!5m2!1spl!2spl"
  },
  {
    "slug": "betoniarnia-blazowa",
    "title": "Betoniarnia Błażowa",
    "description": "Nasza betoniarnia w Błażowej oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Błażowa",
      "text": "Betoniarnia Błażowa to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Błażowa to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Błażowa",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Błażowa,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-boguchwala",
    "title": "Betoniarnia Boguchwała",
    "description": "Nasza betoniarnia w Boguchwale oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Boguchwała",
      "text": "Betoniarnia Boguchwała to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Boguchwała to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Boguchwała",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Boguchwała,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-brzozow",
    "title": "Betoniarnia Brzozów",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Brzozów",
      "text": "Betoniarnia Brzozów to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Brzozów to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Brzozów",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-chlopice",
    "title": "Betoniarnia Chłopice",
    "description": "Nasza betoniarnia w Chłopicach oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Chłopice",
      "text": "Betoniarnia Chłopice to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Chłopice to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Chłopice",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Chłopice,powiat+jarosławski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-chmielnik",
    "title": "Betoniarnia Chmielnik",
    "description": "Nasza betoniarnia w Chmielniku oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Chmielnik",
      "text": "Betoniarnia Chmielnik to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Chmielnik to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Chmielnik",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Chmielnik,powiat+rzeszowski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-cieszanow",
    "title": "Betoniarnia Cieszanów",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Cieszanów",
      "text": "Betoniarnia Cieszanów to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Cieszanów to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Cieszanów",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-cisna",
    "title": "Betoniarnia Cisna",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Cisna",
      "text": "Betoniarnia Cisna to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Cisna to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Cisna",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-czarna",
    "title": "Betoniarnia Czarna",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Czarna",
      "text": "Betoniarnia Czarna to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Czarna to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Czarna",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-czudec",
    "title": "Betoniarnia Czudec",
    "description": "Nasza betoniarnia w Czudcu oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Czudec",
      "text": "Betoniarnia Czudec to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Czudec to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Czudec",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Czudec,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-domaradz",
    "title": "Betoniarnia Domaradz",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Domaradz",
      "text": "Betoniarnia Domaradz to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Domaradz to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Domaradz",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-dubiecko",
    "title": "Betoniarnia Dubiecko",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Dubiecko",
      "text": "Betoniarnia Dubiecko to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Dubiecko to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Dubiecko",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-dynow",
    "title": "Betoniarnia Dynów",
    "description": "Nasza betoniarnia w Dynowie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Dynów",
      "text": "Betoniarnia Dynów to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Dynów to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Dynów",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Dynów,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-fredropol",
    "title": "Betoniarnia Fredropol",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Fredropol",
      "text": "Betoniarnia Fredropol to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Fredropol to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Fredropol",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-frysztak",
    "title": "Betoniarnia Frysztak",
    "description": "Nasza betoniarnia w Frysztaku oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Frysztak",
      "text": "Betoniarnia Frysztak to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Frysztak to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Frysztak",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Frysztak,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-gac",
    "title": "Betoniarnia Gać",
    "description": "Nasza betoniarnia w Gaci oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Gać",
      "text": "Betoniarnia Gać to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Gać to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Gać",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Gać,powiat+przeworski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-glogow-malopolski",
    "title": "Betoniarnia Głogów Małopolski",
    "description": "Nasza betoniarnia w Głogowie Małopolskim oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Głogów Małopolski",
      "text": "Betoniarnia Głogów Małopolski to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Głogów Małopolski to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Głogów Małopolski",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Głogów+Małopolski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-grodzisko-dolne",
    "title": "Betoniarnia Grodzisko Dolne",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Grodzisko Dolne",
      "text": "Betoniarnia Grodzisko Dolne to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Grodzisko Dolne to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Grodzisko Dolne",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-hyzne",
    "title": "Betoniarnia Hyżne",
    "description": "Nasza betoniarnia w Hyżnem oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Hyżne",
      "text": "Betoniarnia Hyżne to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Hyżne to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Hyżne",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Hyżne,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-jaroslaw",
    "title": "Betoniarnia Jarosław",
    "description": "Nasza Firma dzięki ścisłej kontroli jakości, zapewnia bezproblemowe spełnienie wszystkich wymagań jakościowych dotyczących mieszanki betonu.",
    "intro": {
      "heading": "Betoniarnia Jarosław",
      "text": "Betoniarnia Jarosław to wiodący producent betonu i materiałów budowlanych na Podkarpaciu. Z wieloletnim doświadczeniem i nowoczesnym zapleczem technologicznym, dostarczamy najwyższej jakości produkty, które spełniają oczekiwania nawet najbardziej wymagających klientów."
    },
    "sections": [
      {
        "heading": "Nasze atuty",
        "items": [
          {
            "lead": "Jakość",
            "text": "nasze produkty są wytwarzane z najwyższej jakości surowców, co gwarantuje ich trwałość i niezawodność."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "Korzystamy z najnowszych technologii w produkcji betonu, aby zapewnić naszym klientom produkty na najwyższym poziomie."
          },
          {
            "lead": "Terminowość Dostaw",
            "text": "doskonale rozumiemy, jak ważne są terminy w branży budowlanej. Zawsze dostarczamy nasze produkty na czas."
          },
          {
            "lead": "Profesjonalna Obsługa",
            "text": "nasi specjaliści służą fachową poradą i pomocą na każdym etapie współpracy."
          }
        ]
      },
      {
        "heading": "Zaufaj profesjonalistom",
        "text": "W Betoniarni Jarosław stawiamy na profesjonalizm i rzetelność. Nasz zespół to grupa doświadczonych specjalistów, którzy zadbają o to, aby każdy projekt budowlany zakończył się sukcesem. Zapewniamy indywidualne podejście do każdego klienta, konkurencyjne ceny i elastyczne warunki współpracy."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz doradztwa? Skontaktuj się z nami, a pomożemy Ci wybrać najlepsze rozwiązania dla Twojej budowy. Zapraszamy do współpracy!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Jarosław",
      "text": "- Twój niezawodny partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-jawornik-polski",
    "title": "Betoniarnia Jawornik Polski",
    "description": "Nasza betoniarnia w Jaworniku Polskim oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Jawornik Polski",
      "text": "Betoniarnia Jawornik Polski to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Jawornik Polski to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Jawornik Polski",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Jawornik+Polski,powiat+przeworski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-kamien",
    "title": "Betoniarnia Kamień",
    "description": "Nasza betoniarnia w Kamieniu oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Kamień",
      "text": "Betoniarnia Kamień to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Kamień to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Kamień",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Kamień,powiat+rzeszowski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-kanczuga",
    "title": "Betoniarnia Kańczuga",
    "description": "Nasza betoniarnia w Kańczudze oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Kańczuga",
      "text": "Betoniarnia Kańczuga to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Kańczuga to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Kańczuga",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Kańczuga,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-krasiczyn",
    "title": "Betoniarnia Krasiczyn",
    "description": "Nasza betoniarnia w Krasiczynie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Krasiczyn",
      "text": "Betoniarnia Krasiczyn to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Krasiczyn to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Krasiczyn",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Krasiczyn,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-krasne",
    "title": "Betoniarnia Krasne",
    "description": "Nasza betoniarnia w Krasnem oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Krasne",
      "text": "Betoniarnia Krasne to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Krasne to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Krasne",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Krasne,powiat+rzeszowski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-krzywcza",
    "title": "Betoniarnia Krzywcza",
    "description": "Nasza betoniarnia w Krzywczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Krzywcza",
      "text": "Betoniarnia Krzywcza to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Krzywcza to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Krzywcza",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Krzywcza,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-kurylowka",
    "title": "Betoniarnia Kuryłówka",
    "description": "Nasza betoniarnia w Kuryłówce oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Kuryłówka",
      "text": "Betoniarnia Kuryłówka to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Kuryłówka to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Kuryłówka",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Kuryłówka,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-lancut",
    "title": "Betoniarnia Łańcut",
    "description": "Nasza betoniarnia w Łańcucie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Łańcut",
      "text": "Betoniarnia Łańcut to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Łańcut to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Łańcut",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Łańcut,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-laszki",
    "title": "Betoniarnia Laszki",
    "description": "Nasza betoniarnia w Laszkach oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Laszki",
      "text": "Betoniarnia Laszki to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Laszki to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Laszki",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Laszki,powiat+jarosławski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-lezajsk",
    "title": "Betoniarnia Leżajsk",
    "description": "Nasza betoniarnia w Leżajsku oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Leżajsk",
      "text": "Betoniarnia Leżajsk to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Leżajsk to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Leżajsk",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Leżajsk,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-lubaczow",
    "title": "Betoniarnia Lubaczów",
    "description": "Nasza betoniarnia w Lubaczowie oferuje beton o najwyższej jakości, dostosowany do specyficznych potrzeb budowlanych i wymagających inwestycji.",
    "intro": {
      "heading": "Betoniarnia Lubaczów",
      "text": "Betoniarnia Lubaczów to firma z długoletnią tradycją w produkcji betonu oraz materiałów budowlanych w regionie Lubaczowa. Korzystamy z innowacyjnych technologii, aby dostarczać produkty o wyjątkowej trwałości i jakości, spełniające najwyższe standardy budowlane."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "nasze produkty charakteryzują się doskonałą odpornością oraz trwałością, co sprawia, że są idealne do wykorzystania w różnych warunkach."
          },
          {
            "lead": "Zaawansowana technologia",
            "text": "w naszej produkcji stosujemy najnowocześniejsze rozwiązania, zapewniając beton o idealnych właściwościach do różnych zastosowań budowlanych."
          },
          {
            "lead": "Terminowość dostaw",
            "text": "dostosowujemy się do potrzeb naszych klientów, dostarczając zamówione materiały dokładnie w wyznaczonym czasie."
          },
          {
            "lead": "Indywidualne podejście",
            "text": "zapewniamy pełne wsparcie, dostosowując nasze usługi do specyficznych wymagań klientów w zakresie doboru betonu oraz usług."
          }
        ]
      },
      {
        "heading": "Jakość, która buduje sukces",
        "text": "Betoniarnia Lubaczów to firma, której celem jest dostarczanie materiałów budowlanych najwyższej jakości. Nasz zespół ekspertów gwarantuje fachowe doradztwo i pomoc na każdym etapie realizacji projektu, aby każdy inwestor miał pewność, że wybrał najlepsze rozwiązanie dla swojej budowy."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Jeśli masz pytania lub szukasz najlepszego betonu do swojej inwestycji, skontaktuj się z nami. Nasz zespół pomoże Ci wybrać odpowiednie materiały, aby Twój projekt był wykonany z najlepszych dostępnych surowców. Czekamy na Twoje zapytanie!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Lubaczów",
      "text": "- niezawodny partner w budownictwie."
    },
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20652.657936818095!2d23.16360139405395!3d50.121388725478874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473bf92e7234b38d%3A0x51025507632d9502!2sLubacz%C3%B3w!5e0!3m2!1spl!2spl!4v1737843633836!5m2!1spl!2spl"
  },
  {
    "slug": "betoniarnia-lubenia",
    "title": "Betoniarnia Lubenia",
    "description": "Nasza betoniarnia w Lubeni oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Lubenia",
      "text": "Betoniarnia Lubenia to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Lubenia to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Lubenia",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Lubenia,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-markowa",
    "title": "Betoniarnia Markowa",
    "description": "Nasza betoniarnia w Markowej oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Markowa",
      "text": "Betoniarnia Markowa to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Markowa to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Markowa",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Markowa,powiat+przeworski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-medyka",
    "title": "Betoniarnia Medyka",
    "description": "Nasza betoniarnia w Medyce oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Medyka",
      "text": "Betoniarnia Medyka to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Medyka to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Medyka",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Medyka,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-niebylec",
    "title": "Betoniarnia Niebylec",
    "description": "Nasza betoniarnia w Niebylcu oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Niebylec",
      "text": "Betoniarnia Niebylec to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Niebylec to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Niebylec",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Niebylec,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-nowa-sarzyna",
    "title": "Betoniarnia Nowa Sarzyna",
    "description": "Nasza betoniarnia w Nowej Sarzynie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Nowa Sarzyna",
      "text": "Betoniarnia Nowa Sarzyna to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Nowa Sarzyna to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Nowa Sarzyna",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Nowa+Sarzyna,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-orly",
    "title": "Betoniarnia Orły",
    "description": "Nasza betoniarnia w Orłach oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Orły",
      "text": "Betoniarnia Orły to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Orły to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Orły",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Orły,powiat+przemyski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-pawlosow",
    "title": "Betoniarnia Pawłosiów",
    "description": "Nasza betoniarnia w Pawłosiowie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Pawłosiów",
      "text": "Betoniarnia Pawłosiów to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Pawłosiów to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Pawłosiów",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Pawłosiów,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-pruchnik",
    "title": "Betoniarnia Pruchnik",
    "description": "Nasza betoniarnia w Pruchniku oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Pruchnik",
      "text": "Betoniarnia Pruchnik to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Pruchnik to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Pruchnik",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Pruchnik,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-przemysl",
    "title": "Betoniarnia Przemyśl",
    "description": "Nasza Firma dzięki ścisłej kontroli jakości, zapewnia bezproblemowe spełnienie wszystkich wymagań jakościowych dotyczących mieszanki betonu.",
    "intro": {
      "heading": "Betoniarnia Przemyśl",
      "text": "Betoniarnia Przemyśl to wiodący producent betonu i materiałów budowlanych na Podkarpaciu. Z wieloletnim doświadczeniem i nowoczesnym zapleczem technologicznym, dostarczamy najwyższej jakości produkty, które spełniają oczekiwania nawet najbardziej wymagających klientów."
    },
    "sections": [
      {
        "heading": "Nasze atuty",
        "items": [
          {
            "lead": "Jakość",
            "text": "nasze produkty są wytwarzane z najwyższej jakości surowców, co gwarantuje ich trwałość i niezawodność."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "Korzystamy z najnowszych technologii w produkcji betonu, aby zapewnić naszym klientom produkty na najwyższym poziomie."
          },
          {
            "lead": "Terminowość Dostaw",
            "text": "doskonale rozumiemy, jak ważne są terminy w branży budowlanej. Zawsze dostarczamy nasze produkty na czas."
          },
          {
            "lead": "Profesjonalna Obsługa",
            "text": "nasi specjaliści służą fachową poradą i pomocą na każdym etapie współpracy."
          }
        ]
      },
      {
        "heading": "Zaufaj profesjonalistom",
        "text": "W Betoniarni Przemyśl stawiamy na profesjonalizm i rzetelność. Nasz zespół to grupa doświadczonych specjalistów, którzy zadbają o to, aby każdy projekt budowlany zakończył się sukcesem. Zapewniamy indywidualne podejście do każdego klienta, konkurencyjne ceny i elastyczne warunki współpracy."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz doradztwa? Skontaktuj się z nami, a pomożemy Ci wybrać najlepsze rozwiązania dla Twojej budowy. Zapraszamy do współpracy!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Przemyśl",
      "text": "- Twój niezawodny partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-przeworsk",
    "title": "Betoniarnia Przeworsk",
    "description": "Nasza firma w Przeworsku gwarantuje najwyższą jakość betonu, spełniając wszelkie standardy technologiczne i budowlane.",
    "intro": {
      "heading": "Trasbet - Betoniarnia Przeworsk",
      "text": "Nasza betoniarnia w Przeworsku to lider w produkcji betonu oraz materiałów budowlanych w regionie. Z doświadczeniem i nowoczesnym zapleczem, dostarczamy materiały, które spełniają wymagania naszych klientów, zapewniając wysoką jakość oraz trwałość."
    },
    "sections": [
      {
        "heading": "Zalety betoniarni Przeworsk",
        "items": [
          {
            "lead": "Jakość",
            "text": "dzięki wykorzystaniu surowców najwyższej jakości, nasze produkty cechują się wyjątkową trwałością i odpornością."
          },
          {
            "lead": "Nowoczesna produkcja",
            "text": "stosujemy innowacyjne rozwiązania technologiczne, które zapewniają niezawodność naszych produktów."
          },
          {
            "lead": "Dokładność w dostawach",
            "text": "znamy znaczenie terminów w branży budowlanej, dlatego zawsze realizujemy zamówienia zgodnie z ustalonymi datami."
          },
          {
            "lead": "Wysoka jakość obsługi",
            "text": "oferujemy profesjonalną pomoc i doradztwo w zakresie betonu, dostosowane do potrzeb naszych klientów."
          }
        ]
      },
      {
        "heading": "Dlaczego warto wybrać nasze usługi na terenie Przeworska?",
        "text": "Transbet to miejsce, które stawia na solidność i jakość. Nasz zespół ekspertów pomoże Ci w realizacji projektu, dbając o każdy jego etap. Oferujemy konkurencyjne ceny oraz elastyczne warunki współpracy, aby nasze produkty mogły spełniać Twoje potrzeby."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytanie dotyczące naszych produktów? Skontaktuj się z nami, a chętnie doradzimy Ci, jak wybrać odpowiedni beton na Twoją budowę w Przeworsku i okolicach. Czekamy na Twoje zapytania!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Przeworsk",
      "text": "- solidny partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-radymno",
    "title": "Betoniarnia Radymno",
    "description": "Nasza Firma dzięki ścisłej kontroli jakości, zapewnia bezproblemowe spełnienie wszystkich wymagań jakościowych dotyczących mieszanki betonu.",
    "intro": {
      "heading": "Betoniarnia Radymno",
      "text": "Betoniarnia Radymno to wiodący producent betonu i materiałów budowlanych na Podkarpaciu. Z wieloletnim doświadczeniem i nowoczesnym zapleczem technologicznym, dostarczamy najwyższej jakości produkty, które spełniają oczekiwania nawet najbardziej wymagających klientów."
    },
    "sections": [
      {
        "heading": "Nasze atuty",
        "items": [
          {
            "lead": "Jakość",
            "text": "nasze produkty są wytwarzane z najwyższej jakości surowców, co gwarantuje ich trwałość i niezawodność."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "Korzystamy z najnowszych technologii w produkcji betonu, aby zapewnić naszym klientom produkty na najwyższym poziomie."
          },
          {
            "lead": "Terminowość Dostaw",
            "text": "doskonale rozumiemy, jak ważne są terminy w branży budowlanej. Zawsze dostarczamy nasze produkty na czas."
          },
          {
            "lead": "Profesjonalna Obsługa",
            "text": "nasi specjaliści służą fachową poradą i pomocą na każdym etapie współpracy."
          }
        ]
      },
      {
        "heading": "Zaufaj profesjonalistom",
        "text": "W Betoniarni Radymno stawiamy na profesjonalizm i rzetelność. Nasz zespół to grupa doświadczonych specjalistów, którzy zadbają o to, aby każdy projekt budowlany zakończył się sukcesem. Zapewniamy indywidualne podejście do każdego klienta, konkurencyjne ceny i elastyczne warunki współpracy."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz doradztwa? Skontaktuj się z nami, a pomożemy Ci wybrać najlepsze rozwiązania dla Twojej budowy. Zapraszamy do współpracy!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Radymno",
      "text": "- Twój niezawodny partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-rakszawa",
    "title": "Betoniarnia Rakszawa",
    "description": "Nasza betoniarnia w Rakszawie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Rakszawa",
      "text": "Betoniarnia Rakszawa to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Rakszawa to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Rakszawa",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Rakszawa,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-rokietnica",
    "title": "Betoniarnia Rokietnica",
    "description": "Nasza betoniarnia w Rokietnicy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Rokietnica",
      "text": "Betoniarnia Rokietnica to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Rokietnica to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Rokietnica",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Rokietnica,powiat+jarosławski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-rozwienica",
    "title": "Betoniarnia Roźwienica",
    "description": "Nasza betoniarnia w Roźwienicy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Roźwienica",
      "text": "Betoniarnia Roźwienica to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Roźwienica to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Roźwienica",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Roźwienica,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-rzeszow",
    "title": "Betoniarnia Rzeszów",
    "description": "Nasza Firma dzięki ścisłej kontroli jakości, zapewnia bezproblemowe spełnienie wszystkich wymagań jakościowych dotyczących mieszanki betonu.",
    "intro": {
      "heading": "Betoniarnia Rzeszów",
      "text": "Betoniarnia Rzeszów to wiodący producent betonu i materiałów budowlanych obsługujący stolicę Podkarpacia i okolice. Z wieloletnim doświadczeniem i nowoczesnym zapleczem technologicznym, dostarczamy najwyższej jakości produkty na terenie Rzeszowa i całego województwa podkarpackiego."
    },
    "sections": [
      {
        "heading": "Beton Rzeszów - najwyższa jakość",
        "text": "Jako sprawdzony dostawca betonu w Rzeszowie, oferujemy pełną gamę mieszanek betonowych dostosowanych do różnych zastosowań budowlanych. Nasz beton towarowy Rzeszów spełnia najwyższe standardy jakościowe i jest idealny zarówno do małych inwestycji prywatnych, jak i dużych projektów komercyjnych."
      },
      {
        "heading": "Nasze atuty",
        "items": [
          {
            "lead": "Jakość",
            "text": "nasze produkty są wytwarzane z najwyższej jakości surowców, co gwarantuje ich trwałość i niezawodność."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "Korzystamy z najnowszych technologii w produkcji betonu, aby zapewnić naszym klientom produkty na najwyższym poziomie."
          },
          {
            "lead": "Terminowość Dostaw",
            "text": "doskonale rozumiemy, jak ważne są terminy w branży budowlanej. Dostarczamy beton w Rzeszowie i okolicach zawsze na czas."
          },
          {
            "lead": "Profesjonalna Obsługa",
            "text": "nasi specjaliści służą fachową poradą i pomocą na każdym etapie współpracy."
          },
          {
            "lead": "Konkurencyjne ceny",
            "text": "oferujemy atrakcyjne ceny betonu w Rzeszowie przy zachowaniu najwyższej jakości."
          }
        ]
      },
      {
        "heading": "Dostawa betonu Rzeszów",
        "text": "Zapewniamy szybką i terminową dostawę betonu na terenie Rzeszowa oraz okolicznych miejscowości. Nasza flota betonomieszarek gwarantuje, że świeży beton dotrze na Twoją budowę w idealnym stanie. Obsługujemy zarówno centrum Rzeszowa, jak i dzielnice: Baranówka, Biała, Budziwój, Drabinianka, Nowe Miasto, Przybyszówka, Słocina, Staromieście, Staroniwa, Wilkowyja, Zalesie oraz wszystkie okoliczne gminy."
      },
      {
        "heading": "Zaufaj profesjonalistom",
        "text": "W naszej betoniarni w Rzeszowie stawiamy na profesjonalizm i rzetelność. Nasz zespół to grupa doświadczonych specjalistów, którzy zadbają o to, aby każdy projekt budowlany w Rzeszowie i okolicach zakończył się sukcesem. Zapewniamy indywidualne podejście do każdego klienta, konkurencyjne ceny betonu i elastyczne warunki współpracy."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Szukasz sprawdzonego dostawcy betonu w Rzeszowie? Masz pytania lub potrzebujesz doradztwa? Skontaktuj się z nami, a pomożemy Ci wybrać najlepsze rozwiązania dla Twojej budowy. Zapraszamy do współpracy!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Rzeszów",
      "text": "- Twój niezawodny partner w budownictwie na terenie stolicy Podkarpacia."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-sieniawa",
    "title": "Betoniarnia Sieniawa",
    "description": "Nasza betoniarnia w Sieniawie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Sieniawa",
      "text": "Betoniarnia Sieniawa to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Sieniawa to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Sieniawa",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Sieniawa,powiat+przeworski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-sokolow-malopolski",
    "title": "Betoniarnia Sokołów Małopolski",
    "description": "Nasza betoniarnia w Sokołowie Małopolskim oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Sokołów Małopolski",
      "text": "Betoniarnia Sokołów Małopolski to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Sokołów Małopolski to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Sokołów Małopolski",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Sokołów+Małopolski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-strzyzow",
    "title": "Betoniarnia Strzyżów",
    "description": "Nasza betoniarnia w Strzyżowie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Strzyżów",
      "text": "Betoniarnia Strzyżów to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Strzyżów to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Strzyżów",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Strzyżów,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-stubno",
    "title": "Betoniarnia Stubno",
    "description": "Nasza betoniarnia w Stubnie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Stubno",
      "text": "Betoniarnia Stubno to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Stubno to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Stubno",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Stubno,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-swilcza",
    "title": "Betoniarnia Świlcza",
    "description": "Nasza betoniarnia w Świlczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Świlcza",
      "text": "Betoniarnia Świlcza to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Świlcza to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Świlcza",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Świlcza,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-tryncza",
    "title": "Betoniarnia Tryńcza",
    "description": "Nasza betoniarnia w Tryńczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Tryńcza",
      "text": "Betoniarnia Tryńcza to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Tryńcza to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Tryńcza",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Tryńcza,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-tyczyn",
    "title": "Betoniarnia Tyczyn",
    "description": "Nasza betoniarnia w Tyczynie oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Tyczyn",
      "text": "Betoniarnia Tyczyn to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Tyczyn to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Tyczyn",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Tyczyn,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-wiazownica",
    "title": "Betoniarnia Wiązownica",
    "description": "Nasza betoniarnia w Wiązownicy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Wiązownica",
      "text": "Betoniarnia Wiązownica to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Wiązownica to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Wiązownica",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Wiązownica,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-wisniowa",
    "title": "Betoniarnia Wiśniowa",
    "description": "Nasza betoniarnia w Wiśniowej oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Wiśniowa",
      "text": "Betoniarnia Wiśniowa to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Wiśniowa to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Wiśniowa",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Wiśniowa,powiat+strzyżowski,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-zarzecze",
    "title": "Betoniarnia Zarzecze",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Zarzecze",
      "text": "Betoniarnia Zarzecze to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Zarzecze to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Zarzecze",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  },
  {
    "slug": "betoniarnia-zolynia",
    "title": "Betoniarnia Żołynia",
    "description": "Nasza betoniarnia w Żołyni oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Żołynia",
      "text": "Betoniarnia Żołynia to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Żołynia to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Żołynia",
      "text": "- Twój partner w budownictwie."
    },
    "map": "https://maps.google.com/maps?q=Żołynia,Polska&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "slug": "betoniarnia-zurawica",
    "title": "Betoniarnia Żurawica",
    "description": "Nasza betoniarnia w Birczy oferuje produkty betonowe najwyższej jakości, dostosowane do wymagań branży budowlanej i indywidualnych potrzeb klientów.",
    "intro": {
      "heading": "Betoniarnia Żurawica",
      "text": "Betoniarnia Żurawica to firma z wieloletnim doświadczeniem w produkcji betonu i materiałów budowlanych w regionie. Dzięki nowoczesnym rozwiązaniom technologicznym oferujemy produkty, które cechują się wysoką jakością, trwałością oraz niezawodnością w każdych warunkach."
    },
    "sections": [
      {
        "heading": "Dlaczego warto wybrać nas?",
        "items": [
          {
            "lead": "Wysoka jakość",
            "text": "produkowane przez nas materiały cechuje wysoka trwałość, odporność oraz niezawodność w różnych warunkach eksploatacyjnych."
          },
          {
            "lead": "Nowoczesna technologia",
            "text": "w procesie produkcji korzystamy z najnowszych rozwiązań, aby dostarczać beton o wyjątkowej jakości i właściwościach."
          },
          {
            "lead": "Punktualność dostaw",
            "text": "zapewniamy terminową realizację zamówień, co ma kluczowe znaczenie w każdym projekcie budowlanym."
          },
          {
            "lead": "Profesjonalna obsługa klienta",
            "text": "oferujemy fachową pomoc i doradztwo na każdym etapie współpracy, dopasowując produkty do konkretnych potrzeb klienta."
          }
        ]
      },
      {
        "heading": "Nasze zobowiązanie do jakości",
        "text": "Betoniarnia Żurawica to firma, której misją jest dostarczanie materiałów budowlanych wysokiej jakości, które spełniają oczekiwania klientów. Nasi specjaliści zapewnią pełne wsparcie, zarówno pod względem doboru odpowiednich produktów, jak i terminowej realizacji zamówień."
      },
      {
        "heading": "Skontaktuj się z nami",
        "text": "Masz pytania lub potrzebujesz pomocy przy wyborze materiałów budowlanych? Skontaktuj się z nami, a pomożemy dobrać najlepsze rozwiązanie dostosowane do Twoich potrzeb budowlanych. Czekamy na Twój kontakt!"
      }
    ],
    "closing": {
      "lead": "Betoniarnia Żurawica",
      "text": "- Twój partner w budownictwie."
    },
    "map": null
  }
];

export function getPlant(slug: string) {
  return concretePlants.find((plant) => plant.slug === slug);
}
