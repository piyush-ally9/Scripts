import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Master the Art of Script Writing</h1>
          <p className="text-xl text-gray-600 mb-6">Unlock your creative potential and bring your stories to life with ScriptCraft's expert guidance and resources.</p>
          <Link href="/signup">
            <Button size="lg">Start Writing Now</Button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Person writing a script" 
            width={1000} 
            height={667} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

