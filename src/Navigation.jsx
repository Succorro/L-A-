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
    <div className="w-[100vw] h-[12vh] flex flex-row justify-between font-medium text-xl text-Dark">
        <div id='left-nav' className="flex items-center self-center ml-[5vw]">
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
                    <SheetContent className='w-[40vw] bg-White'>
                    <div className='flex flex-col '>
                        {linkArray.map((link, index)=> {
                            return <Link key={index} onClick={()=>handleLinkClicked()} className='text-3xl font-medium my-[2vh] py-2 pl-1 border border-b-2 border-slate-800 border-0 w-full hover:text-Blue hover:bg-gray-200  hover:border-slate-400  transition ease-in-out duration-50 delay-50' to={link === 'home' ? '/' : `/${link}`}>{link.toUpperCase()}</Link>
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