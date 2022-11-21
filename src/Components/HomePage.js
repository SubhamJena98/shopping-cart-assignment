import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='bg-gray-700 mt-0 h-screen space-y-5 flex items-center text-center'>
            <div className='m-20 w-[100%]'>
                <h3 className='uppercase text-4xl p-10 font-bold border-b-4 border-[#F7AB0A]/60 text-[#F7AB0A] mb-[50px]'>Login as:</h3>
                <div className='space-x-10 text-center items-center w-[100%]'>
                    <Link to='/user'>
                        <button className='uppercase text-2xl font-bold bg-gray-600 text-[#F7AB0A] hover:bg-blue-500 hover:border-[#F7AB0A]/40 hover:text-black m-5 p-2 rounded-full w-[10%]'>User</button>
                    </Link>
                    <Link to='/admin'>
                        <button className='uppercase text-2xl font-bold bg-gray-600 text-[#F7AB0A] hover:bg-blue-500 hover:border-[#F7AB0A]/40 hover:text-black m-5 p-2 rounded-full w-[10%]'>Admin</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomePage