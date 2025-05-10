import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">ScriptCraft</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800">Tutorials</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800">Resources</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

