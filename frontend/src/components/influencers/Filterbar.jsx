import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import CustomCheckBox from '../layout/CustomCheckBox'
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';

const Filterbar = ({  }) => {


    return (
        <Card style={{backgroundColor: '#13151D', height: '50%', marginLeft: '50px', marginTop: '25px'}}>
            <CardContent> 
            <Typography style={{color: '#FFFFFF'}}>
                Search by Name
            </Typography>  
            <Input name="email" placeholder="Name"  style={{width: '100%' , margin: 0, marginBottom: 1, marginTop: 5, paddingLeft: 10, paddingTop: 2, paddingBottom: 2, backgroundColor: '#181C24', borderRadius: 3, color: '#BAC1D9',  border: '1px solid #666E80'}} 
            startAdornment={
                <InputAdornment position="start">
                    <Box style={{marginTop: '5px'}}>
                        <img src="/icons/icon-search.svg" style={{height:'16px'}} alt="Influence Search Icon"/>
                    </Box>
                </InputAdornment>
            }/>
            <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
            <Typography style={{color: '#FFFFFF'}}>
                Rating
            </Typography>  
            <Box mt={1}>
            <Button variant={"contained"} style={{background: 'linear-gradient(to right, #F9E9AD , #FACD7F)', minWidth: 0, width: '35px', height: '33px', marginRight: '8px' }} >All </Button>
            <Button variant={"contained"} style={{backgroundColor: '#666E80', color:'white', minWidth: 0, width: '35px',  height: '35px',marginRight: '8px' }} >2+ </Button>
            <Button variant={"contained"} style={{backgroundColor: '#666E80', color:'white', minWidth: 0, width: '35px', height: '35px', marginRight: '8px' }} >3+ </Button>
            <Button variant={"contained"} style={{backgroundColor: '#666E80', color:'white', minWidth: 0, width: '35px' , height: '35px', marginRight: '8px'}} >4+ </Button>
            <Button variant={"contained"} style={{backgroundColor: '#666E80', color:'white', minWidth: 0, width: '35px',  height: '35px', marginRight: '8px' }} >5 </Button>
            </Box>
            <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
            <Typography style={{color: '#FFFFFF'}}>
                Social Media
            </Typography> 
            <Box mt={1}>
                <CustomCheckBox label='Twitch'/>
                <CustomCheckBox label='Twitter'/>
                <CustomCheckBox label='Instagram'/>
                <CustomCheckBox label='YouTube'/>
                <CustomCheckBox label='Snapchat'/>
                <CustomCheckBox label='Tiktok'/>
            </Box> 
            <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
            <Typography style={{color: '#FFFFFF'}}>
                Verified
            </Typography>  
            <Box mt={1}>
                <CustomCheckBox label='Only Show Verified Influencers'/>
            </Box> 
            <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
            </CardContent>
        </Card>
    )
}

export default Filterbar
