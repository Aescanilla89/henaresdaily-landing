export function getHomeSchemas(dateModified: string) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsMediaOrganization',
      '@id': 'https://henaresdaily.es/#organization',
      name: 'Henares Daily',
      alternateName: 'Henares Daily Newsletter',
      url: 'https://henaresdaily.es',
      logo: {
        '@type': 'ImageObject',
        url: 'https://henaresdaily.es/logo.png',
        width: 600,
        height: 60,
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://henaresdaily.es/og-image.png',
        width: 1200,
        height: 630,
      },
      description:
        'Newsletter diaria de noticias locales del Corredor del Henares. Cubrimos Alcalá de Henares, Torrejón de Ardoz, Coslada, San Fernando de Henares y Azuqueca de Henares.',
      foundingDate: '2024',
      email: 'hola@henaresdaily.es',
      inLanguage: 'es-ES',
      areaServed: [
        { '@type': 'City', name: 'Alcalá de Henares', sameAs: 'https://www.wikidata.org/wiki/Q9358' },
        { '@type': 'City', name: 'Torrejón de Ardoz', sameAs: 'https://www.wikidata.org/wiki/Q1043127' },
        { '@type': 'City', name: 'Coslada', sameAs: 'https://www.wikidata.org/wiki/Q1053087' },
        { '@type': 'City', name: 'San Fernando de Henares', sameAs: 'https://www.wikidata.org/wiki/Q1023895' },
        { '@type': 'City', name: 'Azuqueca de Henares', sameAs: 'https://www.wikidata.org/wiki/Q611996' },
      ],
      knowsAbout: [
        'Corredor del Henares',
        'Noticias locales Madrid',
        'Alcalá de Henares',
        'Torrejón de Ardoz',
        'Coslada',
        'San Fernando de Henares',
        'Azuqueca de Henares',
      ],
      sameAs: ['https://henaresdaily.beehiiv.com'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://henaresdaily.es/#website',
      url: 'https://henaresdaily.es',
      name: 'Henares Daily',
      description: 'La newsletter diaria del Corredor del Henares',
      inLanguage: 'es-ES',
      publisher: { '@id': 'https://henaresdaily.es/#organization' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://henaresdaily.es/#webpage',
      url: 'https://henaresdaily.es',
      name: 'Henares Daily — Newsletter diaria del Corredor del Henares',
      description:
        'Suscríbete gratis a Henares Daily. Noticias de Alcalá de Henares, Torrejón de Ardoz, Coslada y toda la comarca cada mañana.',
      inLanguage: 'es-ES',
      isPartOf: { '@id': 'https://henaresdaily.es/#website' },
      about: { '@id': 'https://henaresdaily.es/#organization' },
      datePublished: '2024-01-01',
      dateModified,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.newsletter-description'],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es Henares Daily?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Henares Daily es una newsletter gratuita de noticias locales del Corredor del Henares. Cada mañana enviamos un resumen con las noticias más relevantes de Alcalá de Henares, Torrejón de Ardoz, Coslada, San Fernando de Henares y Azuqueca de Henares.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Con qué frecuencia se publica Henares Daily?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Henares Daily se publica de lunes a viernes. Los suscriptores reciben el email antes de las 8:00 h.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta suscribirse a Henares Daily?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La suscripción a Henares Daily es completamente gratuita. Solo tienes que introducir tu email.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué municipios cubre Henares Daily?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Henares Daily cubre los principales municipios del Corredor del Henares: Alcalá de Henares, Torrejón de Ardoz, Coslada, San Fernando de Henares y Azuqueca de Henares.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo me doy de baja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes darte de baja en cualquier momento haciendo clic en el enlace de cancelación que aparece al final de cada email.',
          },
        },
      ],
    },
  ]
}
