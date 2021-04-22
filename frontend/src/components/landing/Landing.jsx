import Box from '@material-ui/core/Box';
import LandingButton from "./LandingButton";
import LandingTextField from "./LandingTextField";
import LandingChip from "./LandingChip";
import LandingCard from "./LandingCard";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import {Link as routerLink, useLocation} from "react-router-dom";
import './Landing.css'

const Landing = () => {
    return (
        <div>
              <Box className="Header">
                <Box display="flex" mt={2}>
                    <Box flexGrow={1}>
                        <img height="40" src="/images/Influence_Logo.png" alt="Influence Logo" />
                    </Box>
                    <Box mr={2}>
                    <Button style={{color: "white"}} >Sign In</Button>
                </Box>
                    <LandingButton label={"Join"} page={"/signup"}/>
                </Box>
                <Box mt={6}>
                    <Typography variant="h5" mt={2}><b>Your marketplace for influencers, <br /> brands, and service providers <br /> globally.</b></Typography>
                </Box>
                <Box mt={3}>
                    <LandingTextField label={"I'm looking for ..."}/>
                </Box>
                <Box mt={2}>
                    <Typography style={{fontSize: '15px', color: '#666E80'}}>Popular search queries:</Typography>
                    <Box style={{ display: 'flex'}}>
                        <LandingChip label={"Emote Artist"}/>
                        <LandingChip label={"Tax Service"}/>
                        <LandingChip label={"Overlay Artist"}/>
                        <LandingChip label={"Voice Over"}/>
                        <LandingChip label={"Branding"}/>
                        <LandingChip label={"Music Producer"}/>
                    </Box>
                </Box>
                <Box mt={3}>
                    <Typography>
                        <Link href="#"  style={{fontSize: '14px', color: '#BAC1D9',  textDecoration: 'underline'}}>
                            I want to provide a service or offer a brand deal
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Box mt={4} style={{ paddingLeft: '15%', paddingRight: '15%', color: 'white'}}>
                <Typography variant="h5" mt={2}><b>Trending Influencers</b></Typography> 
                <Box mt={2}>
                    <Grid container spacing={3}  direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12} lg>
                            <LandingCard title="Lirik" image="/images/lirik.png" verified={true} rating="4.8" level="5" type="Influencer" location="Watertown, MA" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="DansGaming" image="/images/dansgaming.png" verified={true} rating="4.7" level="4" type="Influencer" location="Seattle, WA" price="90" />
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="DansGaming" image="/images/dansgaming.png" verified={true}  rating="4.7" level="4" type="Influencer" location="Seattle, WA" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="DansGaming" image="/images/dansgaming.png" verified={true}  rating="4.7" level="4" type="Influencer" location="Seattle, WA" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="DansGaming" image="/images/dansgaming.png" verified={true} rating="4.7" level="4" type="Influencer" location="Seattle, WA" price="90"/>
                        </Grid>
                    </Grid>
                    <Typography style={{marginTop: 8}} >
                        <Link href="#"  style={{fontSize: '14px', color: 'white'}}>
                        Browse More
                        </Link>
                     </Typography>
                </Box>
            </Box>
            <Box mt={4} style={{ paddingLeft: '15%', paddingRight: '15%', color: 'white'}}>
                <Typography variant="h5" mt={2}><b>Trending Service Providers</b></Typography>
                <Box mt={2} mb={3}>
                    <Grid container spacing={3}  direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12} lg>
                            <LandingCard title="Julia" image="/images/julia.png" verified={true}  rating="4.9" level="4" type="Emote Artist" location="Milano, Italy" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="Lara Loft" image="/images/lara.png" verified={false} rating="4.4" level="3" type="Music Artist" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="Lara Loft" image="/images/lara.png" verified={false} rating="4.4" level="3" type="Music Artist" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="Lara Loft" image="/images/lara.png" verified={false} rating="4.4" level="3" type="Music Artist" price="90"/>
                        </Grid>
                        <Grid item xs={12} lg>
                            <LandingCard title="Lara Loft" image="/images/lara.png" verified={false} rating="4.4" level="3" type="Music Artist" price="90"/>
                        </Grid>
                    </Grid>
                    <Typography style={{marginTop: 8}} >
                        <Link href="#"  style={{fontSize: '14px', color: 'white'}}>
                        Browse More
                        </Link>
                    </Typography>
                </Box>
            <br />
            </Box>
        </div>
    )
}

export default Landing
