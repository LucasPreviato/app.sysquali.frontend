import { Popover } from "@headlessui/react";
import { Separator } from "./Separator";
import { SideButtons } from "./SideButtons";
import Rotina from "../assets/img/imgsidebar/iconRotina.svg"
import RH from "../assets/img/imgsidebar/iconRH.svg"
import Equipamentos from "../assets/img/imgsidebar/iconEquipamento.svg"
import Auditorias from "../assets/img/imgsidebar/iconAuditoria.svg"
import Fornecedores from "../assets/img/imgsidebar/iconFornecedores.svg"
import Cadastro from "../assets/img/imgsidebar/iconCadastro.svg"

export function Sidebar() {
    const Menus = [
        { title: "Rotina", src: Rotina, alt: "Imagem de Rotina" },
        { title: "RH", src: RH, alt: "Imagem de RH" },
        { title: "Equipamentos", src: Equipamentos, alt: "Imagem de Equipamentos" },
        { title: "Auditorias", src: Auditorias, alt: "Imagem de Auditorias" },
        { title: "Fornecedores", src: Fornecedores, alt: "Imagem de Fornecedores" },
        { title: "Cadastro", src: Cadastro, alt: "Imagem de Cadastro" },
    ];


    return (
        <>
            <Popover className="bg-sysquali-900 w-20 h-screen hover:w-72 transition-all duration-500 absolute flex flex-col items-center overflow-y-scroll scrollbar-none ease-linear group pt-2">
                <Popover.Button className="bg-brand-500 px-3  h-12 flex items-center rounded-full ">
                    <img title="String | undefined"
                        className=" w-6 h-6"
                        src="../src/components/assets/SysQuali.ico"
                    />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                        <span className="text-zinc-100 pl-2 ">SysQuali</span>
                    </span>
                </Popover.Button>
                <Separator />

                <ul className="flex flex-col gap-2  ">

                    {Menus.map((menu, index) => (
                        <li key={index} className="group-hover:max-w-xs">
                            <Popover.Button className=" text-zinc-100 bg-sysquali-600 w-12 h-12 px-3 rounded-full flex items-center  ">
                                <img className="w-7 h-7 " src={`${menu.src}`} alt={`${menu.alt}`} />
                                <span className="max-w-0 overflow-hidden group-hover:overflow-visible">
                                    <span className="pl-2">{menu.title}</span>
                                </span>
                            </Popover.Button>
                        </li>
                    ))}
                </ul>
            </Popover>
        </>
    )
}