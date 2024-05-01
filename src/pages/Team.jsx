import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import TeamInfo from "@/data/TeamInfo";

function Team() {
    const teamDisplay = TeamInfo.map((person, index) => {
        return (
            <Sheet key={index}>
                <SheetTrigger className="relative overflow-hidden md:my-10 mx-1 md:mx-3 mb-5"  >
                    <img className="w-[70vw] md:w-[30vw] max-h-[404px] object-cover" src={person.image} alt="team member" />
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
                        <div className=' max-h-full overflow-y-auto whitespace-normal'>
                            <SheetDescription >
                                {person.bio}
                            </SheetDescription>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        )
    })
  return (
    <div className=" bg-slate-200 mt-20 min-h-[100vh]"> 
        <div className="bg-Blue py-10">
            <h1 className="text-White text-5xl mb-10">Team Luna</h1>
            <div className="p-6 bg-white rounded-lg shadow-md mx-10 mb-10 lg:mx-32">
                <p className="text-slate-700 text-lg font-bold mb-4">Our team at Susana B. Luna and Associates embodies a deep commitment to empowering individuals on their immigration journey. With a profound understanding of the complexities and nuances of immigration law, our diverse team of legal experts stands ready to navigate the legal landscape with precision and empathy.</p>
            </div>
        </div>
        <section className="flex flex-col items-center p-10 text-slate-700 lg:mx-10">
            <ul className="grid grid-cols-1 md:grid-cols-3">
                {teamDisplay}
            </ul>
        </section>
    </div>
  )
}

export default Team