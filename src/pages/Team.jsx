import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import TeamInfo from "@/data/TeamInfo";

function Team() {
    const teamDisplay = TeamInfo.map((person, index) => {
        return (
            <Sheet key={index}>
                <SheetTrigger className="relative overflow-hidden md:my-10 mx-1 md:mx-3 mb-5"  >
                    <img className="w-[70vw] md:w-[30vw] object-cover" src={person.image} alt="team member" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-100 bg-Nav bg-opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <p className=" text-3xl mt-80 text-White">{person.name}</p>
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className='mt-5'>
                        <img className="h-[35vh] object-contain" src={person.image} alt="" />
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
        <h1 className="text-Blue font-bold text-5xl mt-10 md:text-6xl">Team Luna</h1>
        <section className="flex flex-col items-center p-10 text-slate-700 lg:mx-10">
            <ul className="grid grid-cols-1 md:grid-cols-3">
                {teamDisplay}
            </ul>
        </section>
    </div>
  )
}

export default Team