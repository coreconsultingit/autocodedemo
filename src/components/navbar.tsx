import { Menubar } from '@radix-ui/react-menubar';
import { Button } from '@radix-ui/react-button';
import { ChevronDownIcon } from '@radix-ui/react-icons';

function Navbar() {
  return (
    <Menubar className="bg-gray-800 text-white">
      <Button><ChevronDownIcon /></Button>
    </Menubar>
  );
}