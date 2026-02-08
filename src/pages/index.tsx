
import Image from 'next/image';
import { Box } from '@radix-ui/react-primitive';

export default function Home() {
  return (
    <Box className="flex justify-center items-center h-screen">
      <Image src="/hero.jpg" alt="Hero Image" width={800} height={600} />
    </Box>
  );
}