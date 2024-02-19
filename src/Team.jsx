import { useState } from "react"

function Team() {
    const [display1, setDisplay1] = useState(<></>)
    const [display2, setDisplay2] = useState(<></>)

    function handleLiClick(value){
        switch (value) {
            case 1:
                setDisplay1(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Image: {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay2(<></>);
                break;
            case 2:
                setDisplay1(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Image: {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay2(<></>);
                break;
            case 3:
                setDisplay1(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Image: {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay2(<></>);
                break;
            case 4:
                setDisplay2(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Image: {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay1(<></>);
                break;
            case 5:
                setDisplay2(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Image: {value}</h1>
                        <p className="text-slate-600">Insert information about a team member here</p>
                    </div>
                );
                setDisplay1(<></>);
                break;
            case 6:
                setDisplay2(
                    <div className="w-full p-4 my-5 bg-slate-200 rounded-lg flex flex-col text-start">
                        <h1 className="text-slate-800 text-xl">Image: {value}</h1>
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
    <div className=" bg-Nav pt-20">
        <section className="flex flex-col items-center p-10 text-slate-700">
            <ul className="grid grid-cols-3">
                <li className="hover:opacity-90 hover:cursor-pointer transition ease-in-out delay-100 mx-1" onClick={()=> handleLiClick(1)}>
                    <img className="w-[40vw]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="team member" />
                    <h1 className="text-xl font-bold">Sample</h1>
                    <p className="font-medium text-md border bg-White mx-12">Learn more</p>
                </li>
                <li className="hover:opacity-90 hover:cursor-pointer transition ease-in-out delay-100 mx-1" onClick={()=> handleLiClick(2)}>
                    <img className="w-[40vw]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="team member" />
                    <h1 className="text-xl font-bold">Sample</h1>
                    <p className="font-medium text-md border bg-White mx-12">Learn more</p>
                </li>
                <li className="hover:opacity-90 hover:cursor-pointer transition ease-in-out delay-100 mx-1" onClick={()=> handleLiClick(3)}>
                    <img className="w-[40vw]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="team member" />
                    <h1 className="text-xl font-bold">Sample</h1>
                    <p className="font-medium text-md border bg-White mx-12">Learn more</p>
                </li>
               
            </ul>
            {display1}
            <ul className="grid grid-cols-3 mt-5">
                 <li className="hover:opacity-90 hover:cursor-pointer transition ease-in-out delay-100 mx-1" onClick={()=> handleLiClick(4)}>
                    <img className="w-[40vw]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="team member" />
                    <h1 className="text-xl font-bold">Sample</h1>
                    <p className="font-medium text-md border bg-White mx-12">Learn more</p>
                </li><li className="hover:opacity-90 hover:cursor-pointer transition ease-in-out delay-100 mx-1" onClick={()=> handleLiClick(5)}>
                    <img className="w-[40vw]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="team member" />
                    <h1 className="text-xl font-bold">Sample</h1>
                    <p className="font-medium text-md border bg-White mx-12">Learn more</p>
                </li><li className="hover:opacity-90 hover:cursor-pointer transition ease-in-out delay-100 mx-1" onClick={()=> handleLiClick(6)}>
                    <img className="w-[40vw]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="team member" />
                    <h1 className="text-xl font-bold">Sample</h1>
                    <p className="font-medium text-md border bg-White mx-12">Learn more</p>
                </li>
            </ul>
            {display2}
        </section>
    </div>
  )
}

export default Team