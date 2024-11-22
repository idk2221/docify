import React from 'react'
import Link from 'next/link'

const Docs = () => {
  return (
    <main className='bg-[#232323] h-screen'>
       <div className='fixed left-0 h-screen bg-[#323232] w-[30rem] border-r border-[#424242]'>
         <nav className='p-4'>
           <ul className='space-y-2'>
             <li className='text-gray-300 hover:text-white cursor-pointer'>
               <Link href="/documentation">Documentation</Link>
             </li>
             <li className='text-gray-300 hover:text-white cursor-pointer'>
               <Link href="/api-reference">API Reference</Link>
             </li>
             <li className='text-gray-300 hover:text-white cursor-pointer'>
               <Link href="/examples">Examples</Link>
             </li>
           </ul>
         </nav>
       </div>
    </main>
  )
}

export default Docs
