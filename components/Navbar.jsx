import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Navbar() {
  const [openNav, setOpenNav] = useState(true);
  const [selectId, setSelectId] = useState(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function navBarOpen() {
    setOpenNav(!openNav);
  }

  const select = (id) => {
    // console.log(id);
    setSelectId(id)
  }


  useEffect(() => {
    const handleStart = (url) => setLoading(true);
    const handleComplete = (url) => setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };

  }, [router.events]);

  const navMenu = [
    {
      id: 1,
      name: 'ГЛАВНАЯ',
      url: '/'
    },
    {
      id: 2,
      name: 'О НАС',
      url: '/about'
    },
    {
      id: 3,
      name: 'РЕЦЕПТЫ',
      url: '/recipes'
    },
    {
      id: 4,
      name: 'МАГАЗИНЫ',
      url: '/shop'
    },
    {
      id: 5,
      name: 'НОВОСТИ',
      url: '/news'
    },
    


  ]

  useEffect(() => {
    const currentLink = navMenu.find((link) => link.url === router.pathname);

    if (currentLink) {
      setSelectId(currentLink.id)
    }

  }, [router.pathname])


  return (
    <nav className="nav py-5">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="logo"
            width={52}
            height={63}
            src="/icons/logo.svg"
            alt="logo"
            priority={false}
          />
        </Link>
        <img
          onClick={navBarOpen}
          className="open1"
          src="/icons/open.svg"
          alt="close"
        />
        <div
          className={`${openNav ? "menu" : "active"} menu flex items-center`}
        >
          <span className="mr-3">+998(71)205-95-95</span>
          <ul className="menu__social flex gap-1 mr-6">
            <li>
              <a href="#">
                <img src="/icons/instagram.svg" alt="Мое изображение" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/facebook.svg" alt="Мое изображение" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/telegram.svg" alt="Мое изображение" />
              </a>
            </li>
          </ul>
          <form className="nav__form">
            <div className="nav__form-input">
              <input type="text" className="search-inp" />
              <button>Поиск</button>
            </div>
          </form>
          <img
            onClick={navBarOpen}
            className="close"
            src="/icons/close.svg"
            alt="close"
          />

          <div className="lang ml-3 flex items-center gap-1">
            <h4>Ru</h4>
            <img src="/icons/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="container flex justify-between overflow-x-auto  flex-nowrap">
        <ul className="mt-14 flex  items-center flex-nowrap">
          {navMenu.map((link) => (
            <li key={link.id} onClick={() => select(link.id)} className={`${link.id === selectId ? 'link-active' : ''}`}>
              <Link href={link.url} className={`block  font-bold`}>
                {link.name}
              </Link>
            </li>
          ))}

        </ul>

        <ul className="mt-14  flex items-center flex-nowrap gap-8">
          <li>
            <Link href={"#"} className="block font-bold  text-center">
              ДЛЯ ПАРТНЁРОВ
            </Link>
          </li>
          <li>
            <Link href={"#"} className="block font-bold text-center">
              КАРЬЕРА
            </Link>
          </li>
        </ul>
      </div>
      
      {loading && <div className="loading-indicator">Loading...</div>}
    
    </nav>
  );
}

export default Navbar;
