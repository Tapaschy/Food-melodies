import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { HiEmojiSad } from "react-icons/hi";

const Errorpage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <div className='max-w-md text-center'>
                        <HiEmojiSad className='h1 text-danger'></HiEmojiSad>
                        <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                            <span className='sr-only'>Error</span>
                            {status || 404}
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                            {error?.message}
                        </p>
                        <Link to='/' className='btn'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Errorpage;