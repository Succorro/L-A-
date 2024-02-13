import {Link} from 'react-router-dom'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function Navigation() {
    const linkArray = ['home', 'services', 'our team', 'contact']
    function handleMenuClick(){
        console.log('clicked')
    }
    function handleLinkClicked(){
        console.log('clicked')
    }
  return (
    <div className="w-[100vw] h-[12vh] border flex flex-row justify-between font-medium text-xl text-Dark">
        <div id='left-nav' className="flex border items-center self-center">
            <img className="" src="" alt="logo" />
        </div>
        <div id='right-nav' className='flex justify-end md:justify-start items-center w-1/2'>
            <div id='links' className='flex h-[12vh] opacity-0 md:opacity-100 -translate-x-[100vw] md:translate-x-0'>
                {linkArray.map((link, index)=> {
                   return <Link key={index} onClick={()=>handleLinkClicked()} className={linkStyle} to={link === 'home' ? '/' : `/${link}`}>{link.toUpperCase()}</Link>
                })}
            </div>
            <div id='menu' className='flex opacity-100 md:opacity-0 md:hidden md:-translate-x-[100vw] -translate-x-10'>
                <Sheet>
                    <SheetTrigger>
                        <img onClick={()=> handleMenuClick()} className='hover:cursor-pointer m-5' src="/menu.svg" alt="menu" />
                    </SheetTrigger>
                    <SheetContent>
                    <div className='flex flex-col'>
                        {linkArray.map((link, index)=> {
                            return <Link key={index} onClick={()=>handleLinkClicked()} className='text-3xl font-semibold pt-[4vh] border w-full hover:text-Blue transition ease-in-out delay-100' to={link === 'home' ? '/' : `/${link}`}>{link.toUpperCase()}</Link>
                        })}
                    </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </div>
  )
}
const linkStyle = 'mx-3 px-1 pt-[4vh] border border-Blue border-0 border-b-4 h-[12vh] hover:text-royalBlue transition ease-in-out delay-100'
export default Navigation