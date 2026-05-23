import { getHomeSchemas } from '@/lib/schemas'
import seoConfig from '../../seo/config.json'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import CoverageSection from '@/components/CoverageSection'
import SocialProof from '@/components/SocialProof'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  const schemas = getHomeSchemas(seoConfig.lastUpdatedDate)

  return (
    <>
      {/* Structured data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />

      <main>
        <HeroSection
          subscriberCount={seoConfig.subscriberCount}
          lastNewsletterTitle={seoConfig.lastNewsletterTitle}
        />
        <WhySection />
        <CoverageSection />
        <SocialProof subscriberCount={seoConfig.subscriberCount} />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
