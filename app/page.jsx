import Link from 'next/link'
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
    </div>
  )
}
export default HomePage      

/* <h1 className="text-3xl">Welcome</h1>
      <Link href='/properties'>Show Properties</Link> */