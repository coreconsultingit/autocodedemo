import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';

export default function Home() {
  return (
    <div className="p-4">
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>This is a dialog.</DialogContent>
      </Dialog>
    </div>
  );
}