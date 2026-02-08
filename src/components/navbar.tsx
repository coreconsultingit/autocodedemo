import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ToastProvider } from '@radix-ui/react-toast';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 px-6">
      <div className="flex justify-between items-center">
        <a href="/" className="text-white font-bold text-xl">My App</a>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <a href="/about" className="block px-4 py-2 hover:bg-gray-700">About</a>
            <a href="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}