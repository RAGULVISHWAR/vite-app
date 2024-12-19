import { Button } from "@mui/material"
import { useUserContext } from "../context/userContext";
const Sidebar = () => {
  const{user,setuser}=useUserContext();
  return (
    <div style={{height:'100vh'}}>
        <div style={{height:'100vh',textAlign:"center"}}>
           <h2>
            Welcome {user}
           </h2>
           <Button onClick={()=>setuser(null)}>Logout</Button>
        </div>
    </div>
  )
}

export default Sidebar