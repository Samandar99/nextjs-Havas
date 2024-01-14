import React, { useEffect, useState } from 'react'

function Shop() {

    const [shop, setShop] = useState([]);
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [addres, setAddres] = useState('');
    const [worktime, setWorktime] = useState('');
    const [numberTell, setNumberTell] = useState('');

    useEffect(() => {
        fetch('https://nextjs-havas.vercel.app/api/shops')
            .then((res) => res.json())
            .then((data) => setShop(data))

    }, [])

    const submitShop = async (e) => {
        e.preventDefault();

        const response = await fetch('https://nextjs-havas.vercel.app/api/shops', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                img: img,
                addres: addres,
                worktime: worktime,
                numberTell: numberTell,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        window.location.reload();  
    }
    
    const dellShop = async (id) => {
        const response = await fetch("https://nextjs-havas.vercel.app/api/shops", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
            
        });

        if(response.ok){
           window.location.reload();
        } else {
            console.error('delete');
        }
    }
    



    return (
        <div className='inline-flex justify-between ml-9 mt-9 tab w-full flex-col'>
            <h2 className='mb-5 font-extrabold text-5xl uppercase'>магазины:</h2>

            <div className='flex justify-between max-h-14 items-center flex-grow px-3 py-3 bg-slate-700 rounded-md'>

                <h2 className='text-white w-28'>Title</h2>
                <h2 className='text-white w-28 text-center'>Img</h2>
                <h2 className='text-white w-28 text-center'>Addres</h2>

                <h2 className='text-white w-28 text-center'>worktime</h2>
                <h2 className='text-white w-28 text-center'>numberTell</h2>
                <h2 className='text-white w-28 text-center'>Operations</h2>
            </div>

            {shop.map((item) => (
                <div className='flex justify-between mt-4 items-start' key={item.id}>
                    <p className='w-28 overflow-hidden whitespace-nowrap text-overflow-ellipsis'>{item.title}</p>
                    <img className='w-28' src={item.img} alt="" />
                    <p className='w-28 overflow-hidden whitespace-nowrap text-overflow-ellipsis'>
                        {item.addres}
                    </p>
                    <p className='w-28 overflow-hidden whitespace-nowrap text-overflow-ellipsis'>{item.worktime}</p>
                    <p className='w-28 overflow-hidden whitespace-nowrap text-overflow-ellipsis'>{item.numberTell}</p>
                    <button onClick={() => dellShop(item.id)} className='bg-red-700 py-2 min-h-7 max-w-20 w-full rounded-md text-white cursor-pointer'>dell</button>
                </div>
            ))}


            <form className='flex flex-col mt-6' onSubmit={submitShop}>
                <label className='mt-3'>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='your need' className='border py-2 rounded-md px-3' />
                <label className='mt-5'>Img</label>
                <input onChange={(e) => setImg(e.target.value)} className='border py-2 rounded-md px-3' placeholder='IMG URL' type="text" />
                <label className='mt-5'>Addres</label>
                <input onChange={(e) => setAddres(e.target.value)} type="text" placeholder='Addres' className='border py-2 rounded-md px-3' />
                <label className='mt-5'>worktime</label>
                <input onChange={(e) => setWorktime(e.target.value)} type="text" placeholder='worktime' className='border py-2 rounded-md px-3' />
                <label className='mt-5'>numberTell</label>
                <input onChange={(e) => setNumberTell(e.target.value)} type="text" placeholder='numberTell' className='border py-2 rounded-md px-3' />
                <button className='bg-green-600 max-w-20 py-2 rounded-md text-white mt-6'>add</button>
            </form>



        </div>
    )
}

export default Shop
