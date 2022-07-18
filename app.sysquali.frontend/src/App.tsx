import { AlternetTheme } from "./components/AlternetTheme";
import { Sidebar } from "./components/Sidebar/Index";


export default function App() {
  return (
  <>
  <Sidebar />  
  <div className=" max-w-screen max-h-screen">
  <AlternetTheme /> 
  </div>
  </>
  )
}

