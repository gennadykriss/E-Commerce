import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Page not found</p>
      <Link
        to="/"
        className="px-6 py-2 bg-black text-white uppercase tracking-wide hover:bg-gray-800 transition"
      >
        Back to Landing
      </Link>
    </div>
  )
}
