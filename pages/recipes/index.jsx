import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function Recipes() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))

  }, [])



  return (
    <>
      <section>
        <div className='banner'>
          <Image className='head-b w-full object-cover' src="/images/head.png" width={1000} height={610} alt='head-foto' priority={true} />
          <div className='headeline '>
            <h1 className='2xl:px-0 lg:px-3 md:px-3 sm:px-3 xl:px-3 xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl 2xl:text-9xl headeline-title container text-9xl text-white font-bold'>Готовьте вместе
              с нами!</h1>
          </div>
        </div>

        <div className='container '>
          <h2 className='mt-24 text-3xl font-extrabold uppercase md:px-3 2xl:px-0 xl:px-0 sm:px-3'>Рецепты</h2>
          <div className='carts flex 2xl:justify-start gap-y-14 flex-wrap gap-6 mt-20 2xl:px-0 lg:px-3 xl:justify-center md:justify-center sm:justify-center'>
            {products.map((item) => (


              <div className='cart' key={item.id}>
                <Image className='rounded-2xl max-h-80' src={item.img} width={327} height={560} alt='cart' priority={true} />
                <div className='mt-9 '>
                  <h3 className='text-xl font-bold mb-7'>{item.title}</h3>

                  {item.info?.map((infoItem, index) => (
                    <p className='text-gray-400 pb-1' key={index}>{infoItem}</p>
                  ))}

                  <a href="#" className='more transition-colors hover:bg-green-700 hover:border-green-700 hover:text-white mt-7 text-center py-3 text-orange-500 text-lg rounded-3xl max-w-52 border border-orange-500'>Подробнее...</a>

                </div>
              </div>
            ))}


          </div>


        </div>



      </section>
      <section className='mt-36'>
        <div className="container">
          <h2 className='text-3xl mb-12 2xl:text-left xl:text-center lg:text-center md:text-center sm:text-center'>Популярные рецепты:</h2>
          <div className='flex  flex-wrap gap-y-5 pn gap-9 2xl:justify-start xl:justify-center lg:justify-center md:justify-center sm:justify-center'>
            <div className='max-w-2xl'>
              <Image className='w-full rounded-2xl' src="/images/famous.png" width={680} height={421} alt='foto' priority={true} />
              <h3 className='text-xl font-bold mt-10 mb-9'>Пельмни по домашнему</h3>
              <div>
                <p className='text-gray-400 mb-3'>Вам понадобится:</p>
                <p className='text-gray-400 mb-3'>рис 400 г;</p>
                <p className='text-gray-400 mb-3'>мясо 400 г;</p>
                <p className='text-gray-400'>морковь 300 г; лук  1 бол...</p>
              </div>
              <a href="#" className='more transition-colors hover:bg-green-700 hover:border-green-700 hover:text-white mt-7 text-center py-3 text-orange-500 text-lg rounded-3xl max-w-52 border border-orange-500'>Подробнее...</a>

            </div>
            <div className='max-w-2xl'>
              <Image className='w-full rounded-2xl' src="/images/popular.png" width={676} height={421} alt='foto' priority={true} />
              <h3 className='text-xl font-bold mt-10 mb-9'>Пельмни по домашнему</h3>
              <div>
                <p className='text-gray-400 mb-3'>Вам понадобится:</p>
                <p className='text-gray-400 mb-3'>рис 400 г;</p>
                <p className='text-gray-400 mb-3'>мясо 400 г;</p>
                <p className='text-gray-400'>морковь 300 г; лук  1 бол...</p>
              </div>
              <a href="#" className='more transition-colors hover:bg-green-700 hover:border-green-700 hover:text-white mt-7 text-center py-3 text-orange-500 text-lg rounded-3xl max-w-52 border border-orange-500'>Подробнее...</a>

            </div>




          </div>
        </div>
      </section>

    </>
  )
}

export default Recipes
