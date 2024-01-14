// pages/details.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Details() {
    const router = useRouter();
    const { id } = router.query;

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {

            fetch(`https://nextjs-havas.vercel.app/products?id=${id}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(productData => setProduct(productData))
                .catch(error => {
                    console.error('Error fetching product:', error.message);

                });
        }
    }, [id]);

    if (!id) {
        return <p>Loading...</p>;
    }

    return (
        <div className='mt-24'>

            {product && (
                <div className='container 2xl:px-0 xl:px-0 lg:px-3 md:px-3 sm:px-3 pse'>
                    <Link href={'/recipes'} className='px-9 py-1  rounded-2xl text-white text-xl bg-orange-500'>Назад</Link>
                    <h1 className='text-4xl font-bold mt-14'>{product.title}</h1>
                    <img className='mt-11 mb-7 max-w-80 object-cover rounded-md' src={product.img} alt={`Image for ${product.title}`} />
                    <ul>
                        {product.info.map((item, index) => (
                            <li key={index} className='mb-2'>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Details;
