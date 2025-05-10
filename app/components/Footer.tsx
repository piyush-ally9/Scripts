import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">ScriptCraft</h3>
            <p className="text-gray-400">Empowering writers to craft compelling scripts and bring their stories to life.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Tutorials</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Resources</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Facebook</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Twitter</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Instagram</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest tips and tutorials.</p>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded bg-gray-700 text-white mb-2" />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 ScriptCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

