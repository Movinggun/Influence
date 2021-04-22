import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";


const LandingCard = ({ title, image, rating, level, type, verified, location, price }) => {

    function IsVerified() {
        if (verified) {
            return(<img style={{paddingLeft: 5, verticalAlign: 'middle'}} src="/icons/icon-verified.svg" alt="Influence Verified"/>);
        }
    }

    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" alt={title} height="280" image={image}title={title}/>
                    <Box style={{position: 'absolute', width: '100%', height: '80px', background: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.8)', color: 'white', top:0}}>
                        <Box ml={1} mt={1}>
                            <Typography variant={"caption"}>Level {level} {type}</Typography>
                            <Box pr={1} style={{ float: "right"}}>
                                <Typography  variant={"caption"}>{rating}
                                    <img style={{width: 18, paddingLeft: 5}} src="/icons/icon-star.svg" alt="Novo Star Icon"/>
                                </Typography>
                            </Box>
                        </Box>
                        <Typography component="div">
                            <Box lineHeight={1} ml={1}>
                                <b>{title}</b>
                                {IsVerified()}
                            </Box>
                            <Box  fontSize={12} lineHeight={1.2} ml={1}>
                                {location}
                            </Box>
                        </Typography>
                    </Box>
                    <Box style={{position: 'absolute', width: '100%', height: '80px', background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8)', color: 'white', bottom:0}}>
                        <Typography component="div" varient={"caption"} style={{position:"absolute", bottom:0 ,right:0, color: 'white'}}>
                            <Box fontSize={12} lineHeight={1.2} m={1}>
                                Starting at ${price}/hr
                            </Box>      
                        </Typography>
                    </Box>
            </CardActionArea>
    </Card>
    )
}

export default LandingCard
