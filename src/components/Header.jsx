import React from 'react';
import MenuItem from './MenuItem';
import { MdHome } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <MenuItem  title="home" address="/" Icon={MdHome}/>
        <MenuItem  title="about" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className='flex items-center gap-4'>
        <DarkModeSwitch />
        <Link href={"/"}>
       <div className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-amber-500 px-2 py-1 rounded-lg'>IMDb</span>
        <span className='text-xl hidden sm:inline'>Clone</span>
      </div>
      </Link>
      </div>
      
     
    </div>
  );
}

export default Header