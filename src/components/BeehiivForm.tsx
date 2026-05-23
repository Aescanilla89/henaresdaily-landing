'use client'

interface BeehiivFormProps {
  theme?: 'light' | 'dark'
}

// TODO: Replace BEEHIIV_PUBLICATION_ID with your actual Beehiiv publication ID
// Find it in your Beehiiv dashboard: Settings → Publication → Publication ID
// The embed URL format is: https://embeds.beehiiv.com/YOUR_PUBLICATION_ID
const BEEHIIV_PUBLICATION_ID = 'c91ac386-e250-4a66-8308-d6931f7291ef'

export default function BeehiivForm({ theme = 'light' }: BeehiivFormProps) {
  const bgColor = theme === 'dark' ? 'transparent' : 'transparent'

  return (
    <div className="w-full">
      <iframe
        src={`https://embeds.beehiiv.com/${BEEHIIV_PUBLICATION_ID}?slim=true`}
        data-test-id="beehiiv-embed"
        width="100%"
        height="52"
        frameBorder="0"
        scrolling="no"
        style={{
          margin: 0,
          borderRadius: '8px',
          backgroundColor: bgColor,
          width: '100%',
        }}
        title="Suscribirse a Henares Daily"
      />
    </div>
  )
}
