import { createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Typography } from '@mui/material';

// Freeroom themed colours
const white = '#FFF';
const orange = '#e17027';

const theme = createTheme({
    palette: {
      primary: { main: white },
      secondary: { main: orange },
    },
});

function SortBar() {
    return (
        <IconButton 
            sx={{ 
                borderRadius: 2, 
                border: '2px solid', 
                borderColor: theme.palette.secondary.main ,
                width: '150px'
            }}
        >
            <FilterListIcon sx={{ color: theme.palette.secondary.main, marginRight: "10px"}}/>
            <Typography 
                variant="h6" 
                component="div" 
                fontWeight={700}
                fontFamily={""}
                fontSize={"1rem"}
                sx={{ color: theme.palette.secondary.main}}
            >
                Sort
            </Typography>                       
        </IconButton>
    );
}

export default SortBar;