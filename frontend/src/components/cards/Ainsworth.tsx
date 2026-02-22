import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CircleIcon from '@mui/icons-material/Circle';
import CardCover from '@mui/joy/CardCover';
import StarIcon from '@mui/icons-material/Star';

import AinsworthImg from '../../assets/ainsworth.webp';

// Freeroom themed colours
const white = '#FFF';
const orange = '#e17027';

const theme = createTheme({
    palette: {
      primary: { main: white },
      secondary: { main: orange },
    },
});

function Ainsworth() {
  return (
    <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 340, width: "100%" }} elevation={0}>
            <CardActionArea 
                sx={{ 
                    minHeight: '345px', 
                    width: 315, 
                    borderRadius: 3, 
                    overflow: 'hidden' 
                }} >
                <CardCover>
                    <img  src={AinsworthImg} alt="Ainsworth"/>
                </CardCover>
                <Fab 
                    variant="extended" 
                    size="small" 
                    sx={{ 
                        backgroundColor: theme.palette.primary.main, 
                        borderRadius: 3, 
                        fontWeight: 700,
                        fontSize: 12, 
                        textTransform: 'lowercase',
                        position: 'absolute',
                        top: 15,
                        right: 15, 
                        height: 35
                    }} >
                    <CircleIcon sx={{ mr: 1, height: "12px", color: "#61af4f" }} />
                    16 rooms available
                </Fab>
                <Fab 
                    variant="extended" 
                    size="small" 
                    sx={{ 
                        backgroundColor: theme.palette.secondary.main, 
                        borderRadius: 2, 
                        position: 'absolute',
                        bottom: 15,
                        height: 45,
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "95%",
                        paddingLeft: 3,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.main
                        },
                        // Center the floating action bar
                        left: "50%",
                        transform: "translateX(-50%)",
                    }} >
                    <Typography 
                        sx={{
                            fontWeight: 700,
                            fontSize: 13, 
                            color: 'white',
                            textTransform: 'none',
                        }}
                    >
                        Ainsworth Building
                    </Typography>
                    <Box 
                        sx={{ 
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography 
                            sx={{
                                fontWeight: 700,
                                fontSize: 13, 
                                color: 'white',
                                textTransform: 'none',
                            }}
                        >
                            4.4
                        </Typography>
                        <StarIcon sx={{ paddingRight: 3, color: "#f3a916" }}/>  
                    </Box>
                </Fab>
            </CardActionArea>
        </Card>
    </ThemeProvider>
  );
}

export default Ainsworth;
