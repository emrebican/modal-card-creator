import type { NextPage } from 'next'

import Hero from '../components/Hero'
import Modals from '../components/Modals'
import Conversion_Area from '../components/Conversion_Area'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Modals />
      <Conversion_Area />
    </>
  )
}

export default Home
