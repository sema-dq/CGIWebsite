import { Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  language: 'de' | 'en';
  scrollToSection: (sectionId: string) => void;
}

const translations = {
  de: {
    welcome: 'Willkommen',
    title: 'Christliche Gemeinde International e.V.',
    subtitle: 'Eine internationale christliche Gemeinschaft in Nansenstraße 10 79539 Lörrach',
    sundayService: 'Gottesdienst Sonntags',
    sundayTime: '12:00 - 13:30 Uhr',
    prayerMeeting: 'Gebetsstunde Mittwochs',
    prayerTime: '21:00 - 22:00 Uhr',
    location: 'Nansenstraße 10 79539 Lörrach, Deutschland',
    joinUs: 'Ihren Besuch planen',
    learnMore: 'Mehr erfahren',
  },
  en: {
    welcome: 'Welcome',
    title: 'Christliche Gemeinde International e.V.',
    subtitle: 'An international Christian community in Nansenstraße 10 79539 Lörrach',
    sundayService: 'Sunday Service',
    sundayTime: '12:00 - 13:30',
    prayerMeeting: 'Prayer Hour Wednesday',
    prayerTime: '21:00 - 22:00',
    location: 'Nansenstraße 10 79539 Lörrach, Germany',
    joinUs: 'Plan Your Visit',
    learnMore: 'Learn More',
  },
};

export function Hero({ language, scrollToSection }: HeroProps) {
  const t = translations[language];

  return (
    <section id="home" className="relative min-h-[600px] flex items-center" role="region" aria-label="Hero section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551327420-4b280d52cc68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2hlJTIwY29tbXVuaXR5JTIwd29ya2hpwfGVufDF8fHx8MTc2MDk2ODQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Church community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-4">
            {t.welcome}
          </div>
          <h1 className="text-white mb-4">{t.title}</h1>
          <p className="text-xl text-white/90 mb-8">{t.subtitle}</p>

          {/* Service Times CTA Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg border-2 border-blue-100">
            <h3 className="text-gray-900 mb-6">{language === 'de' ? 'Gottesdienstzeiten' : 'Service Times'}</h3>
            <div className="space-y-4">
              {/* Sunday Service */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">{t.sundayService}</div>
                  <div className="text-2xl text-blue-600">{t.sundayTime}</div>
                </div>
              </div>

              {/* Prayer Hour */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">{t.prayerMeeting}</div>
                  <div className="text-2xl text-blue-600">{t.prayerTime}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-white/90 mb-8">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">{t.location}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300"
              onClick={() => scrollToSection('contact')}
            >
              {t.joinUs}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300"
              onClick={() => scrollToSection('about')}
            >
              {t.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
