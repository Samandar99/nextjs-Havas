import { SessionProvider, useSession } from 'next-auth/react'
import { router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
function Dashboard() {


  // const { status, data } = useSession();
  const { router } = useRouter();
  const [goods, setGoods] = useState([]);

  const [cartTitle, setCartTitle] = useState('');
  const [img, setImgUrl] = useState('');
  const [info, setInfo] = useState([''])



  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((data) => setGoods(data))
  }, [])



  // useEffect(() => {
  //   if (status === "unauthenticated") router.replace("/auth/signin");
  // }, [status])


  const submitProducts = async (e) => {
    e.preventDefault();

    const infoArray = info.split(" ");

    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      body: JSON.stringify({
        title: cartTitle,
        img: img,
        info: infoArray
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    window.location.reload();
  }



  // if (status === "authenticated") {
    return (
      <div className='flex'>
        <aside className='inline-flex flex-col justify-between w-64 bg-slate-200 min-h-screen  py-10'>

          <div>
            <a href="#" className='flex gap-3 ml-7'>
              <Image className='w-10' src="/icons/logo.svg" width={40} height={40} priority={true} alt='logo' />
              <div>
                <h4>Admin</h4>
                <span>Dashboard v2.6.0</span>
              </div>
            </a>

            <ul className='ml-4 mt-10'>
              <li className='trans duration-150 ease-in-out mb-4 bg-gradient-to-r hover:from-gray-400 hover:to-gray-200 max-w-56 py-3 rounded-md px-6 trans'>
                <a href="#" className='flex gap-5'>
                  <Image src="/icons/home.svg" height={20} width={20} priority={true} alt='home-img' />
                  <span>Home</span>
                </a>
              </li>
              <li className='trans duration-150 ease-in-out mb-4 bg-gradient-to-r hover:from-gray-400 hover:to-gray-200 max-w-56 py-3 rounded-md px-6 trans'>
                <a href="#" className='flex gap-5'>
                  <Image src="/icons/userss.svg" height={20} width={20} priority={true} alt='home-img' />
                  <span>Patient</span>
                </a>
              </li>
              <li className='mb-4 bg-gradient-to-r hover:from-gray-400 hover:to-gray-200 max-w-56 py-3 rounded-md px-6 trans'>
                <a href="#" className='flex gap-5'>
                  <Image src="/icons/places.svg" height={20} width={20} priority={true} alt='home-img' />
                  <span>Places</span>
                </a>
              </li>
              <li className='mb-4 bg-gradient-to-r hover:from-gray-400 hover:to-gray-200 max-w-56 py-3 rounded-md px-6 trans'>
                <a href="#" className='flex gap-5'>
                  <Image src="/icons/data.svg" height={20} width={20} priority={true} alt='home-img' />
                  <span>Data & Notes</span>
                </a>
              </li>
              <li className='mb-4 bg-gradient-to-r hover:from-gray-400 hover:to-gray-200 max-w-56 py-3 rounded-md px-6 trans'>
                <a href="#" className='flex gap-5'>
                  <Image src="/icons/analytcs.svg" height={20} width={20} priority={true} alt='home-img' />
                  <span>Analytics</span>
                </a>
              </li>
              <li className='mb-4 bg-gradient-to-r hover:from-gray-400 hover:to-gray-200 max-w-56 py-3 rounded-md px-6' >
                <a href="#" className='flex gap-5'>
                  <Image src="/icons/setting.svg" height={20} width={20} priority={true} alt='home-img' />
                  <span>Setting</span>
                </a>
              </li>

            </ul>

          </div>

          <div className='ml-10'>
            <a href="#" className='flex gap-4'>
              <Image src="/icons/logOut.svg" width={16} height={16} alt='logout' priority={true} />
              <span>Log Out</span>
            </a>
          </div>

        </aside>

        <div className=' inline-flex justify-between ml-9 mt-9 max-w-5xl w-full flex-col'>
          <div className='flex justify-between flex-grow px-3 py-3 bg-slate-700 rounded-md'>

            <h2 className='text-white'>Cart-Title</h2>
            <h2 className='text-white'>Img</h2>
            <h2 className='text-white'>Info-Cart</h2>
            <h2 className='text-white'>Operations</h2>
          </div>
          {goods.map((el) => (
            <div className='flex justify-between mt-4 items-start' key={el.id}>

              <p className='w-28'>{el.title}</p>
              <Image className='w-24 h-24' src={el.img} width={100} height={100} priority={true} alt='all' />
              <p className='w-28'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-red-700 py-2 min-h-7 max-w-20 w-full rounded-md text-white cursor-pointer'>dell</button>
            </div>
          ))}

          <form className='flex flex-col mt-6' onSubmit={submitProducts}>
            <label className='mt-3'>Cart-Title</label>
            <input onChange={(e) => setCartTitle(e.target.value)} className='border py-2 rounded-md px-3' placeholder='Cart-Title' type="text" />
            <label className='mt-3'>needs   </label>
            <input onChange={(e) => setInfo(e.target.value)} type="text" placeholder='your need' className='border py-2 rounded-md px-3' />
            <label className='mt-3'>Img</label>
            <input type="text" placeholder='urlImg' className='border py-2 rounded-md px-3' onChange={(e) => setImgUrl(e.target.value)} />
            <button className='bg-green-600 max-w-20 py-2 rounded-md text-white mt-6'>add</button>
          </form>



        </div>




      </div>
    )

  }

  // return <div>Loading</div>
// }





function DashboardPage() {
  return (
    <SessionProvider session={{}}>
      <Dashboard />
    </SessionProvider>
  )
}

export default Dashboard