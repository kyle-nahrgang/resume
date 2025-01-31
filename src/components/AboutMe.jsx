import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { CardActions, Grid, Link } from '@mui/joy';


function ContactButton({data}) {
    return (
        <IconButton component={Link} target='_blank' href={data.url} size="sm" variant="plain" color="neutral">
            {data.type === "github" && <GitHubIcon />}
            {data.type === "linkedin" && <LinkedInIcon />}
            {data.type === "email" && <EmailIcon />}
            {data.type === "website" && <LanguageIcon />}
        </IconButton>
    );
}

export function AboutMe({ data }) {
    return (
        <Grid container spacing={2}>
            <Grid item sm={4} margin='auto'>
                <Card sx={{ boxShadow: 'lg', margin: 'auto' }}>
                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                        <Avatar variant="circle" src="profile.jpg" sx={{ '--Avatar-size': '8rem', margin: 'auto' }} />
                        <Typography level="h1">{data.name}</Typography>
                        <Typography level="title-lg">{data.title}</Typography>
                        <Typography level="body-md">{data.location}</Typography>
                    </CardContent>
                    <CardActions buttonFlex="0 1 120px" sx={{ justifyContent: 'center'}}>
                        {
                            data.links.map((link) => (<ContactButton data={link} />))
                        }
                        <ContactButton data={{type: "email", url: `mailto:${data.email}`}} />
                    </CardActions>
                </Card>   
            </Grid>  
            <Grid item sm={8} sx={{margin: 'auto'}}>
                <Typography level='body-md' sx={{ fontStyle: "italic" }}>
                    {data.about}
                </Typography>
            </Grid>
        </Grid>
    );
}