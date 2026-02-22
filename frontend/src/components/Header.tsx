import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import GridIcon from "@mui/icons-material/GridViewRounded";
import MapIcon from "@mui/icons-material/Map";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SearchIcon from "@mui/icons-material/Search";
import FreeRoomsLogo from '../assets/freeRoomsLogo.png';
import FreeRoomLogoDoorClosed from '../assets/freeroomsDoorClosed.png'
import { useState } from 'react';

// Freeroom themed colours
const white = '#FFF';
const orange = '#e17027';

const theme = createTheme({
    palette: {
      primary: { main: white },
      secondary: { main: orange },
    },
});

function Header() {
    const [ clicked, setClicked ] = useState(false);
    const [ link, setLink ] = useState(FreeRoomsLogo);

    const getClick = () => {
        if (!clicked) {
            setLink(FreeRoomLogoDoorClosed);
            setClicked(true);
        } else {
            setLink(FreeRoomsLogo);
            setClicked(false);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar 
                position="static"
                // Get rid of box shadow
                elevation={0}
                sx={{
                    borderBottom: `1px solid`,
                    borderColor: '#e0e0e0',
                }}
            >
                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ borderRadius: 0 }}
                        // Open or close door
                        onClick={getClick}
                    >
                        <img src={link} alt="Logo" height={50} />
                        <Typography 
                            variant="h5" 
                            component="div" 
                            color="secondary" 
                            fontWeight={700}
                            fontFamily={""}
                            fontSize={"2rem"}
                        >
                            Freerooms
                        </Typography>
                    </IconButton>
                    
                    <Stack 
                        spacing={"10%"} 
                        direction={"row"} 
                        sx={{ 
                            marginLeft: "auto", 
                            marginRight: "3em",
                        }}
                    >   
                        {/* Search Icon */}
                        <IconButton 
                            sx={{ 
                                borderRadius: 1, 
                                border: '1px solid', 
                                borderColor: theme.palette.secondary.main 
                            }}
                        >
                            <SearchIcon sx={{ color: theme.palette.secondary.main}}/>
                        </IconButton>
                        
                        {/* GridIcon */}
                        <IconButton 
                            sx={{ 
                                borderRadius: 1, 
                                border: '1px solid', 
                                borderColor: theme.palette.secondary.main, 
                                backgroundColor: theme.palette.secondary.main, 
                                '&:hover': {
                                    backgroundColor: theme.palette.secondary.main
                                }
                            }}
                        >
                            <GridIcon sx={{ color: theme.palette.primary.main}}/>
                        </IconButton>
                        
                        {/* MapIcon */}
                        <IconButton 
                            sx={{ 
                                borderRadius: 1, 
                                border: '1px solid', 
                                borderColor: theme.palette.secondary.main 
                            }}
                        >
                            <MapIcon sx={{ color: theme.palette.secondary.main}}/>                        
                        </IconButton>
                        
                        {/* MoonIcon */}
                        <IconButton 
                            sx={{ 
                                borderRadius: 1, 
                                border: '1px solid', 
                                borderColor: theme.palette.secondary.main 
                            }}
                        >
                            <BedtimeIcon sx={{ color: theme.palette.secondary.main}}/>
                        </IconButton>

                    </Stack>

                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}  

export default Header;