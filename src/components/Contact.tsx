import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

interface ContactProps {
  language: 'de' | 'en';
}

const translations = {
  de: {
    title: 'Kontakt & Standort',
    subtitle: 'Wir freuen uns darauf, Sie kennenzulernen',
    addressTitle: 'Adresse',
    address: 'Nansenstraße 10 79539 Lörrach, Deutschland',
    addressNote: '',
    timesTitle: 'Gottesdienstzeiten',
    sunday: 'Sonntags: 12:00 - 13:30 Uhr',
    wednesday: 'Mittwochs (Gebet): 21:00 - 22:00 Uhr',
    contactTitle: 'Kontakt',
    contactText: 'Haben Sie Fragen oder möchten Sie uns besuchen?',
    contactNote: 'Kontaktdetails auf Anfrage verfügbar',
    visitTitle: 'Besuchen Sie uns',
    visitText: 'Kommen Sie einfach vorbei! Wir freuen uns darauf, Sie willkommen zu heißen.',
    firstTimeTitle: 'Zum ersten Mal hier?',
    firstTimeText:
      'Keine Sorge - wir sind eine freundliche Gemeinschaft und heißen Neuankömmlinge herzlich willkommen. Sie können sich einfach entspannt zurücklehnen und den Gottesdienst genießen.',
    getDirections: 'Route planen',
    formTitle: 'Kontaktformular',
    formName: 'Name',
    formNamePlaceholder: 'Ihr Name',
    formEmail: 'E-Mail',
    formEmailPlaceholder: 'ihre.email@beispiel.de',
    formMessage: 'Nachricht',
    formMessagePlaceholder: 'Wie können wir Ihnen helfen?',
    formSubmit: 'Nachricht senden',
    formSuccess: 'Vielen Dank! Wir werden uns bald bei Ihnen melden.',
    formRequired: 'Dieses Feld ist erforderlich',
    formEmailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  },
  en: {
    title: 'Contact & Location',
    subtitle: 'We look forward to meeting you',
    addressTitle: 'Address',
    address: 'Nansenstraße 10 79539 Lörrach, Germany',
    addressNote: '',
    timesTitle: 'Service Times',
    sunday: 'Sundays: 12:00 - 13:30',
    wednesday: 'Wednesdays (Prayer): 21:00 - 22:00',
    contactTitle: 'Get in Touch',
    contactText: 'Have questions or want to visit?',
    contactNote: 'Contact details available upon request',
    visitTitle: 'Visit Us',
    visitText: 'Just come by! We look forward to welcoming you.',
    firstTimeTitle: 'First Time?',
    firstTimeText:
      "Don't worry - we're a friendly community and warmly welcome newcomers. You can simply relax and enjoy the service.",
    getDirections: 'Get Directions',
    formTitle: 'Contact Form',
    formName: 'Name',
    formNamePlaceholder: 'Your name',
    formEmail: 'Email',
    formEmailPlaceholder: 'your.email@example.com',
    formMessage: 'Message',
    formMessagePlaceholder: 'How can we help you?',
    formSubmit: 'Send Message',
    formSuccess: 'Thank you! We will get back to you soon.',
    formRequired: 'This field is required',
    formEmailInvalid: 'Please enter a valid email address',
  },
};

export function Contact({ language }: ContactProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) newErrors.name = t.formRequired;
    if (!formData.email.trim()) {
      newErrors.email = t.formRequired;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.formEmailInvalid;
    }
    if (!formData.message.trim()) newErrors.message = t.formRequired;

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      // Form is valid - in a real app, send to backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" role="region" aria-labelledby="contact-title">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="contact-title" className="mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="mb-2">{t.addressTitle}</h4>
                    <p className="text-gray-700">{t.address}</p>
                    <p className="text-sm text-gray-500 mt-1">{t.addressNote}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Times */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="mb-2">{t.timesTitle}</h4>
                    <p className="text-gray-700">{t.sunday}</p>
                    <p className="text-gray-700">{t.wednesday}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="mb-2">{t.contactTitle}</h4>
                    <p className="text-gray-700">{t.contactText}</p>
                    <p className="text-sm text-gray-500 mt-1">{t.contactNote}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form & Map */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">{t.formTitle}</h3>
                
                {isSubmitted && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {t.formSuccess}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name">{t.formName} *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t.formNamePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={errors.name ? 'border-red-500' : ''}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email">{t.formEmail} *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.formEmailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? 'border-red-500' : ''}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message">{t.formMessage} *</Label>
                    <Textarea
                      id="message"
                      placeholder={t.formMessagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={errors.message ? 'border-red-500' : ''}
                      rows={4}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    {t.formSubmit}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-700 mb-2">Nansenstraße 10 79539 Lörrach, Deutschland</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('https://www.google.com/maps/search/Nansenstraße 10 79539 Lörrach+Deutschland', '_blank')}
                  >
                    {t.getDirections}
                  </Button>
                </div>
              </div>
            </div>

            {/* Visit Info */}
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6">
                <h4 className="mb-3 text-white">{t.visitTitle}</h4>
                <p className="mb-4 text-blue-50">{t.visitText}</p>
                <div className="border-t border-blue-500 pt-4 mt-4">
                  <h4 className="mb-2 text-white">{t.firstTimeTitle}</h4>
                  <p className="text-blue-50 text-sm">{t.firstTimeText}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
