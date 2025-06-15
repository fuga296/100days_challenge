import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1, borderBottom: "1px solid rgb(180, 180, 180)", mb: 5 }}>
        <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff', color: 'black' }}>
          <Toolbar>
            <img src={logo} alt='logo' width={50} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 3 }}>
              Muder Mystery Manager
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header;