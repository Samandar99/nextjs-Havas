import React, { useEffect, useState } from 'react'
import { SessionProvider, signIn, useSession } from "next-auth/react"

import { useRouter } from 'next/router'

function Signin() {

    const router = useRouter();
    const { data: session } = useSession();

    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)


        const result = await signIn('credentials', {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false
        })
        setIsSubmitting(false)

        if (result?.ok) {
            if (result?.url === '/auth/signin') {
                router.push('/auth/registration');
            } else {
                router.push('/dashboard')
            }

        }




        useEffect(() => {
            if (session) {
                router.push('/dashboard');
            }
        }, [session, router])
    }
    //    console.log(userInfo);

    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center min-h-screen'>
            <div className='w-96 shadow rounded-lg bg-white px-3 py-6'>
                <h2 className='text-center text-5xl mb-3'>Выход</h2>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input

                        onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                        type="email"
                        placeholder='john@email.com'
                        className='mb-3 border-b-2 px-2 py-2'
                    />


                    <input

                        type="password"
                        onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
                        className='border-b-2 px-2 py-2'
                    />

                    <input
                        type="submit"
                        value="Login"
                        disabled={isSubmitting}
                        className={`cursor-pointer mt-3 max-w-20 bg-blue-700 py-2 rounded-lg text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`} />
                </form>
            </div>
        </div>
    )
}



function SigninPage() {
    return (
        <SessionProvider session={{}}>
            <Signin />
        </SessionProvider>
    )

}

export default SigninPage;
