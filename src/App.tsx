import { useEffect, useState } from "react"
import Loginpage from "./components/Loginpage"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { useUserContext } from "./context/userContext"
const App = () =>  {
  const [isLoged,setIsloged]=useState<boolean>(false);
  const{user}=useUserContext();
  useEffect(() => {
    if (user) {
      setIsloged(true);
    } else {
      setIsloged(false);
    }
  }, [user]);
  return (
    <>
      <Navbar/>
      {isLoged?<Sidebar/>:<Loginpage/>}
    </>
  )
}
export default App
