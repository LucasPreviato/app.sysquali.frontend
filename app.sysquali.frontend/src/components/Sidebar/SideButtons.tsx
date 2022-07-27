import { Popover } from "@headlessui/react";
import Rotina from "../assets/img/imgsidebar/iconRotina.svg"
import RH from "../assets/img/imgsidebar/iconRH.svg"
import Equipamentos from "../assets/img/imgsidebar/iconEquipamento.svg"
import Auditorias from "../assets/img/imgsidebar/iconAuditoria.svg"
import Fornecedores from "../assets/img/imgsidebar/iconFornecedores.svg"
import Cadastro from "../assets/img/imgsidebar/iconCadastro.svg"

export function SideButtons() {
  const Menus = [
    { title: "Rotina", src: Rotina },
    { title: "RH", src: RH },
    { title: "Equipamentos", src: Equipamentos },
    { title: "Auditorias", src: Auditorias },
    { title: "Fornecedores", src: Fornecedores },
    { title: "Cadastro", src: Cadastro },
  ];
  return (
    <Popover className=" pt-2 ">
      <Popover.Button className=" flex flex-col  ">
        <ul className=" ">
          {Menus.map((menu, index) => (
            <li key={index} className="text-zinc-100 bg-sysquali-600 w-12 h-12 px-3 rounded-full flex items-center">
              <img className="w-7 h-7" src={`${menu.src}`} />
              <span>{menu.title}</span>
            </li>
          ))}
        </ul>
      </Popover.Button>
    </Popover>
  )
}