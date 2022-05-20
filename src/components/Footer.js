import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../theme";

const Footer = () =>{
    return(
        <Box sx={{
            backgroundColor:theme.palette.primary.main,
            width:'100%',
            position: 'absolute',
            marginTop: 'calc(5% + 60px)',
            bottom:0,
            display:'flex',
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center',
            height:'3rem'
        }}>
            <Typography color={'white'}  variant="title" align="center">
                Copyright 2022
            </Typography>
        </Box>
    );
}

export default Footer;