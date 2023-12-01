import Image from 'next/image'
import MapLocation from './components/map_location/index'

export default function Home() {
  return (
    <>
      <div className='h-full w-full bg-gray-200 flex flex-col items-center '>
        <div className='md:mt-12 mb-12 '>

          <Image
            alt="Image Logo"
            src="/hero.jpg"
            width="1280"
            height="390"
          />
        </div>

        <MapLocation />
      </div>
    </>
  )
}
