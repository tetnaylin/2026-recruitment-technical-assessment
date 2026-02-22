import { Stack } from '@mui/material';
import Header from '../components/Header'
import SearchBar from '../components/SearchBar';
import Agsm from '../components/cards/Agsm';
import Ainsworth from '../components/cards/Ainsworth';
import Anitab from '../components/cards/Anitab';
import BiologicalScience from '../components/cards/BioSci';
import BiologicalScienceWest from '../components/cards/BioSciWest';
import Blockhouse from '../components/cards/Blockhouse';
import BusinessSchool from '../components/cards/BusinessSchool';
import CivilBuilding from '../components/cards/CivilBuilding';
import Colombo from '../components/cards/Colombo';
import CseBuilding from '../components/cards/CseBuilding';
import CardPadding from '../components/CardPadding';

function HomePage() {
    return (
        <div >
            {/* <h1>Home Page :3</h1> */}
            <Header/>
            <SearchBar/>

            <Stack 
                direction={"row"} 
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "98%",
                    marginLeft: 3.5,
                    marginRight: 3.5,
                }}
            >
                <Agsm/>
                <Ainsworth/>
                <Anitab/>
                <BiologicalScience/>
            </Stack>

            <Stack 
                direction={"row"} 
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "98%",
                    marginLeft: 3.5,
                    marginRight: 3.5,
                    marginTop: 3.5,
                }}
            >
                <BiologicalScienceWest/>
                <Blockhouse/>
                <BusinessSchool/>
                <CivilBuilding/>
            </Stack>
            
            <Stack 
                direction={"row"} 
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "98%",
                    marginLeft: 3.5,
                    marginRight: 3.5,
                    marginTop: 3.5,
                    marginBottom: 3.5
                }}
            >
                <Colombo/>
                <CseBuilding/>
                <CardPadding/>
                <CardPadding/>
            </Stack>
        </div>
    );
}

export default HomePage;