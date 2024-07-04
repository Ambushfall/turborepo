import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Page () {
  return (
    <div className={'px-8 py-0'}>
      <section className='min-h-screen flex-1 flex flex-col justify-center items-center  px-0 py-16 fadeIn'>
        <div className='backgroundElement z-0'></div>
        <h1 className='naslov z-10 text-7xl text-[#30291b] capitalize font-extrabold italic'>sunčica i luka</h1>
        <p className='naslov z-10 pt-5'>Vas pozivaju da prisustvujete našem venčanju<br/></p>
        <h1 className='naslov uppercase z-10 text-[#c59536]'>14:30 Subota, 6. Jul, 2024</h1>
        <p className='naslov z-10 pt-5'>Opština Čukarica<br/>Šumadijski trg 2<br/>Banovo Brdo, Beograd</p>
        <a
          href='https://maps.app.goo.gl/UKLmJJ8RswuoRHC59'
          target='blank'
          className='mapicon bg-[#deb25cba] hover:scale-125 hover:bg-[#ecbb81] z-10'
        >
          <FontAwesomeIcon
            className='text-[#2f2e2e] z-10'
            icon={faMapMarkerAlt}
            size='1x'
          />
        </a>
        <Image className='pt-10 z-10' src={'/bouquet.png'} alt='bouquet' width={200} height={200}/>
      </section>
    </div>
  )
}
