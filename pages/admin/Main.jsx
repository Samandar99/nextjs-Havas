import React, { useEffect, useState } from 'react'

function Main() {

    const [dataInfo, setDataInfo] = useState('')
    const [dataTitle, setDataTitle] = useState('');
    const [dataText, setDataText] = useState('');

    // console.log(dataTitle);
    // console.log(dataText);
    useEffect(() => {
        fetch('https://nextjs-havas.vercel.app/api/infomain')
            .then((res) => res.json())
            .then((data) => setDataInfo(data))

    }, [])

    async function changeText(e) {
        e.preventDefault();

        try {
            const response = await fetch('https://nextjs-havas.vercel.app/api/infomain', {
                method: 'PUT',
                body: JSON.stringify({
                    title: dataTitle,
                    text: dataText
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {

                const newData = await response.json();
                setDataInfo(newData);
            } else {
                console.error('Ошибка при выполнении запроса:', response.statusText);
            }
        } catch (error) {
            console.error('Произошла ошибка:', error.message);
        }
    }


    return (
        <div className='form-witdh mt-10 ml-8'>
            <div>
                <h3><b className='text-2xl'>title:  </b> {dataInfo.title}</h3>
                <p className=' mt-5'><b className='text-2xl'>text:  </b> {dataInfo.text}</p>
            </div>


            <form className='flex flex-col mt-28' onSubmit={changeText}>
                <input onChange={(e) => setDataTitle(e.target.value)} type="text" placeholder='title' className='px-2 py-3 border rounded' />
                <textarea onChange={(e) => setDataText(e.target.value)} placeholder='text' className='min-h-52 px-2 border mt-5 rounded'></textarea>
                <button className='bg-green-600 max-w-32 mt-3 rounded-md text-white  py-2'>UPDATE</button>
            </form>
        </div>
    )
}

export default Main
