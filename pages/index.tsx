import type { NextPage } from 'next'

import Hero from '../components/Hero'
import Modals from '../components/Modals'
import Conversion_Area from '../components/Conversion_Area'
import Frequently_Area from '../components/Frequently_Area'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Modals />
      <Conversion_Area />
      <Frequently_Area />
      <Footer />
    </>
  )
}

export default Home
