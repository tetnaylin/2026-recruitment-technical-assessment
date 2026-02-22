import Stack from '@mui/material/Stack';
import SearchIcon from "@mui/icons-material/Search";
import SortBar from './SortBar';
import FilterBar from './FilterBar';
import { InputAdornment, TextField } from '@mui/material';

function SearchBar() {
    return (
        <Stack 
            spacing={"15%"} 
            direction={"row"} 
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px"
            }}
        >
            
            <FilterBar/>
        
            <Stack 
                direction={"row"} 
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <TextField 
                    placeholder= "Search for a building..."
                    fullWidth
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ 
                        borderRadius: 1, 
                        border: '1px solid', 
                        borderColor: '#c4c4c4',
                        
                    }}
                >
                </TextField>
            </Stack>

            <SortBar/>

        </Stack>
    );
}

export default SearchBar;