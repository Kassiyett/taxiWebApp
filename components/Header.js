import React from 'react';
import Image from 'next/image';

function Header() {
  const headerMenu = [
    {
      id:1,
      name:"Ride",
      icon: "/logo.png"
    },
    {
      id: 2, 
      name: "Package",
      icon: "/banner.png"
    }
  ]

  return (
        <div className='p-5 pb-3 pl-10 border-b-[4px]
         border-gray-200'>
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </div>
  )
}
export default Header