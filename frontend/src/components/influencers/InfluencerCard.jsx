import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import SocialChip from './SocialChip'
import Button from "@material-ui/core/Button";

const InfluencerCard = ({ displayName, level, verified, description, rating, price, socials }) => {


    return (
        <Card style={{backgroundColor: '#13151D', height: '100%'}}>
            <CardMedia component="img" alt="Influencer Image" height="169" image="/images/waffle.svg" title=""/>
            <CardContent style={{paddingBottom: '10px'}}>
            <Box style={{ float: "right"}}>
                <Typography style={{fontSize: '14px'}}> {rating}.0
                    <img style={{width: 18, paddingLeft: 5}} src="/icons/icon-star.svg" alt="Novo Star Icon"/>
              </Typography>
            </Box>

            <Box style={{ float: "left"}}>
                <img style={{ borderRadius:'50%', width:'40px', height:'40px', marginRight:'10px', textAlign: 'center'}} src="/images/waffle_avatar.svg" alt=""/>
                <Typography style={{float: "right", fontSize: '18px', lineHeight: '1.0'}}><b>{displayName}</b>
                    {verified && <img style={{width: 12, paddingLeft: 5}} src="/icons/icon-verified.svg" alt="Verified User"/>}
                    <br /> <span style={{color: '#F9E7AA', fontSize: '13px', lineHeight: '1.0'}}>Level {level} Influencer</span>
                </Typography>
                <br />
                <Box style={{display: 'flex'}}>
                {socials.map(i => (
                    <SocialChip label={i}  />
                    ))}
                </Box>
            </Box>
            <br /> <br /> <br /> <br />
            <Box  style={{ float: "left"}}>
                <Typography style={{ color: '#BAC1D9', fontSize: '14px', marginTop: '10px'}}>
                     {description}
                </Typography>
            </Box>
            <br/><br /> <br />
            <Box>
                <Typography style={{float: "right", color: '#BAC1D9', fontSize: '14px', marginTop: '10px'}}>
                    Starting at {price}/hr
                </Typography>
            </Box>
            <Button variant={"contained"} style={{background: 'linear-gradient(to right, #F9E9AD , #FACD7F)', width: '100%'}} >Message </Button>
       
            </CardContent>
        </Card>
    )
}

export default InfluencerCard
