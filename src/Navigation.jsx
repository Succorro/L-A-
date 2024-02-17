import {Link} from 'react-router-dom'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function Navigation() {
    const linkArray = ['home', 'services', 'team', 'contact']
    function handleMenuClick(){
        console.log('clicked')
    }
    function handleLinkClicked(){
        console.log('clicked')
    }
  return (
    <div className="w-[100vw] h-[12vh] flex flex-row justify-between font-medium text-xl text-Dark">
        <div id='left-nav' className="flex items-center self-center ml-[5vw]">
            <Link to='/'>
                <img className="border w-[7vw]" src="/scales-of-justice.png" alt="logo" />
            </Link>
        </div>
        <div id='right-nav' className='flex justify-end md:justify-start items-center w-1/2'>
            <div id='links' className='flex h-[12vh] opacity-0 md:opacity-100 -translate-x-[100vw] md:translate-x-0'>
                {linkArray.map((link, index)=> {
                   return <Link key={index} onClick={()=>handleLinkClicked()} className={linkStyle} to={link === 'home' ? '/' : `/${link}`}>{link === 'team' ? 'OUR ' + link.toUpperCase() : link.toUpperCase() }</Link>
                })}
            </div>
            <div id='menu' className='flex opacity-100 md:opacity-0 md:hidden md:-translate-x-[100vw] -translate-x-10'>
                <Sheet>
                    <SheetTrigger>
                        <img onClick={()=> handleMenuClick()} className='hover:cursor-pointer m-5' src="/menu.svg" alt="menu" />
                    </SheetTrigger>
                    <SheetContent className='w-[40vw] bg-White border-none font-libre'>
                    <div className='flex flex-col'>
                        {linkArray.map((link, index)=> {
                            return <Link key={index} onClick={()=>handleLinkClicked()} className='text-slate-500 text-xl sm:text-2xl font-semibold mt-5 pb-5 pt-3 w-[40vw] pl-4 -ml-6 border border-0 border-b border-Blue hover:text-Blue hover:border-slate-900 transition ease-in-out duration-50 delay-100' to={link === 'home' ? '/' : `/${link}`}>{link === 'team' ? 'OUR ' + link.toUpperCase() : link.toUpperCase() }</Link>
                        })}
                    </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </div>
  )
}
const linkStyle = 'text-slate-600 text-lg mx-3 px-1 pt-[4vh] border border-Blue border-0 border-b-2 h-[12vh] hover:text-Blue transition ease-in-out delay-100'
export default Navigation