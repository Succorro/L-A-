/* eslint-disable react/prop-types */
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

function Service({serviceData}) {
    const {name, desc, desc2, desc3, image, stat} = serviceData
  return (
    <Sheet>
        <SheetTrigger className="m-5 p-10  flex flex-col items-center">
            <img className="w-10 mb-1" src={image} alt="" />
            <p className="font-bold text-xl my-1">
                {name}
            </p>   
            <p>
                {desc}
            </p>
        </SheetTrigger>
        <SheetContent className='w-[100vw] overflow-scroll'>
            <SheetHeader className='mt-5'>
                <img className="h-[20vh] object-contain" src={image} alt="" loading="lazy"/>
                <SheetTitle className='text-slate-900 text-4xl my-2'>
                    {name}
                </SheetTitle>
                <p className="font-bold text-blue-900">{stat}</p>
                <div className=' max-h-full overflow-y-auto whitespace-normal'>
                    <SheetDescription >
                        {desc2}
                    </SheetDescription>
                    <SheetDescription >
                        {desc3}
                    </SheetDescription>
                </div>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default Service