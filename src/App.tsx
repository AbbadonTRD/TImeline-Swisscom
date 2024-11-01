import React from 'react';
import TimelineItem from './components/TimelineItem';
import TimelineConnector from './components/TimelineConnector';

const timelineData = [
  {
    year: '1852',
    title: 'Erster Telegrafendienst',
    description: 'Erster Telegrafendienst zwischen St. Gallen und Zürich, der den Beginn der Telekommunikation in der Schweiz markiert. Diese Pionierverbindung legte den Grundstein für die landesweite Kommunikation.',
    icon: 'Radio',
    category: 'Infrastruktur'
  },
  {
    year: '1877',
    title: 'Start des Telefonnetzes',
    description: 'Die Schweiz tritt ins Telefonzeitalter ein mit der Installation der ersten Telefonnetze. Das erste Netz verband lokale Unternehmen und Regierungsbüros und revolutionierte die Kommunikation.',
    icon: 'Phone',
    category: 'Technologie'
  },
  {
    year: '1920',
    title: 'PTT-Gründung',
    description: 'Gründung der PTT (Post-, Telefon- und Telegrafenbetriebe). Dieser Zusammenschluss vereinte Post- und Telekommunikationsdienste unter einer Bundesverwaltung und schuf einen effizienteren nationalen Dienst.',
    icon: 'Building',
    category: 'Organisation'
  },
  {
    year: '1959',
    title: 'Automatisiertes Netzwerk',
    description: 'Die Schweiz wird das erste Land weltweit mit einem vollautomatischen Telefonnetz und demonstriert damit ihre Position als technologischer Pionier in der Telekommunikation.',
    icon: 'Network',
    category: 'Innovation'
  },
  {
    year: '1997',
    title: 'Swisscom Entstehung',
    description: 'Historische Aufspaltung der PTT in Die Schweizerische Post und Swisscom. Diese Privatisierung markierte eine neue Ära und verwandelte die Telekommunikationsabteilung in ein modernes, wettbewerbsfähiges Unternehmen.',
    icon: 'Globe',
    category: 'Unternehmen'
  },
  {
    year: '2007',
    title: 'Digitale Expansion',
    description: 'Große Expansion ins TV-Geschäft und strategische Übernahme von Fastweb in Italien für 4,2 Milliarden Euro, die Swisscoms erste große internationale Expansion und den Eintritt in Multimedia-Dienste markiert.',
    icon: 'Tv',
    category: 'Expansion'
  },
  {
    year: '2013',
    title: '4G-Netz Einführung',
    description: 'Einführung des 4G/LTE-Netzes in der ganzen Schweiz, was die mobilen Internetgeschwindigkeiten deutlich verbesserte und neue digitale Dienste für Kunden landesweit ermöglichte.',
    icon: 'Wifi',
    category: 'Technologie'
  },
  {
    year: '2019',
    title: '5G-Pionier',
    description: 'Start des ersten 5G-Netzes der Schweiz, wodurch sich Swisscom als europäischer Marktführer in der 5G-Technologie positioniert. Das Netz deckte anfänglich 90% der Bevölkerung ab.',
    icon: 'Network',
    category: 'Innovation'
  },
  {
    year: '2024',
    title: 'Digitale Führungsposition',
    description: 'Marktführer mit 56% Mobilfunkmarktanteil, umfassender 5G-Abdeckung und innovativen digitalen Lösungen. Swisscom treibt weiterhin die digitale Transformation mit Fokus auf Nachhaltigkeit und Innovation voran.',
    icon: 'Users',
    category: 'Erfolg'
  }
];

function App() {
  return (
    <div className="min-h-screen relative z-10 pb-24">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-24">
          <h1 className="text-4xl font-bold text-[#0F2B71] mb-4 font-['Trebuchet_MS']">
            Die Evolution der Schweizer Telekommunikation
          </h1>
          <p className="text-[#0060AE] text-lg font-['Trebuchet_MS']">
            Von Telegrafie-Pionieren zu Digitalen Innovationsführern
          </p>
        </div>
        
        <div className="relative mt-32">
          <TimelineConnector />
          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                description={item.description}
                category={item.category}
                icon={item.icon as keyof typeof import('lucide-react')}
                isLeft={index % 2 !== 0} // Umgekehrte Logik hier
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-32 text-sm text-gray-500 font-['Trebuchet_MS']">
          Erstellt von Tiago Cevallos de Carvalho
        </div>
      </div>
    </div>
  );
}

export default App;