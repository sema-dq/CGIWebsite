import { Heart, Users, Globe, BookOpen, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  language: 'de' | 'en';
}

const translations = {
  de: {
    title: 'Über uns',
    subtitle: 'Eine einladende internationale christliche Gemeinschaft',
    description:
      'Wir sind die Christliche Gemeinde International e.V., eine lebendige und vielfältige Gemeinschaft in Nansenstraße 10 79539 Lörrach. Unsere Gemeinde heißt Menschen aller Nationen willkommen und schafft einen Raum, in dem Glaube, Hoffnung und Liebe im Mittelpunkt stehen.',
    mission: 'Unsere Mission',
    missionText:
      'Wir möchten Menschen dabei helfen, Jesus Christus kennenzulernen und eine persönliche Beziehung zu ihm aufzubauen. Dabei legen wir Wert auf Gemeinschaft, gegenseitige Unterstützung und das gemeinsame Wachstum im Glauben.',
    values: 'Unsere Werte',
    value1Title: 'Gemeinschaft',
    value1Text: 'Wir bauen echte Beziehungen auf und unterstützen uns gegenseitig.',
    value2Title: 'International',
    value2Text: 'Wir heißen Menschen aus allen Kulturen und Nationen willkommen.',
    value3Title: 'Glauben',
    value3Text: 'Wir gründen uns auf die Bibel und die Lehren Jesu Christi.',
    value4Title: 'Gastfreundschaft',
    value4Text: 'Jeder ist willkommen, egal woher er kommt oder wo er steht.',
  },
  en: {
    title: 'About Us',
    subtitle: 'A welcoming international Christian community',
    description:
      'We are Christliche Gemeinde International e.V., a vibrant and diverse community in Nansenstraße 10 79539 Lörrach. Our church welcomes people from all nations and creates a space where faith, hope, and love are at the center.',
    mission: 'Our Mission',
    missionText:
      'We want to help people get to know Jesus Christ and build a personal relationship with Him. We value community, mutual support, and growing together in faith.',
    values: 'Our Values',
    value1Title: 'Community',
    value1Text: 'We build genuine relationships and support one another.',
    value2Title: 'International',
    value2Text: 'We welcome people from all cultures and nations.',
    value3Title: 'Faith',
    value3Text: 'We are grounded in the Bible and the teachings of Jesus Christ.',
    value4Title: 'Hospitality',
    value4Text: 'Everyone is welcome, no matter where they come from or where they are.',
  },
};

export function About({ language }: AboutProps) {
  const t = translations[language];
  const [isLeadershipExpanded, setIsLeadershipExpanded] = useState(false);

  const values = [
    { icon: Heart, title: t.value1Title, text: t.value1Text },
    { icon: Globe, title: t.value2Title, text: t.value2Text },
    { icon: BookOpen, title: t.value3Title, text: t.value3Text },
    { icon: Users, title: t.value4Title, text: t.value4Text },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" role="region" aria-labelledby="about-title">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 id="about-title" className="mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/flagged/photo-1563203148-52cc820a0e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwcHJheWluZ3xlbnwxfHx8fDE3NjA5Njg0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-8">{t.description}</p>
            <h3 className="mb-6">{t.mission}</h3>
            <p className="text-gray-700">{t.missionText}</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-36">
          <h3 className="text-center mb-16">{t.values}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow mb-10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="mb-4">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Members Section - Collapsible */}
        <div className="mt-20">
          <button
            className="flex items-center justify-center w-full py-4 text-center cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            onClick={() => setIsLeadershipExpanded(!isLeadershipExpanded)}
            aria-expanded={isLeadershipExpanded}
            aria-controls="leadership-content"
          >
            <h3 className="text-center mb-0 mr-2">Unsere Leitung</h3>
            <ChevronDown 
              className={`transform transition-transform duration-300 ${
                isLeadershipExpanded ? 'rotate-180' : ''
              }`} 
              size={24}
            />
          </button>
          
          <div 
            id="leadership-content"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isLeadershipExpanded ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Marcel Gwangwaa - Leading Pastor */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="/images/team/marcel.jpg"
                  alt="Marcel Gwangwaa"
                  className="w-50 h-50 rounded-full object-cover mx-auto mb-4"
                  width="200"
                  height="200"
                />
                <h4 className="mb-2 font-bold">Marcel Gwangwaa</h4>
                <p className="text-blue-600 mb-2">LEITENDER PASTOR</p>
              </div>

              {/* Ebenezer Jonathan - Executive Pastor */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="/images/team/ebenezer.jpg"
                  alt="Ebenezer Jonathan"
                  className="w-50 h-50 rounded-full object-cover mx-auto mb-4"
                  width="200"
                  height="200"
                />
                <h4 className="mb-2 font-bold">Ebenezer Jonathan</h4>
                <p className="text-blue-600 mb-2">EXECUTIVE PASTOR</p>
              </div>

              {/* Julianna Etonge - Evangelist */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="/images/team/julianna.jpg"
                  alt="Julianna Etonge"
                  className="w-50 h-50 rounded-full object-cover mx-auto mb-4"
                  width="200"
                  height="200"
                />
                <h4 className="mb-2 font-bold">Julianna Etonge</h4>
                <p className="text-blue-600 mb-2">EVANGELIST</p>
              </div>

              {/* Rosine Sturm - Administration */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="/images/team/rosine.jpg"
                  alt="Rosine Sturm"
                  className="w-50 h-50 rounded-full object-cover mx-auto mb-4"
                  width="200"
                  height="200"
                />
                <h4 className="mb-2 font-bold">Rosine Sturm</h4>
                <p className="text-blue-600 mb-2">VERWALTUNG</p>
              </div>

              {/* Osas Mediateam */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="/images/team/osas.jpg"
                  alt="Osas"
                  className="w-50 h-50 rounded-full object-cover mx-auto mb-4"
                  width="200"
                  height="200"
                />
                <h4 className="mb-2 font-bold">Osas</h4>
                <p className="text-blue-600 mb-2">MEDIATEAM</p>
              </div>

              {/* Simon Gwangwaa Mediateam */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="/images/team/simon.jpg"
                  alt="Simon Gwangwaa"
                  className="w-50 h-50 rounded-full object-cover mx-auto mb-4"
                  width="200"
                  height="200"
                />
                <h4 className="mb-2 font-bold">Simon Gwangwaa</h4>
                <p className="text-blue-600 mb-2">MEDIATEAM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
