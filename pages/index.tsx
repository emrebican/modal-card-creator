import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setScrollPosition } from '../features/globalSlice'

import Hero from '../components/Hero'
import Modals from '../components/Modals'
import Conversion_Area from '../components/Conversion_Area'
import Frequently_Area from '../components/Frequently_Area'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  /* Scroll Position */
  const handleScroll = () => {
    const position = window.pageYOffset
    dispatch(setScrollPosition(position))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
