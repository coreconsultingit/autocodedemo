import Dialog from '@radix-ui/react-dialog';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Dialog.Root>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 fixed inset-0" />
          <Dialog.Content className="bg-white p-6 rounded-lg shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg font-bold">Dialog Title</Dialog.Title>
            <Dialog.Description className="text-gray-500">Dialog content goes here.</Dialog.Description>
            <Dialog.Close className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Close</Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}