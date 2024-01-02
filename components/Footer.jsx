import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer>
            <div className='map mt-40 py-28'>
                <div className='container'>
                    <div className='footer__block flex gap-10 items-center 2xl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-3 flex-wrap 2xl: justify-center '>
                        <div className='left'>
                            <h3 className='map__title'>ХОТИТЕ ЗАДАТЬ ВОПРОС?</h3>

                            <div className='map__sub mt-24 mb-4'>
                                <span className='text-2xl'>Позвоните нам</span>
                                <div className='flex gap-4 mt-6 mb-8'>
                                    <Image src="/icons/call.svg" width={30} height={30} priority={true} alt='call' />
                                    <a href='tel:+998(71) 205-95-95' className='text-2xl'>+998(71) 205-95-95</a>
                                </div>
                                <span className='text-2xl'>Напишите нам</span>
                            </div>
                            <form className='form'>
                                <input placeholder='Напишите ваш e-mail' type="text" className='input' />
                                <label>Обязательное поле для заполнения*</label>
                                <textarea className='texta mt-6' placeholder='Напишите сообщение...'>
                                </textarea>
                                <button className='form-btn mt-6'>Отправить</button>
                            </form>
                        </div>
                        <div className='right'>
                            <iframe
                                className='space'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5989.458636068053!2d69.21533159074325!3d41.35823683823019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c41349811d7%3A0xce2aaa0754d0e9f5!2z0JrQsNGA0LDQutCw0LzRi9GIIDIvMSwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1704227259317!5m2!1sru!2s"
                                width="600"
                                height="369"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container lines flex justify-between flex-wrap py-11">
                <Link href="/">
                    <Image className='footer__logo' src="/icons/logo.svg" width={138} height={173} priority={true} alt='logo' />
                </Link>

                <div>
                    <h3 className='font-bold text-xl mb-6'>Потребителям</h3>
                    <ul>
                        <li className='mb-6 text-gray-400 text-xl'><a href="#">Магазины</a></li>
                        <li className='mb-6 text-gray-400 text-xl'><a href="#">Новости</a></li>
                        <li className='mb-6 text-gray-400 text-xl'><a href="#">Специальные предложения</a></li>
                        <li className='text-gray-400 text-xl'><a href="#">Рецепты</a></li>
                    </ul>
                </div>
                <ul>
                    <li className='mb-6 mt-14 text-gray-400 text-xl'><a href="#">Социальные проекты</a></li>
                    <li className='mb-6 text-gray-400 text-xl'><a href="#">О нас</a></li>
                    <li className='mb-6 text-gray-400 text-xl'><a href="#">Для партнёрства</a></li>
                    <li className='text-gray-400 text-xl'><a href="#">Карьера</a></li>
                </ul>
                <div>
                    <h3 className='font-bold text-xl mb-6'>Партнёрам:</h3>
                    <ul>
                        <li className='mb-6 text-gray-400 text-xl'><a href="#">Для партнёров</a></li>
                        <li className='mb-6 text-gray-400 text-xl'><a href="#">Каталог</a></li>
                        <li className='mb-6 text-gray-400 text-xl'><a href="#">Анкета для HR</a></li>
                        <li className='text-gray-400 text-xl'><a href="#">Обратная связь</a></li>
                    </ul>
                </div>


            </div>


        </footer>
    )
}

export default Footer
