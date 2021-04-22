import Chip from '@material-ui/core/Chip';
import {Box} from "@material-ui/core";
const LandingChip = ( {label} ) => {
    return (
        <Box mr={1} mt={1}>
            <Chip
            label={label}
            style={{backgroundColor: '#474F61', color: '#BAC1D9',  borderRadius: 5}} 
            />
        </Box>
    )
}

export default LandingChip
