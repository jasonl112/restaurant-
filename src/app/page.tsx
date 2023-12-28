import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/homePageComponents/Hero'
import Location from './components/homePageComponents/Location'
import MenuImage from './components/homePageComponents/MenuImage'
import Signature from './components/homePageComponents/Signature'
import Gallery from './components/homePageComponents/Gallery'
import Testimonal from './components/homePageComponents/Testimonial'
import Reservations from './components/homePageComponents/Reservations'
import Map from './components/homePageComponents/Map'
import Questions from './components/homePageComponents/Questions'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Location/>
      <MenuImage/>
      <Signature/>
      <Gallery/>
      <Testimonal/>
      <Reservations/>
      <Map/>
      <Questions/>
    </main>
  )
}
