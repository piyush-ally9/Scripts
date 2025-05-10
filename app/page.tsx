import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

