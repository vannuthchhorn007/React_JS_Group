import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
mainMenu: {
   backgroundColor:'rgb(0, 51, 157)',
   padding:'10px',
   marginTop:'0px',
},
buttonItem: {
    color:'white',
    marginRight:'30px',
    cursor:'pointer'
}
}) 
function Computer() {
const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
 function Computer({open}){
    return(
        <Box open={open}>
            Hello World
        </Box>
    );
}
}
export default Computer;
