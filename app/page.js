'use client'
import Header from '../components/Header'
import HomeSection from './HomeSection'
import About from '../components/About'
import Guide from '../components/Guide'
import Footer from '../components/Footer'


export default function Home() {

  return (
    <main className="min-h-screen bg-indigo-950 md:px-20 px-5 text-white w-full">
      <div className=" md:max-w-4xl m-auto">
        <Header />
        <HomeSection />
        <About />
        <Guide />
        <Footer />
      </div>
    </main>
  );
}
