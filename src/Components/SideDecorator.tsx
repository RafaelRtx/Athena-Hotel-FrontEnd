import { Box, CssBaseline, Typography } from "@mui/material"

interface SideDecoratorProps {
  height: string
  bgColor: string
}

const SideDecorator = ({height, bgColor}: SideDecoratorProps) =>{
  return(
    <Box component='div' sx={{height:height, padding:'0px 8px', backgroundColor:bgColor, width:90, alignContent:'center'}}>
      <img src="src/Assets/okinawa-text.png"/>
    </Box>
  )
}

export default SideDecorator