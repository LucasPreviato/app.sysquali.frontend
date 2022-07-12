import { Popover } from "@headlessui/react";

// export const sideButtonsTypes = {
//   Rotina:{
//     title: 'Rotina',
//     image:{
//       source: ,
//       alt: 'Imagem do item Rotina'
//     }
//   }
// }

interface SideButtonsProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number ;
}


export function SideButtons({
  selected,
  isHome,
  hasNotification,
  mentions
}: SideButtonsProps){
 
  return (
    <Popover className=" pt-2 ">    
    <Popover.Button className="bg-brand-500 px-3  h-12 flex items-center rounded-full ">
        <img title="String | undefined" 
        className=" w-7 h-7"
        src="../src/components/assets/SysQuali.ico" 
        />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="text-zinc-100 pl-2 ">SysQuali</span> 
        </span>
        </Popover.Button>
        </Popover>
  )
}