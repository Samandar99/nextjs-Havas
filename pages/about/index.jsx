import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <main className='mt-14'>
      <section className='flex container items-center justify-between flex-wrap px-3 md:justify-center xl:justify-between 2xl:justify-between lg:justify-center lg:gap-5 '>
        <div className='max-w-lg'>
          <h3 className='text-3xl font-extrabold mb-24'>О НАС</h3>
          <h1 className='text-7xl font-bold mb-5 about-title'>HAVAS</h1>
          <p className='text-5xl sub leading-tight'>СЕТЬ ДИСКАУНТЕРОВ "У ДОМА"</p>
          <p className='mt-20 text-2xl font-normal leading-normal'>Мы предлагаем нашим покупателям качественные продукты по выгодной цене.
            В наших магазинах представлены товары известных мировых и
            локальных брендов, а также товары собственного производства под торговой маркой HAVAS</p>

        </div>
        <div className=''>
          <Image src="/images/aboutimg.png" width={714} height={611} alt='about-img' priority={true} />
        </div>





      </section>
      <section className='py-20'>
        <div className='container aboutf flex justify-between flex-wrap 2xl:gap-0 xl:gap-5 lg:gap-5 md:gap-5 md:px-3 xl:px-0'>
          <div className='w-full max-w-72 foto-c'>
            <Image src="/icons/grocery.svg" className='about-s' alt='icon' width={85} height={85} priority={true} />
            <p className='mt-14'> Дискаунтер - это выгодный для потребителей формат магазинов, в котором продаются товары по цене ниже обычной.</p>
          </div>
          <div className='w-full max-w-72'>
            <Image className='about-s' src="/icons/sale.svg" alt='icon' width={85} height={85} priority={true} />
            <p className='mt-14'> Дискаунтер - это выгодный для потребителей формат магазинов, в котором продаются товары по цене ниже обычной.</p>
          </div>
          <div className='w-full max-w-72'>
            <Image className='about-s' src="/icons/grocery.svg" alt='icon' width={85} height={85} priority={true} />
            <p className='mt-14'> Дискаунтер - это выгодный для потребителей формат магазинов, в котором продаются товары по цене ниже обычной.</p>
          </div>
          <div className='w-full max-w-72'>
            <Image className='about-s' src="/icons/grocery.svg" alt='icon' width={85} height={85} priority={true} />
            <p className='mt-14'> Дискаунтер - это выгодный для потребителей формат магазинов, в котором продаются товары по цене ниже обычной.</p>
          </div>
        </div>
      </section>
      <section>
        <div className='fotos 2xl:px-0 flex gap-y-3 xl:px-0 lg:px-3 md:px-3 sm:px-3 container flex-wrap justify-between'>
          <Image className='object-cover cart-f' src="/images/about-cart.png" width={460} height={327} alt='about-foto' priority={true} />
          <Image className='object-cover cart-f' src="/images/aboutimg.png" width={460} height={327} alt='about-foto' priority={true} />
          <Image className='object-cover cart-f' src="/images/cartAbout.png" width={460} height={327} alt='about-foto' priority={true} />
          <Image className='object-cover cart-f' src="/images/cartAbout1.png" width={460} height={327} alt='about-foto' priority={true} />
          <Image className='object-cover cart-f' src="/images/about-cart.png" width={460} height={327} alt='about-foto' priority={true} />
          <Image className='object-cover cart-f' src="/images/cartAbout.png" width={460} height={327} alt='about-foto' priority={true} />
        </div>
      </section>


    </main>
  )
}

export default About
