
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image
        src='https://example.com/image.jpg'
        alt='Example Image'
        width={800}
        height={600}
      />
    </div>
  );
}