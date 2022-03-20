import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
mainMenu: {
   backgroundColor:'rgb(0, 51, 157)',
   padding:'10px',
   marginTop:'0px'
},
buttonItem: {
    color:'white',
    marginRight:'30px',
    cursor:'pointer'
}
})
export default function Header() {
const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(true);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlOpen =() => {
      setOpen(true);
  }

  return (
    <Box className={classes.mainMenu}>
      <Link href="/home" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} onClick={handlOpen}
      >
        HOME
      </Link>
      <Link href="/about" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} 
      >
        ABOUT US
      </Link>
      <Link href="" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} 
      >
        CONTACT US
      </Link>

      <Link href="" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} onClick={handleClick}
      >
        ALL PRODUCTS
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Computer</MenuItem>
        <MenuItem onClick={handleClose}>Phone</MenuItem>
        <MenuItem onClick={handleClose}>Watch</MenuItem>
      </Menu>
    </Box>
  );
}