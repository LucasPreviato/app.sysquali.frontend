import { Popover } from "@headlessui/react";
import { Separator } from "./Separator";
import { SideButtons } from "./SideButtons";
import Rotina from "../assets/img/imgsidebar/Auditorias.svg"
// import RH from "../assets/img/imgsidebar/Rh.png"
// import Auditorias from "../assets/img/imgsidebar/Auditorias.png"
// import Equipamentos from "../assets/img/imgsidebar/Equipamentos.png"
// import auditorias from "../assets/img/imgsidebar/Auditorias.png"
// import auditorias from "../assets/img/imgsidebar/Auditorias.png"
// import auditorias from "../assets/img/imgsidebar/Auditorias.png"
// import auditorias from "../assets/img/imgsidebar/Auditorias.png"
// export const sideButtonsTypes = {
//     ROTINA: {
//         title: 'Rotina',
//         image: {
//             source: Rotina,
//             alt: "Imagem de rotina"
//         }
//     },
//     RH: {
//         title: 'RH',
//         image: {
//             source: RH,
//             alt: "Imagem de rotina"
//         }
//     },
//     EQUIPAMENTOS: {
//         title: 'Equipamentos',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     AUDITORIAS: {
//         title: 'Auditorias',
//         image: {
//             source: auditorias,
//             alt: "Imagem de rotina"
//         }
//     },
//     FORNECEDORES: {
//         title: 'Fornecedores',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     CADASTRO: {
//         title: 'Cadastro',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     RELATORIOS: {
//         title: 'Relatórios',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     INDICADORES: {
//         title: 'Indicadores',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     DOCUMENTOS: {
//         title: 'Documentos',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     CONTRATOS: {
//         title: 'Contratos',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     MANUTENCAO: {
//         title: 'Manutenção',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     TECNICOS: {
//         title: 'Técnicos',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     CONTROLES: {
//         title: 'Controles',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     CHAMADOS: {
//         title: 'Chamados',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     OUTROS: {
//         title: 'Outros',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     TIMANUTENCAO: {
//         title: 'Ti/manutenção',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     MEDICOS: {
//         title: 'Médicos',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     UTIS: {
//         title: 'Utils',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },
//     IMPORTACOES: {
//         title: 'Importações',
//         image: {
//             source: "",
//             alt: "Imagem de rotina"
//         }
//     },


// }

// export type SideButtonsType = keyof typeof sideButtonsTypes;


export function Sidebar() {
    const Menus = [
        { title: "Rotina", src: Rotina },
        // { title: "RH", src: "R },
        // { title: "Equipamentos", src: "Equipamentos" },
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

                <div>
                    <ul>
                        {Menus.map((menu, index) => (
                            <li key={index} className="text-zinc-100">
                                <img className="w-7 h-7" src={`../assets/img/imgsidebar/${menu.src}`} />
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <SideButtons /> */}
                <Separator />
            </Popover>
        </>
    )
}