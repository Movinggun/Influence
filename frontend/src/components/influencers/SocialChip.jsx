import Chip from '@material-ui/core/Chip';
import {Box} from "@material-ui/core";
const SocialChip = ( { label, onClick } ) => {
    return (
        <Box style={{pointerEvents: 'none'}} mr={1} mt={1} >
            <Chip
            label={label}
            name={label}
            onClick={onClick}
            style={{backgroundColor: '#474F61', color: '#BAC1D9',  borderRadius: 5, pointerEvents: 'auto', height: '25px', width: '25px;', fontSize: '11px'}}
            />
        </Box>
    )
}

export default SocialChip
