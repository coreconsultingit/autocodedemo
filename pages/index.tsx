
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <Image src="/hero-image.jpg" alt="Hero Image" width={1200} height={600} />
    </div>
  );
}