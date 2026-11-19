import { Header } from '../components/Header'
import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Expertise } from '../sections/Expertise'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.shell}>
      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
        <Expertise />
        <Contact />
      </main>
    </div>
  )
}
