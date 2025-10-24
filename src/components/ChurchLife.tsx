import { Calendar, Clock, Users, BookOpen, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ChurchLifeProps {
  language: 'de' | 'en';
}

const translations = {
  de: {
    title: 'Gemeindeleben',
    subtitle: 'Entdecken Sie unsere Gottesdienste und Veranstaltungen',
    sundayServiceTitle: 'Sonntags-Gottesdienst',
    sundayServiceDesc: 'Unser Hauptgottesdienst',
    sundayServiceTime: 'Sonntags: 12:00 - 13:30 Uhr',
    sundayServiceDetails:
      'Kommen Sie und erleben Sie einen inspirierenden Gottesdienst mit Lobpreis, Gebet und biblischer Predigt. Jeder ist herzlich willkommen!',
    prayerHourTitle: 'Gebetsstunde',
    prayerHourDesc: 'Gemeinsames Gebet',
    prayerHourTime: 'Mittwochs: 21:00 - 22:00 Uhr',
    prayerHourDetails:
      'Treffen Sie sich mit uns zum Online Gebet. Eine Zeit der Anbetung, Fürbitte und Gemeinschaft mit Gott.',
    prayerHourLinkLabel: 'Jetzt online teilnehmen',
    prayerHourLinkUrl: 'https://join.freeconferencecall.com/mgwangwa',
    whatToExpectTitle: 'Was Sie erwarten können',
    whatToExpect1: 'Herzlicher Empfang',
    whatToExpect1Text: 'Freundliche Atmosphäre und offene Herzen',
    whatToExpect2: 'Internationale Gemeinschaft',
    whatToExpect2Text: 'Menschen aus verschiedenen Kulturen',
    whatToExpect3: 'Biblische Lehre',
    whatToExpect3Text: 'Praktische und relevante Predigten',
    whatToExpect4: 'Lobpreis & Anbetung',
    whatToExpect4Text: 'Zeitgenössische und traditionelle Musik',
  },
  en: {
    title: 'Church Life',
    subtitle: 'Discover our services and events',
    sundayServiceTitle: 'Sunday Service',
    sundayServiceDesc: 'Our main worship service',
    sundayServiceTime: 'Sundays: 12:00 - 13:30',
    sundayServiceDetails:
      'Come and experience an inspiring service with worship, prayer, and biblical preaching. Everyone is warmly welcome!',
    prayerHourTitle: 'Prayer Hour',
    prayerHourDesc: 'Corporate prayer time',
    prayerHourTime: 'Wednesdays: 21:00 - 22:00',
    prayerHourDetails:
      'Join us for corporate prayer. A time of worship, intercession, and communion with God.',
    prayerHourLinkLabel: 'Join online now',
    prayerHourLinkUrl: 'https://join.freeconferencecall.com/mgwangwa',
    whatToExpectTitle: 'What to Expect',
    whatToExpect1: 'Warm Welcome',
    whatToExpect1Text: 'Friendly atmosphere and open hearts',
    whatToExpect2: 'International Community',
    whatToExpect2Text: 'People from various cultures',
    whatToExpect3: 'Biblical Teaching',
    whatToExpect3Text: 'Practical and relevant messages',
    whatToExpect4: 'Praise & Worship',
    whatToExpect4Text: 'Contemporary and traditional music',
  },
};

export function ChurchLife({ language }: ChurchLifeProps) {
  const t = translations[language];

  const expectations = [
    { icon: Users, title: t.whatToExpect1, text: t.whatToExpect1Text },
    { icon: Globe, title: t.whatToExpect2, text: t.whatToExpect2Text },
    { icon: BookOpen, title: t.whatToExpect3, text: t.whatToExpect3Text },
    { icon: Calendar, title: t.whatToExpect4, text: t.whatToExpect4Text },
  ];

  return (
    <section id="church-life" className="py-20" role="region" aria-labelledby="church-life-title">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="church-life-title" className="mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Service Times */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Sunday Service */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551327420-4b280d52cc68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjB3b3JzaGlwfGVufDF8fHx8MTc2MDk2ODQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sunday Service"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 text-blue-600 mb-2">
                <Calendar className="h-5 w-5" />
                <CardDescription>{t.sundayServiceDesc}</CardDescription>
              </div>
              <CardTitle>{t.sundayServiceTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-lg">{t.sundayServiceTime}</span>
              </div>
              <p className="text-gray-600">{t.sundayServiceDetails}</p>
            </CardContent>
          </Card>

          {/* Prayer Hour */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzYwODU4ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Prayer Hour"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 text-blue-600 mb-2">
                <Calendar className="h-5 w-5" />
                <CardDescription>{t.prayerHourDesc}</CardDescription>
              </div>
              <CardTitle id="prayer-hour">{t.prayerHourTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-lg">{t.prayerHourTime}</span>
              </div>
              <p className="text-gray-600">{t.prayerHourDetails}</p>
              <a
                href={t.prayerHourLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                aria-label={`${t.prayerHourTitle} – ${t.prayerHourDesc}`}
              >
                {t.prayerHourLinkLabel}
              </a>
            </CardContent>
          </Card>
        </div>

        {/* What to Expect */}
        <div className="bg-blue-50 rounded-xl p-8 md:p-12">
          <h3 className="text-center mb-8">{t.whatToExpectTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full mb-4">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
