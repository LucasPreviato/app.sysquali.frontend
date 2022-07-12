import { Popover} from "@headlessui/react";
import { Separator } from "./Separator";
import { SideButtons } from "./SideButtons";



export function Sidebar (){



    return (
        <>
        <Popover className="bg-sysquali-900 w-20 h-screen hover:w-72 transition-all duration-500 absolute flex flex-col items-center overflow-y-scroll scrollbar-none ease-linear group">
        
            <SideButtons />
            <Separator />
        </Popover>
        </>
    )
}