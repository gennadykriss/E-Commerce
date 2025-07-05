export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-white shadow-md py-4 text-center">
        <h2 className="text-2xl font-semibold">Home Page</h2>
      </header>
      <main className="flex-grow p-8">
        <p className="text-gray-700">Shop.</p>
      </main>
      <footer className="w-full bg-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Brand
      </footer>
    </div>
  )
}
