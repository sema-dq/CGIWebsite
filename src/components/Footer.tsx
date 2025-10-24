import { Heart, Facebook, Instagram, Mail, Globe } from 'lucide-react';

interface FooterProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const translations = {
  de: {
    tagline: 'Eine internationale christliche Gemeinschaft in Nansenstraße 10 79539 Lörrach',
    quickLinks: 'Schnelllinks',
    home: 'Startseite',
    about: 'Über uns',
    churchLife: 'Gemeindeleben',
    contact: 'Kontakt',
    serviceTimes: 'Gottesdienstzeiten',
    sunday: 'Sonntags: 12:00 - 13:30 Uhr',
    wednesday: 'Mittwochs (Gebet): 21:00 - 22:00 Uhr',
    copyright: '© 2025 Christliche Gemeinde International e.V. Alle Rechte vorbehalten.',
    madeWith: 'Erstellt mit',
    in: 'in',
  },
  en: {
    tagline: 'An international Christian community in Nansenstraße 10 79539 Lörrach',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    churchLife: 'Church Life',
    contact: 'Contact',
    serviceTimes: 'Service Times',
    sunday: 'Sundays: 12:00 - 13:30',
    wednesday: 'Wednesdays (Prayer): 21:00 - 22:00',
    copyright: '© 2025 Christliche Gemeinde International e.V. All rights reserved.',
    madeWith: 'Made with',
    in: 'by',
  },
};

export function Footer({ language, setLanguage }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                <span>CGI</span>
              </div>
              <div>
                <div className="text-white">Christliche Gemeinde</div>
                <div className="text-sm">International e.V.</div>
              </div>
            </div>
            <p className="text-sm">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#church-life" className="hover:text-blue-400 transition-colors">
                  {t.churchLife}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-white mb-4">{t.serviceTimes}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t.sunday}</li>
              <li>{t.wednesday}</li>
            </ul>
          </div>

          {/* Social & Language */}
          <div>
            <h4 className="text-white mb-4">{language === 'de' ? 'Verbinden' : 'Connect'}</h4>
            
            {/* Social Icons */}
            <div className="flex space-x-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@example.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <div
                role="group"
                aria-label="Language selection"
                className="flex items-center bg-gray-800 rounded-full p-1"
              >
                <button
                  onClick={() => setLanguage('de')}
                  aria-pressed={language === 'de'}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    language === 'de'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  aria-pressed={language === 'en'}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    language === 'en'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>{t.copyright}</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            {t.madeWith} <Heart className="h-4 w-4 text-red-500 fill-red-500" /> {t.in} sema
          </p>
        </div>
      </div>
    </footer>
  );
}
