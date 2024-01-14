import Carusel from '@/components/Carusel'
import React, { useEffect, useState } from 'react'

function Shop() {

    const [shops, setShops] = useState([])


    useEffect(() => {
        fetch('https://nextjs-havas.vercel.app/api/shops')
            .then((res) => res.json())
            .then((data) => setShops(data))

    }, [])




    return (
        <>
            <div className='mt-9 mb-24'>
                <Carusel />
            </div>

            <div className='container'>
                <h1 className='text-3xl font-extrabold'>Наши магазины</h1>
                <h3 className='mt-14 font-bold text-2xl'>Выберите район:</h3>
                <div className='flex flex-wrap justify-between mt-9'>
                    <ul>
                        <li className='mb-4 text-2xl'><a href="#">Все районы</a></li>
                        <li className='mb-4 text-2xl'><a href="#">Мирзо-Улугбекский район</a></li>
                        <li className='mb-4 text-2xl'><a href="#">Юнусабадский район.</a></li>
                    </ul>
                    <ul>
                        <li className='mb-4 text-2xl'><a href="#">Алмазарский район</a></li>
                        <li className='mb-4 text-2xl'><a href="#">Сергелийский район</a></li>
                        <li className='mb-4 text-2xl'><a href="#">Яккасарайский район</a></li>
                    </ul>
                    <ul>
                        <li className='mb-4 text-2xl'><a href="#">Бектемирский район</a></li>
                        <li className='mb-4 text-2xl'><a href="#">Учтепинский район</a></li>
                        <li className='mb-4 text-2xl'><a href="#">Яшнабадский район</a></li>
                    </ul>
                    <ul>
                        <li className='mb-4 text-2xl'><a href="#">Зангиотинский район</a></li>
                        <li className='mb-4 text-2xl'><a href="#">Шайхантахурский район</a></li>

                    </ul>
                    <ul>
                        <li className='mb-4 text-2xl'><a href="#">Мирабадский район</a></li>
                        <li className='mb-4 text-2xl'><a href="#">Чиланзарский район</a></li>

                    </ul>

                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95898.51591531208!2d69.09239254335937!3d41.3125917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bcd9abfef8b%3A0xbdfb69a7ea54e0dd!2sHAVAS!5e0!3m2!1sru!2s!4v1705036608288!5m2!1sru!2s" width="600" height="450" className='w-full mt-10' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <p className='text-2xl uppercase mt-20'>Не удалось найти близжайший магазин? Попробуйте проложить маршрут: <b>ПРОЛОЖИТЬ МАРШРУТ</b></p>

                <div className='shop mt-24'>
                    <h2 className='font-bold text-3xl mb-16'>Наши магазины:</h2>
                    {shops.map((item) => (
                        <div className='w-full mb-20 sm:justify-center md:justify-center lg:justify-center xl:justify-start 2xl:justify-start min-h-60 relative flex flex-wrap gap-14 items-center' key={item.id}>
                            <img className='object-cover min-h-60' src={item.img} alt="" />
                            <div className="min-h-60 absolute right-0 top-0 -z-10 bg-color">
                                <img className='min-h-60' src="/images/bgs.png" alt="" />

                            </div>
                            <div>
                                <h3 className='text-xl font-bold'>{item.title}</h3>
                                <p className='mt-3 text-xl'>{item.addres}</p>
                                <p className='mt-1 mb-2 text-xl'>{item.worktime}</p>
                                <a href="#" className='text-xl text-green-600'>Тел: {item.numberTell}</a>
                                <a className='flex mt-2'>
                                    <img src="/images/location.svg" alt="" />
                                    <span href="#" className='text-xl text-green-600'>Показать на карте</span>
                                </a>
                            </div>

                        </div>
                    ))}



                </div>


            </div>
        </>
    )
}

export default Shop
