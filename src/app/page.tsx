import Image from 'next/image'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/contact/Contact'
import Made from './components/contact/Made'
export default function Home() {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <Herosection/>
      <About/>
      <Project/>
      <Contact/>
      <Made/>
    </div>
  )
}
