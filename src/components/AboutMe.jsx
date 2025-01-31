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
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, CardActions, Grid, Link, Stack } from '@mui/joy';


function ContactButton({data, ...params}) {
    return (
        <IconButton component={Link} target='_blank' href={data.url} size="sm" variant="plain" color="neutral">
            {
                params.forPrint === true ? (
                    <Typography textAlign='right' marginLeft='auto' marginRight={2}> {data.url}</Typography>
                ) : null
            }
            {data.type === "github" && <GitHubIcon />}
            {data.type === "linkedin" && <LinkedInIcon />}
            {data.type === "email" && <EmailIcon />}
            {data.type === "website" && <LanguageIcon />}
            {data.type === "phone" && <LocalPhoneIcon />}
        </IconButton>
    );
}

export function AboutMe({ data , ...params}) {
    return params.forPrint === true ?
    (
        <Box>
            <Stack direction='row'>
                <Box textAlign='left'>
                    <Typography level="h1">{data.name}</Typography>
                    <Typography level="title-lg">{data.title}</Typography>
                    <Typography level="body-md">{data.location}</Typography>
                </Box>
                <Box marginLeft='auto'>
                    <Stack>
                    {
                        data.links.map((link) => (<ContactButton data={link} {...params} />))
                    }
                    <ContactButton data={{type: "email", url: `${data.email}`}} {...params}  />
                    <ContactButton data={{type: "phone", url: `${data.phone}`}} {...params}  />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    ) : (
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