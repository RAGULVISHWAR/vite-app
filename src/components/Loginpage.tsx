import { Box, Button, TextField } from "@mui/material";
import { useState } from "react"
import { useUserContext } from "../context/userContext";

const Loginpage =()=> {
    const{setuser}=useUserContext();
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[nameerror,setNameerror]=useState("");
    const[passerror,setPasserror]=useState("");
    const userData ={name:"ragul",password:"12345"}
    function handlesubmit()
    {
        let valid=false;
        if(!name )
        {
            setNameerror("Please enter the name");
            valid=false;
        }
        else{
            setNameerror('');
            valid=true
        }
        if(!password)
        {
            setPasserror("Please enter the password")
            valid=false;
        }else if(password!==userData.password){
            setPasserror("Please enter the correct password");
            valid=false;
        }else{
            setPasserror('');
            valid=true;
        }
      if(valid)
      {
          setuser(name);
          alert("Login successfully");
      }
           
    }
  return (
  <>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: 'auto', marginTop: '50px' }}>
  <TextField error={!!nameerror} onChange={(e)=>setName(e.target.value)} label="Name" variant="outlined"  helperText={nameerror} />
  <TextField error={!!passerror} onChange={(e)=>setPassword(e.target.value)} label="Password" variant="outlined"  helperText={passerror}/>
   <Button onClick={handlesubmit} variant="contained">Login</Button>
  </Box>
  </>
  )
}

export default Loginpage