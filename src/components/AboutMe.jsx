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

export function AboutMe() {
    const data = {
        name: "Kyle Nahrgang",
        title: "Software Technologist",
        location: "Collegeville, PA",
        about: "I am a seasoned software engineer with extensive experience in designing, implementing, and documenting architectural solutions that require cross-team collaboration. My career includes a strong focus on technical engineering, where I have developed a passion for creating robust software solutions. I have a proven track record of building highly functional teams that deliver complex features, backed by a deep understanding of embedded software design and a commitment to engineering excellence.",
        email: "career@kyle.nahrgang.dev",
        phone: "610.304.0538",
        links: [
            {
                type: "github",
                url: "https://github.com/kylenahrgang"
            },
            {
                type: "linkedin",
                url: "https://www.linkedin.com/in/kyle-nahrgang/"
            },
            {
                type: "website",
                url: "https://nahrgang.dev/"
            },
        ]
    }
    return (
        <Card sx={{ boxShadow: 'lg' }}>
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar variant="circle" src="profile.jpg" sx={{ '--Avatar-size': '8rem' }} />

                <Typography level="h1">{data.name}</Typography>
                <Typography level="title-lg">{data.title}</Typography>
                <Typography level="body-md">{data.location}</Typography>
                <Divider />
                <Typography level='body-sm'  sx={{ fontStyle: "italic" }}>
                    {data.about}
                </Typography>
            </CardContent>
            <CardActions buttonFlex="0 1 120px" sx={{ justifyContent: 'center'}}>
                {
                    data.links.map((link) => (<ContactButton data={link} />))
                }
                <ContactButton data={{type: "email", url: `mailto:${data.email}`}} />
            </CardActions>
        </Card>
    );
}