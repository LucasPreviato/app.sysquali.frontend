import { Popover } from "@headlessui/react";
import Rotina from "../assets/img/imgsidebar/iconRotina.svg"
import RH from "../assets/img/imgsidebar/iconRH.svg"
import Equipamentos from "../assets/img/imgsidebar/iconEquipamento.svg"
import Auditorias from "../assets/img/imgsidebar/iconAuditoria.svg"
import Fornecedores from "../assets/img/imgsidebar/iconFornecedores.svg"
import Cadastro from "../assets/img/imgsidebar/iconCadastro.svg"

export function SideButtons() {
  const Menus = [
    { title: "Rotina", src: Rotina, alt: "Imagem de Rotina" },
    { title: "RH", src: RH, alt: "Imagem de RH" },
    { title: "Equipamentos", src: Equipamentos, alt: "Imagem de Equipamentos" },
    { title: "Auditorias", src: Auditorias, alt: "Imagem de Auditorias" },
    { title: "Fornecedores", src: Fornecedores, alt: "Imagem de Fornecedores" },
    { title: "Cadastro", src: Cadastro, alt: "Imagem de Cadastro" },
  ];
  return (
    <Popover className=" pt-2 ">

      <ul className="flex flex-col gap-2  ">

        {Menus.map((menu, index) => (
          <li key={index} className="">
            <Popover.Button className=" text-zinc-100 bg-sysquali-600 w-12 h-12 px-3 rounded-full flex items-center group ">
              <img title="" className="w-7 h-7 " src={`${menu.src}`} alt={`${menu.alt}`} />
              <span className="max-w-0 overflow-hidden group-hover:max-w-full transition-all">
                <span className="pt-2">{menu.title}</span>
              </span>
            </Popover.Button>
          </li>
        ))}
      </ul>
    </Popover >
  )
}