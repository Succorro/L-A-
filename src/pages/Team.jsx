import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import TeamInfo from "@/data/TeamInfo";

function Team() {
    const teamDisplay = TeamInfo.map((person, index) => {
        console.log(person)
        return (
            <Sheet key={index}>
                <SheetTrigger className="relative overflow-hidden md:my-10 mx-1 md:mx-3 mb-5" >
                    <img className="w-[70vw] md:w-[30vw] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="team member" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className='mt-5'>
                        <img className="w-[65vw]" src="/Statue.jpg" alt="" />
                        <SheetTitle className='text-Blue text-4xl'>
                            {person.name}
                        </SheetTitle>
                        <p className="font-bold text-slate-700">{person.title}</p>
                        <SheetDescription>
                            {person.bio}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        )
    })
  return (
    <div className=" bg-Nav pt-20 min-h-[100vh]"> 
        <h1 className="text-White text-5xl mt-10 md:text-6xl">Team Luna</h1>
        <section className="flex flex-col items-center p-10 text-slate-700 lg:mx-10">
            <ul className="grid grid-cols-1 md:grid-cols-3">
                {teamDisplay}
            </ul>
        </section>
    </div>
  )
}

export default Team