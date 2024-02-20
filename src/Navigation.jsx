import {Link} from 'react-router-dom'
import {Navbar, NavbarBrand, NavbarMenuToggle,NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem} from "@nextui-org/react";
import { useState } from 'react';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar 
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        className="bg-gradient-to-b from-Nav via-Nav to-transparent -my-8 transition ease-in-out delay-300">
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Link to='/' onClick={()=>setIsMenuOpen(false)}>
                <img src="" alt="L + A" />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>


          <NavbarContent className="hidden sm:flex gap-4 text-White font-bold" justify="end">
            <NavbarBrand>
            <Link
            onClick={()=>setIsMenuOpen(false)} to='/'>
              <img src="" alt="L + A" />
            </Link>
            </NavbarBrand>
            <NavbarItem>
              <Link
              onClick={()=>setIsMenuOpen(false)} to='/'>
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
              onClick={()=>setIsMenuOpen(false)} to='/services' aria-current="page" color="warning">
                Services
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
              onClick={()=>setIsMenuOpen(false)} to='/team'>
                Our Team
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
              onClick={()=>setIsMenuOpen(false)} to='/contact'>
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu  className="bg-Nav">
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
export default Navigation