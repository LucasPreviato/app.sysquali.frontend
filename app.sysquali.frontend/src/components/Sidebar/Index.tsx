import { Popover } from "@headlessui/react";
import { Separator } from "./Separator";
import { SideButtons } from "./SideButtons";

export const sideButtonsTypes = {
    ROTINA: {
        title: 'Rotina',
        image: {
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    RH: {
        title: 'RH',
        image: {
            source :"" ,
            alt: "Imagem de rotina"
        }
    }, 
    EQUIPAMENTOS: {
        title: 'Equipamentos',
        image: {
            source :"" ,
            alt: "Imagem de rotina"
        }
    }, 
    AUDITORIAS: {
        title: 'Auditorias',
        image: {
            source :"" ,
            alt: "Imagem de rotina"
        }
    }, 
    FORNECEDORES: {
        title: 'Fornecedores',
        image: {
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    CADASTRO : {
        title: 'Cadastro',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    RELATORIOS : {
        title: 'Relatórios',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    INDICADORES : {
        title: 'Indicadores',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    DOCUMENTOS : {
        title: 'Documentos',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    CONTRATOS : {
        title: 'Contratos',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    MANUTENCAO : {
        title: 'Manutenção',
        image :{
            source : "",
            alt: "Imagem de rotina"
        }
    },
    TECNICOS : {
        title: 'Técnicos',
        image :{
            source : "",
            alt: "Imagem de rotina"
        }
    },
    CONTROLES : {
        title: 'Controles',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    CHAMADOS : {
        title: 'Chamados',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    OUTROS : {
        title: 'Outros',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    TIMANUTENCAO : {
        title: 'Ti/manutenção',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    MEDICOS : {
        title: 'Médicos',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    UTIS : {
        title: 'Utils',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    IMPORTACOES : {
        title: 'Importações',
        image :{
            source :"" ,
            alt: "Imagem de rotina"
        }
    },
    

}
export type SideButtonsType = keyof typeof sideButtonsTypes;


export function Sidebar() {



    return (
        <>
            <Popover className="bg-sysquali-900 w-20 h-screen hover:w-72 transition-all duration-500 absolute flex flex-col items-center overflow-y-scroll scrollbar-none ease-linear group">

                <SideButtons />
                <Separator />
            </Popover>
        </>
    )
}