import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src="/hero-image.jpg" alt="Hero Image" width={1200} height={600} />
    </div>
  );
}