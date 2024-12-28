import About from '@/components/about'
import ContactMe from '@/components/contact'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HomePage from '@/components/home'
import { ParticlesContainer } from '@/components/particles'


import Projects from '@/components/project'
import ServiceCount from '@/components/service-count'
import Skills from '@/components/skills'


export default function Home() {
  return (
    <div className='w-full px-4 py-32 xl:w-[1600px] lg:px-16 pr-4 lg:pr-32'>

      <ParticlesContainer />

      <Header />
      <HomePage />
      <ServiceCount />
      <About />
      {/* <Skills /> */}
      <Projects />
      <ContactMe />
      <Footer />
    </div>

  )
}
