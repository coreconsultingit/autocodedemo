import { Dialog, DropdownMenu } from '@radix-ui/react-components';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        {/* Navbar content */}
      </nav>
    </header>
  );
}