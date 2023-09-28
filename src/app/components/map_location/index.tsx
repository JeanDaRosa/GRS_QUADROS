function MapLocation() {
  return <div className='flex items-center justify-center mt-10 md:mt-0 md:mb-10 px-4'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7117.031611569855!2d-49.23720719402449!3d-26.887120534391116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df0283c08f19f7%3A0x3894cb04bcc292b1!2sGRS%20Quadros!5e0!3m2!1spt-BR!2sbr!4v1695858859065!5m2!1spt-BR!2sbr"
      width='1200'
      className='h-60 md:h-96'
      loading='lazy'
    ></iframe>
  </div>
}

export default MapLocation

