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
import {  CardActions, Divider, Link } from '@mui/joy';


export function AboutMe() {
    return (
        <Card sx={{ boxShadow: 'lg' }}>
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar variant="circle" src="profile.jpg" sx={{ '--Avatar-size': '8rem' }} />

                <Typography level="h1">Kyle Nahrgang</Typography>
                <Typography level="title-lg">Software Technologist</Typography>
                <Typography level="body-md">Collegeville, PA</Typography>
                <Divider />
                <Typography level='body-sm'  sx={{ fontStyle: "italic" }}>
                I am a seasoned software engineer with extensive experience in designing, implementing, and documenting architectural solutions that require cross-team collaboration. My career includes a strong focus on technical engineering, where I have developed a passion for creating robust software solutions. I have a proven track record of building highly functional teams that deliver complex features, backed by a deep understanding of embedded software design and a commitment to engineering excellence.
                </Typography>
            </CardContent>
            <CardActions buttonFlex="0 1 120px" sx={{ justifyContent: 'center'}}>
                <IconButton component={Link} target='_blank' href="https://github.com/kylenahrgang" size="sm" variant="plain" color="neutral"><GitHubIcon /></IconButton>
                <IconButton component={Link} target='_blank' href="https://www.linkedin.com/in/kyle-nahrgang/" size="sm" variant="plain" color="neutral"><LinkedInIcon /></IconButton>
                <IconButton component={Link} target='_blank' href="mailto:career@kyle.nahrgang.dev" size="sm" variant="plain" color="neutral"><EmailIcon /></IconButton>
                <IconButton component={Link} target='_blank' href="https://nahrgang.dev" size="sm" variant="plain" color="neutral"><LanguageIcon /></IconButton>
            </CardActions>
        </Card>
    );
}