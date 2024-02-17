import {Link} from 'react-router-dom'
import {Navbar, NavbarBrand, NavbarMenuToggle,NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem} from "@nextui-org/react";


function Navigation() {
  return (
    <Navbar shouldHideOnScroll className="bg-transparent -my-10">
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Link to='/'>
                <img src="" alt="L + A" />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>


          <NavbarContent className="hidden sm:flex gap-4 text-White font-bold" justify="end">
            <NavbarBrand>
              <img src="" alt="L + A" />
            </NavbarBrand>
            <NavbarItem>
              <Link to='/'>
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link to='/services' aria-current="page" color="warning">
                Services
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to='/team'>
                Our Team
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to='/contact'>
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu  className="bg-gradient-to-b from-Nav to-transparent ">
            <NavbarMenuItem >
              <Link
                className="w-full text-4xl font-bold text-slate-600 hover:text-White transition ease-in-out delay-100 my-10"
                to='/'
              >
                Home
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                className="w-full text-4xl font-bold text-slate-600 hover:text-White transition ease-in-out delay-100"
                to='/services'
              >
                Services
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                className="w-full text-4xl font-bold text-slate-600 hover:text-White transition ease-in-out delay-100"
                to='/team'
              >
                Our Team
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
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