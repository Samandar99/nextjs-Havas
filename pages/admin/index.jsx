
import { SessionProvider, useSession } from 'next-auth/react'
import { router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
function Recipes() {

    const { router } = useRouter();
    const [goods, setGoods] = useState([]);

    const [cartTitle, setCartTitle] = useState('');
    const [img, setImgUrl] = useState('');
    const [info, setInfo] = useState([''])



    useEffect(() => {
        fetch('https://nextjs-havas.vercel.app/api/products')
            .then((res) => res.json())
            .then((data) => setGoods(data))
    }, [])



    async function dellProducts(id) {
        const response = await fetch('https://nextjs-havas.vercel.app/api/products', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            })

        });

        if (response.ok) {
            window.location.reload();
        } else {
            console.error('Faild to delete product');
        }


    }


    const submitProducts = async (e) => {
        e.preventDefault();

        const infoArray = info.split(" ");

        const response = await fetch('https://nextjs-havas.vercel.app/api/products', {
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

    return (
        <div className='inline-flex justify-between ml-9 mt-9 resc w-full flex-col'>
            <h2 className='mb-5 font-extrabold text-5xl'>Рецепты</h2>
            <div className='flex justify-between max-h-14 items-center flex-grow px-3 py-3 bg-slate-700 rounded-md'>

                <h2 className='text-white'>Cart-Title</h2>
                <h2 className='text-white'>Img</h2>
                <h2 className='text-white'>Info-Cart</h2>
                <h2 className='text-white'>Operations</h2>
            </div>
            {goods.map((el) => (
                <div className='flex justify-between mt-4 items-start' key={el.id}>

                    <p className='w-28'>{el.title}</p>
                    <Image className='w-24 h-24' src={el.img} width={100} height={100} priority={true} alt='all' />
                    <p className='w-28'>
                        <span>{el.info}</span>


                    </p>
                    <button className='bg-red-700 py-2 min-h-7 max-w-20 w-full rounded-md text-white cursor-pointer' onClick={() => dellProducts(el.id)}>dell</button>
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
    )
}

export default Recipes
