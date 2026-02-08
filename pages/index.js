
import Image from 'next/image'
import { Container } from '@radix-ui/react-layout'

export default function Home() {
  return (
    <Container>
      <Image src='/hero-image.jpg' alt='Hero Image' width={1200} height={800} />
    </Container>
  )
}