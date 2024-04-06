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
        className="bg-hidden -my-8 transition ease-in-out delay-50">
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Link to='/' onClick={()=>setIsMenuOpen(false)}>
                <img style={{width: '70px'}} src="/Logo.png" alt="Logo" />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>


          <NavbarContent className="hidden sm:flex gap-4 text-White  font-bold" justify="end">
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
              className={linkStyle}
              onClick={()=>setIsMenuOpen(false)} to='/team'>
                Our Team
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
              className={linkStyle}
              onClick={()=>setIsMenuOpen(false)} to='/contact'>
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu  className="bg-Nav  transition ease-in-out delay-50 ">
            <NavbarMenuItem >
              <Link
              onClick={()=>setIsMenuOpen(false)}
                className="w-full text-4xl font-bold text-slate-600 hover:text-White transition ease-in-out delay-100 my-10"
                to='/'
              >
                Home
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
              onClick={()=>setIsMenuOpen(false)}
                className="w-full text-4xl font-bold text-slate-600 hover:text-White transition ease-in-out delay-100"
                to='/services'
              >
                Services
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
              onClick={()=>setIsMenuOpen(false)}
                className="w-full text-4xl font-bold text-slate-600 hover:text-White transition ease-in-out delay-100"
                to='/team'
              >
                Our Team
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
              onClick={()=>setIsMenuOpen(false)}
                className="w-full text-4xl font-bold text-slate-600 hover:text-White transition ease-in-out delay-100"
                to='/contact'
              >
                Contact
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
  )
}
const linkStyle = 'text-White text-xl'
export default Navigation