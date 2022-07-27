import { Popover } from "@headlessui/react";
import { Separator } from "./Separator";
import { SideButtons } from "./SideButtons";
import Rotina from "../assets/img/imgsidebar/Rotina.svg"

export function Sidebar() {
    


    return (
        <>
            <Popover className="bg-sysquali-900 w-20 h-screen hover:w-72 transition-all duration-500 absolute flex flex-col items-center overflow-y-scroll scrollbar-none ease-linear group pt-2">
                <Popover.Button className="bg-brand-500 px-3  h-12 flex items-center rounded-full ">
                    <img title="String | undefined"
                        className=" w-7 h-7"
                        src="../src/components/assets/SysQuali.ico"
                    />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                        <span className="text-zinc-100 pl-2 ">SysQuali</span>
                    </span>
                </Popover.Button>
                <Separator />
                
                <SideButtons />
                
            </Popover>
        </>
    )
}