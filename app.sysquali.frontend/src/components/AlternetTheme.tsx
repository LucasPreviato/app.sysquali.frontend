import { Popover } from "@headlessui/react";
import { BsLightbulbFill } from "react-icons/bs";
import { useTheme } from "./hooks/UseTheme";



export function AlternetTheme() {
    const {theme, setTheme} = useTheme();
    return (
      <Popover className="">
        <Popover className="flex justify-center items-center h-screen gap-4">
        <p className="font-bold text-3xl ">SysQuali coming soon! </p>
        {theme === "light" ? (
        <BsLightbulbFill size={30} className="cursor-pointer text-black transition " onClick={()=>setTheme("dark")} /> 
        ):(
          <BsLightbulbFill size={30} className="cursor-pointer text-white transition " onClick={()=>setTheme("light")} /> 
        )} 
      </Popover>
      </Popover>   
    )
}