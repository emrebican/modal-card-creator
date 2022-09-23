import type { NextPage } from 'next'

import Hero from '../components/Hero'
import Modals from '../components/Modals'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Modals />
    </>
  )
}

export default Home
