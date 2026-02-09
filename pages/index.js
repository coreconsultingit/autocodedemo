import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src="/hero-image.jpg" alt="Hero Image" width={1920} height={1080} />
    </div>
  );
}