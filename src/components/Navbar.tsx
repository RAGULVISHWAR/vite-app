import { Typography } from "@mui/material"

const Navbar = () => {
  return (
    <div style={{height:'60px',display:'flex',justifyContent:'space-between',backgroundColor:'skyblue'}}  >
       <div>
         <Typography variant="h5">App</Typography>
       </div>
       <div style={{width:'10vw',display:'flex',justifyContent:'space-between'}}>
         <Typography>Home </Typography>
         <Typography>Dashboard</Typography>     
       </div>
    </div>
  )
}

export default Navbar