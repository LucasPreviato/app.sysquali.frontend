import {useContext, createContext, useEffect, useState, ReactNode} from "react";

type ThemeContextProps = {
    children : ReactNode,
}
type ThemeContextType = {
    theme : string;
    setTheme: (newState: string)=> void;
}

const initialValue = {
    theme : "light",
    setTheme: ()=>{},
}
export const ThemeContext = createContext<ThemeContextType>(initialValue);
export function ThemeContextProvider  ({children}: ThemeContextProps) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") !== "dark" ? "light" : "dark")
    useEffect(() => {

        const root = window.document.documentElement;
        
        const removeOldTheme = theme ==="dark"? "light" : "dark"
        root.classList.remove(removeOldTheme)
        root.classList.add(theme)
        localStorage.setItem("theme",theme)
    }, [theme] )
    return (
        <ThemeContext.Provider value = {{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
        )
}


export function useTheme(){
    return useContext(ThemeContext);
}




// export const ThemeContext = createContext<ThemeContextType>(initialValue);
//     const [theme, setTheme] = useState(initialValue.theme)

// export const ThemeContextProvider = ({children}: ThemeContextProps) => {
//     return (
//         <ThemeContext.Provider value = {{theme, setTheme}}>
//             {children}
//         </ThemeContext.Provider>
//         )
// }





//     interface ContextState{
//         theme : string;
//         setTheme : ()
//     }
//     // export const ThemeContext = createContext<ContextState | null >(null) ;
// export const ThemeContext = createContext<ContextState | null>(null);

// export function ThemeContextProvider(children : ReactNode){
    
//     const [theme, setTheme]= useState(localStorage.getItem("theme") !== "dark" ? "light": "dark");

//     useEffect(()=>{
//         const root = window.document.documentElement;
//         root.classList.add(theme);
//         localStorage.setItem("theme", theme);
//     },[])
//     return(
//         <ThemeContext.Provider value ={{theme,setTheme}}>
//             {children}
//         </ThemeContext.Provider>
//         )
// }

// export function UseTheme(){
//     return useContext(ThemeContext);
// }