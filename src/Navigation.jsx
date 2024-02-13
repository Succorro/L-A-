import {Link} from 'react-router-dom'
function Navigation() {
  return (
    <div className="w-full h-[15vh] border flex flex-row justify-between">
        <div id='left-nav' className="flex border items-center self-center">
            <img className="" src="" alt="logo" />
        </div>
        <div id='right-nav'>
            <div id='links'>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/ourteam'>Our Team</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div id='menu'></div>
        </div>
    </div>
  )
}

export default Navigation