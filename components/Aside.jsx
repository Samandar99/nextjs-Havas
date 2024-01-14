import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'





function Aside() {

    const [selectMenu, setSelectMenu] = useState(0)

    useEffect(() => {
        const storedSelectMenu = localStorage.getItem('selectMenu')

        if (storedSelectMenu) {
            setSelectMenu(parseInt(storedSelectMenu, 10));
        }


    }, [])


    function choiceMenu(id) {
        setSelectMenu(id)
        localStorage.setItem('selectMenu', id.toString());
    }

    const asideMenu = [
        {
            id: 1,
            name: 'Рецепты',
            url: '/admin',
            icon: '/icons/home.svg',
        },
        {
            id: 2,
            name: 'Главная',
            url: '/admin/Main',
            icon: '/icons/analytcs.svg',
        },
        {
            id: 3,
            name: 'магазин',
            url: '/admin/Shop',
            icon: '/icons/setting.svg',
        },

    ]

    // asideactive

    return (
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

                    {asideMenu.map((item) => (


                        <Link onClick={() => choiceMenu(item.id)} className={`${item.id === selectMenu ? 'asideactive' : ''} asides trans duration-150 cursor-pointer flex gap-4 ease-in-out mb-4 bg-gradient-to-r   max-w-56 py-3 rounded-md px-6 trans`} key={item.id} href={item.url} >
                            <Image src={item.icon} height={20} width={20} priority={true} alt='home-img' />
                            <span>{item.name}</span>
                        </Link>

                    ))
                    }


                </ul>

            </div>

            <div className='ml-10'>
                <a href="#" className='flex gap-4'>
                    <Image src="/icons/logOut.svg" width={16} height={16} alt='logout' priority={true} />
                    <span>Log Out</span>
                </a>
            </div>

        </aside>
    )
}

export default Aside
