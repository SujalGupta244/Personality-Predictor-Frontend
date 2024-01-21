import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../hooks/useStore'

const Public = () => {
    const store = useStore()
    console.log(store.token)
    const content = (
        <section className='p-4 mt-10 text-center'>
            <header>
                <h1 className='text-5xl font-bold mb-4 '>Welcome to <span className='nowrap'>Personality Test</span></h1>
            </header>
            <main className="">
                <p className='text-xl font-semibold mb-3'>
                    Start your test now.
                </p>
                <button className='bg-[#0096c7] cursor-pointer px-6 py-2 text-lg text-white rounded-xl'>
                    <Link to="/login">Login</Link>
                </button>
                <div className='mt-6'>
                    <h3 className='text-xl font-semibold'>Rules</h3>
                    <ul className=''>
                        <li className='mt-2 text-lg font-semibold'>
                            It is a preference based prediction
                        </li>
                    </ul>
                </div>
            </main>
            
            <footer className=''>
            </footer>
        </section>
    )
    return content;
}

export default Public