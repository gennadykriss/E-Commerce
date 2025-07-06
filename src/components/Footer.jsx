// src/components/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-500 text-sm px-8 py-4 border-t w-full">
      {/* Top row */}
      <div className="relative flex flex-col md:flex-row justify-between items-center">
        <div>© 2025 Brunelli Alta</div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          Follow Us On Social Media
        </div>

        <Link
          to="/survey"
          className="hover:underline hover:text-gray-700 transition mt-2 md:mt-0"
        >
          How Did We Do?
        </Link>
      </div>

      {/* Bottom row for designers */}
      <div className="mt-4 text-center text-xs text-gray-400">
        Designers: 230083075, 300241605
      </div>
    </footer>
  );
}
