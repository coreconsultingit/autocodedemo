import { Dropdown, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";

export default function Home() {
  return (
    <div className="p-4">
      <Dropdown>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenu>
          <DropdownMenuContent>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>Hello, world!</DialogContent>
      </Dialog>
    </div>
  );
}