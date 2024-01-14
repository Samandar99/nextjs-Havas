import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
import Carusel from "@/components/Carusel";


function Home() {

  const [infoText, setInfoText] = useState('')

  // console.log(infoText);

  useEffect(() => {
    fetch('https://nextjs-havas.vercel.app/infomain')
      .then((res) => res.json())
      .then((data) => setInfoText(data))

  }, [])




  return (
    <div className="mt-10">
      <Carusel />
      <main>
        <div className="container stic">
          <Image className="back_img  " src="/images/cart.png" alt="cart" width={500} height={400} priority={true} />

          <div className="home__head flex justify-between items-center md: mt-5 lg:mt-24">
            <h3 className="font-bold text-3xl ml:w-36 ml-2">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</h3>
            <p className="subt text-xl">*ЦЕНА АКТУАЛЬНА НА ОПРЕДЕЛЕННЫЙ СРОК</p>
          </div>

          <div className="cards grid  grid-cols-3 gap-3 sm:grid-cols-2 xl:grid-cols-3 mt-12 2xl:grid-cols-3 md:grid-cols-2" >
            <div className="card bg-gray-100 px-7">
              <div className="card__head flex justify-between items-center">
                <h3 className="card__title text-xl text-green-600 font-extrabold">АКЦИОННЫЙ ТОВАР</h3>
                <div className="w-16 bg-green-600 min-h-16 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">-30%</span>
                </div>
              </div>
              <div className="card__info flex items-end justify-between text-right">
                <Image className="card__img" src="/images/cart__im.png" alt="product" width={191} height={234} />
                <div className="">
                  <p className="text-green-600 font-bold text-xl">“ASAL”  Мёд</p>
                  <p>
                    <span className="text-4xl font-extrabold text-orange-500">17.</span>
                    <span className="text-orange-500 text-2xl font-extrabold">500</span>
                  </p>
                  <b className="text-green-600 font-bold">UZS</b>
                </div>

              </div>

            </div>
            <div className="card bg-gray-100 px-7">
              <div className="card__head flex justify-between items-center">
                <h3 className="card__title text-xl text-green-600 font-extrabold">АКЦИОННЫЙ ТОВАР</h3>
                <div className="w-16 bg-green-600 min-h-16 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">-30%</span>
                </div>
              </div>
              <div className="card__info flex items-end justify-between text-right">
                <Image className="card__img" src="/images/cart__im.png" alt="product" width={191} height={234} />
                <div className="">
                  <p className="text-green-600 font-bold text-xl">“ASAL”  Мёд</p>
                  <p>
                    <span className="text-4xl font-extrabold text-orange-500">17.</span>
                    <span className="text-orange-500 text-2xl font-extrabold">500</span>
                  </p>
                  <b className="text-green-600 font-bold">UZS</b>
                </div>

              </div>

            </div>
            <div className="card bg-gray-100 px-7">
              <div className="card__head flex justify-between items-center">
                <h3 className="card__title text-xl text-green-600 font-extrabold">АКЦИОННЫЙ ТОВАР</h3>
                <div className="w-16 bg-green-600 min-h-16 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">-30%</span>
                </div>
              </div>
              <div className="card__info flex items-end justify-between text-right">
                <Image className="card__img" src="/images/cart__im.png" alt="product" width={191} height={234} />
                <div className="">
                  <p className="text-green-600 font-bold text-xl">“ASAL”  Мёд</p>
                  <p>
                    <span className="text-4xl font-extrabold text-orange-500">17.</span>
                    <span className="text-orange-500 text-2xl font-extrabold">500</span>
                  </p>
                  <b className="text-green-600 font-bold">UZS</b>
                </div>

              </div>

            </div>
            <div className="card bg-gray-100 px-7">
              <div className="card__head flex justify-between items-center">
                <h3 className="card__title text-xl text-green-600 font-extrabold">АКЦИОННЫЙ ТОВАР</h3>
                <div className="w-16 bg-green-600 min-h-16 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">-30%</span>
                </div>
              </div>
              <div className="card__info flex items-end justify-between text-right">
                <Image className="card__img" src="/images/cart__im.png" alt="product" width={191} height={234} />
                <div className="">
                  <p className="text-green-600 font-bold text-xl">“ASAL”  Мёд</p>
                  <p>
                    <span className="text-4xl font-extrabold text-orange-500">17.</span>
                    <span className="text-orange-500 text-2xl font-extrabold">500</span>
                  </p>
                  <b className="text-green-600 font-bold">UZS</b>
                </div>

              </div>

            </div>
            <div className="card bg-gray-100 px-7">
              <div className="card__head flex justify-between items-center">
                <h3 className="card__title text-xl text-green-600 font-extrabold">АКЦИОННЫЙ ТОВАР</h3>
                <div className="w-16 bg-green-600 min-h-16 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">-30%</span>
                </div>
              </div>
              <div className="card__info flex items-end justify-between text-right">
                <Image className="card__img" src="/images/cart__im.png" alt="product" width={191} height={234} />
                <div className="">
                  <p className="text-green-600 font-bold text-xl">“ASAL”  Мёд</p>
                  <p>
                    <span className="text-4xl font-extrabold text-orange-500">17.</span>
                    <span className="text-orange-500 text-2xl font-extrabold">500</span>
                  </p>
                  <b className="text-green-600 font-bold">UZS</b>
                </div>

              </div>

            </div>
            <div className="card bg-gray-100 px-7">
              <div className="card__head flex justify-between items-center">
                <h3 className="card__title text-xl text-green-600 font-extrabold">АКЦИОННЫЙ ТОВАР</h3>
                <div className="w-16 bg-green-600 min-h-16 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">-30%</span>
                </div>
              </div>
              <div className="card__info flex items-end justify-between text-right">
                <Image className="card__img" src="/images/cart__im.png" alt="product" width={191} height={234} />
                <div className="">
                  <p className="text-green-600 font-bold text-xl">“ASAL”  Мёд</p>
                  <p>
                    <span className="text-4xl font-extrabold text-orange-500">17.</span>
                    <span className="text-orange-500 text-2xl font-extrabold">500</span>
                  </p>
                  <b className="text-green-600 font-bold">UZS</b>
                </div>

              </div>

            </div>

          </div>

        </div>


        <div className="draw bg-yellow-400 py-5 mt-40">
          <p className="text-2xl container xl:pl-3">НЕ ПРОПУСТИ СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ! КАТАЛОГ ПРЕДЛОЖЕНИЙ ОБНОВЛЯЕТСЯ КАЖДУЮ НЕДЕЛЮ</p>
        </div>


        <div className="container">
          <h3 className="sub-2 mt-20 font-extrabold text-2xl">{infoText.title}</h3>
          <p className="mt-12 about-title">{infoText.text}</p>

        </div>

      </main>


    </div>
  );
}

export default Home;
