import { useState } from "react"

function Team() {
    const [display1, setDisplay1] = useState(<></>)
    const [display2, setDisplay2] = useState(<></>)

    function handleLiClick(value){
        switch (value) {
            case 1:
                setDisplay1(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Susana B Luna</h1>
                        <p className="text-slate-600">Experienced immigration attorney</p>
                    </div>
                );
                setDisplay2(<></>);
                break;
            case 2:
                setDisplay1(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Employee {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay2(<></>);
                break;
            case 3:
                setDisplay1(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Employee  {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay2(<></>);
                break;
            case 4:
                setDisplay2(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Employee  {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay1(<></>);
                break;
            case 5:
                setDisplay2(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Employee  {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay1(<></>);
                break;
            case 6:
                setDisplay2(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Employee  {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay1(<></>);
                break;
            default:
                setDisplay1(<></>);
                setDisplay2(<></>);
        }

    }
  return (
    <div className=" bg-Nav pt-20 min-h-[100vh]"> 
        <h1 className="text-White text-5xl mt-8 md:text-6xl">Our Team</h1>
        <section className="flex flex-col items-center p-10 text-slate-700 lg:mx-10">
            <ul className="grid grid-cols-3">
                <li className="relative overflow-hidden md:my-10 mx-1 md:mx-3">
                    <img className="w-[30vw] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Nav bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-slate-700 font-bold text-2xl">Name</h1>
                        <button onClick={()=> handleLiClick(1)} className="bg-transparent border border-slate-700 text-slate-700 font-bold px-3 py-1 mt-2">Full Bio</button>
                    </div>
                </li>
                <li className="relative overflow-hidden md:my-10 mx-1 md:mx-3">
                    <img className="w-[30vw] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Nav bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-slate-700 font-bold text-2xl">Name</h1>
                        <button onClick={()=> handleLiClick(2)} className="bg-transparent border border-slate-700 text-slate-700 font-bold px-3 py-1 mt-2">Full Bio</button>
                    </div>
                </li>
                <li className="relative overflow-hidden md:my-10 mx-1 md:mx-3">
                    <img className="w-[30vw] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Nav bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-slate-700 font-bold text-2xl">Name</h1>
                        <button onClick={()=> handleLiClick(3)} className="bg-transparent border border-slate-700 text-slate-700 font-bold px-3 py-1 mt-2">Full Bio</button>
                    </div>
                </li>
            </ul>
            {display1}
            <ul className="grid grid-cols-3 mt-5">
            <li className="relative overflow-hidden md:my-10 mx-1 md:mx-3">
                    <img className="w-[30vw] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Nav bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-slate-700 font-bold text-2xl">Name</h1>
                        <button onClick={()=> handleLiClick(4)} className="bg-transparent border border-slate-700 text-slate-700 font-bold px-3 py-1 mt-2">Full Bio</button>
                    </div>
                </li>
                <li className="relative overflow-hidden md:my-10 mx-1 md:mx-3">
                    <img className="w-[30vw] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Nav bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-slate-700 font-bold text-2xl">Name</h1>
                        <button onClick={()=> handleLiClick(5)} className="bg-transparent border border-slate-700 text-slate-700 font-bold px-3 py-1 mt-2">Full Bio</button>
                    </div>
                </li>
                <li className="relative overflow-hidden md:my-10 mx-1 md:mx-3">
                    <img className="w-[30vw] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Nav bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-slate-700 font-bold text-2xl">Name</h1>
                        <button onClick={()=> handleLiClick(6)} className="bg-transparent border border-slate-700 text-slate-700 font-bold px-3 py-1 mt-2">Full Bio</button>
                    </div>
                </li>
            </ul>
            {display2}
        </section>
    </div>
  )
}

export default Team