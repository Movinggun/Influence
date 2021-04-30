import React from 'react'
import Grid from '@material-ui/core/Grid';
import ProfileCard from './ProfileCard'
import ProfileEditCard from './ProfileEditCard'

const Profile = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid style={{height: '100%'}} item xs={3}>
                    <ProfileCard />
                </Grid>
                <Grid item xs={9}>
                    <ProfileEditCard />
                </Grid>

            </Grid>
        </div>
    )
}

export default Profile