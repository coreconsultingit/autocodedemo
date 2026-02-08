import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/hero-image.jpg" alt="Hero Image" width={800} height={600} />
    </div>
  );
}