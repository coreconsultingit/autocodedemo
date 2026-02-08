import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';

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

      <Tooltip>
        <TooltipTrigger>Hover for info</TooltipTrigger>
        <TooltipContent>This is a tooltip</TooltipContent>
      </Tooltip>
    </div>
  );
}