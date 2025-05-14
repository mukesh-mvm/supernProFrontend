import React from 'react'

export const SideBar = () => {
    return (
        <div className=' w-full flex flex-col shadow-md gap-6 p-2'>

            <div className=' h-[300px] w-full shadow-md p-2'>
                 <h2 className=' font-bold text-center text-black'>Latest News</h2>
            </div>


            <div className=' h-[300px] w-full shadow-md'>
            <h2 className=' font-bold text-center text-black'>Viral Stories</h2>
            </div>

            <div></div>
        </div>
    )
}
