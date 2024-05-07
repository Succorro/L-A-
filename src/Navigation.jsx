import {Link} from 'react-router-dom'
import {Navbar, NavbarBrand, NavbarMenuToggle,NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem} from "@nextui-org/react";
import { useState } from 'react';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar 
        isBlurred='false'
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        className="bg-White -my-8 transition ease-in-out delay-50">
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Link to='/' onClick={()=>setIsMenuOpen(false)}>
                <img style={{width: '70px'}} src="/Logo2.png" alt="Logo" loading="lazy"/>
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>


          <NavbarContent className="hidden w-full sm:flex md:gap-20 font-bold ">
            <NavbarBrand>
            <Link
            className={linkStyle}
            onClick={()=>setIsMenuOpen(false)} to='/'>
              <img style={{width: '70px'}} src="/Logo2.png" alt="Logo" />
            </Link>
            </NavbarBrand>
            <NavbarItem>
              <Link
              className={linkStyle}
              onClick={()=>setIsMenuOpen(false)} to='/'>
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
              className={linkStyle}
              onClick={()=>setIsMenuOpen(false)} to='/services' aria-current="page" color="warning">
                Services
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
              className=' lg:-mr-16 text-Blue text-xl hover:text-blue-800 transition ease-in-out delay-100'
              onClick={()=>setIsMenuOpen(false)} to='/team'>
                Team Luna
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
              className='lg:-mr-40 text-Blue text-xl hover:text-blue-800 transition ease-in-out delay-100'
              onClick={()=>setIsMenuOpen(false)} to='/contact'>
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu  className="bg-White flex flex-col justify-center items-center text-Blue transition ease-in-out delay-50 ">
            <NavbarMenuItem className='mb-10 -mt-40' >
              <Link
              onClick={()=>setIsMenuOpen(false)}
                className="w-full text-4xl font-bold hover:text-blue-800 transition ease-in-out delay-100 "
                to='/'
              >
                Home
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className='mb-10'>
              <Link
              onClick={()=>setIsMenuOpen(false)}
                className="w-full text-4xl font-bold  hover:text-blue-800 transition ease-in-out delay-100"
                to='/services'
              >
                Services
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className='mb-10'>
              <Link
              onClick={()=>setIsMenuOpen(false)}
                className="w-full text-4xl font-bold  hover:text-blue-800 transition ease-in-out delay-100"
                to='/team'
              >
                Team Luna
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className='mb-10'>
              <Link
              onClick={()=>setIsMenuOpen(false)}
                className="w-full text-4xl font-bold  hover:text-blue-800 transition ease-in-out delay-100"
                to='/contact'
              >
                Contact
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
  )
}
const linkStyle = 'text-Blue text-xl hover:text-blue-800 transition ease-in-out delay-100'
export default Navigation 