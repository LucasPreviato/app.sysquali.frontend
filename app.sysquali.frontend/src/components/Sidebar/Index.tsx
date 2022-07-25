import { Popover } from "@headlessui/react";
import { Separator } from "./Separator";
import { SideButtons } from "./SideButtons";
import Rotina from "../assets/img/imgsidebar/Rotina.svg"
// import RH from "../assets/img/imgsidebar/Rh.png"
import RH from "../assets/img/imgsidebar/RH.svg"
import Equipamentos from "../assets/img/imgsidebar/Equipamentos.svg"
import auditorias from "../assets/img/imgsidebar/Auditorias.svg"

export function Sidebar() {
    const Menus = [
        { title: "Rotina", src: Rotina },
        { title: "RH", src: RH},
        { title: "Equipamentos", src: Equipamentos },
    ];


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
                <Popover.Button className=" flex flex-col ">
                    <ul className="bg-sysquali-600 px-3 h-12 ">
                        {Menus.map((menu, index) => (
                            <li key={index} className="text-zinc-100">
                                <img className="w-7 h-7" src={`${menu.src}`} />
                                {/* <span>{menu.title}</span> */}
                            </li>
                        ))}
                    </ul>
                </Popover.Button>
                {/* <SideButtons /> */}
                
            </Popover>
        </>
    )
}