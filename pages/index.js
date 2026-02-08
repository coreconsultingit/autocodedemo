import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@radix-ui/react-dialog";

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
        <DialogContent>
          <h2 className="text-lg font-medium">Dialog Title</h2>
          <DialogClose className="absolute top-4 right-4 rounded-full focus:outline-none focus-visible:ring focus-visible:ring-purple-500">Close</DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}