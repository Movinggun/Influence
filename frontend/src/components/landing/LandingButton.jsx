import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";


const LandingButton = ({ label, page}) => {
    return (
        <Box>
            <Button variant={"contained"} style={{background: 'linear-gradient(to right, #F9E9AD , #FACD7F)', paddingLeft: 30, paddingRight: 30,}} to={page}>
             {label}
            </Button>
        </Box>
    )
}

export default LandingButton
