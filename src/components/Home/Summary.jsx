import Link from 'next/link'
import React from 'react'

const data = [
    {id:1, title:"Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words",image:"https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180"},
    {id:2, title:"Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words",image:"https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180"},
    {id:3, title:"Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words",image:"https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180"},
    {id:4, title:"Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words",image:"https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180"},
   
]





const data1 = [
  {id:1,title:"Here is how Govt Has Limited Gold Storage at Home",image:"/blog3.png",base:"finance"},
  { id: 2, title: "Facts About ATM Withdrawal Charges For Banks", image: "/blog1.png",base:"finance" },
  { id: 3, title: "Credit Or Debit Card Rules: Benefits For Customers", image: "/blog2.png",base:"finance" },
 { id: 4, title: "5 Reasons Why Too Much Sugar Is Bad For You", image: "/blog4.png",base:"fashion-lifestyle" },
]


const data2 = [
    {id:1,Ques:"Learn about the history, usage"},
    {id:1,Ques:"Learn about the history, usage"},
    {id:1,Ques:"Learn about the history, usage"},
    {id:1,Ques:"Learn about the history, usage"},
    {id:1,Ques:"Learn about the history, usage"},
    {id:1,Ques:"Learn about the history, usage"},
]


 const Summary = () => {
  return (
    <div className='container mx-auto p-6 flex flex-col md:flex-row gap-6'>
         <aside className="w-full md:w-2/5 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Summary</h2>
        <ul className="space-y-3">

            {
                data2?.map((item,index)=>{

                    return(
                        <>

                          <li key={index} className="border-b pb-2"><span className='  font-bold '>Q. {index+1}</span> {item?.Ques}</li>
                        </>
                    )

                })
            }
          
        </ul>
      </aside>

          <main className='w-full md:4/5 flex flex-col  gap-6 shadow-md'>
                 
                 {
                    data1?.map((item)=>{
                      return(
                        <>
                <div  className='w-full p-4 flex flex-col md:flex-row items-center gap-10 shadow-md  '>
                    <img src={item.image} alt="" className=' rounded-2xl w-full md:w-[150px]' />
                    
                    <Link href={`/${item?.base}/${item?.title.toLowerCase().replace(/ /g, "-").replace(/:/g, "_")}`}   className=' cursor-pointer hover:text-red-400 text-black text-2xl'>{item.title}</Link>
                 </div>
                        </>
                      )
                    })
                 }
                 
                
          </main>

        <aside className="w-full md:w-2/5 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Top Offers</h2>
        <ul className="space-y-3">
          <li className="border-b pb-2">Breaking: Market hits all-time high</li>
          <li className="border-b pb-2">Politics: New policies announced</li>
          <li className="border-b pb-2">Sports: Championship finals highlights</li>
          <li className="border-b pb-2">Tech: New smartphone released</li>
        </ul>
      </aside>

    </div>
  )
}

export default Summary;
