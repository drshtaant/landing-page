export const metadata = {
  title: 'Home - Landing Page',
  description: 'Page description',
}

import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import Newsletter from '@/components/Newsletter/Newsletter'
import Zigzag from '@/components/ZigZag/ZigZag'
import Testimonials from '@/components/Testimonials/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}
