import { Box, Card, CardContent, CardOverflow, Chip, IconButton, Link, Stack, Typography } from "@mui/joy";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { TwoColumnList } from "./TwoColumnList";


function Project({project}) {
    return (     
        <Card sx={{marginBottom: 3}}>
            <CardContent>
                <Typography level="title-md" textAlign="left">{project.name}</Typography>
                <TwoColumnList items={project.bullet_points} />              
            </CardContent>
            <CardOverflow
                variant="soft"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                    py: 1,
                }}
            > 
                <Stack direction="row" alignItems="center" width="100%">
                    <Box>
                        {
                            project.tags.map((tag) => (<Chip sx={{margin:1}} variant="solid" onClick={function(){}}>{tag}</Chip>))
                        }
                        
                    </Box>
                    {
                        project.url ? (
                            <IconButton sx={{marginLeft: "auto"}} component={Link} target='_blank' href={project.url} size="sm" variant="plain" color="neutral">
                                <ExitToAppIcon />
                            </IconButton>
                        ) : null
                    }
                </Stack>
            </CardOverflow>
        </Card>
        
    )
}

export function Projects() {
    const data = [
        {
            name: "FULL-STACK BILLIARD LEAGUE HANDICAP PREDICTION APP",
            bullet_points: [
                "React Frontend",
                "Rust / Actix-web REST API",
                "Auth0 JWT authentication",
                "MongoDB (Atlas) backed database",
                "Reverse-engineered GraphQL API to scrape league data",
                "Docker container running nginx hosted by GCP cloud-run instance",
                "Custom machine learning models for handicap prediction using Rust (burn)"
            ],
            tags: [
                "React",
                "Rust",
                "REST API",
                "MongoDB",
                "GraphQL",
                "GCP",
                "Auth0"
            ],
            url: "https://apa.nahrgang.dev"
        },
        {
            name: "REACT RESUME TEMPLATE",
            bullet_points: [
                "Joy-UI Components",
                "Driven by JSON Data",
            ],
            tags: [
                "React",
                "Joy-UI",
            ],
            url: "https://github.com/kyle-nahrgang/resume"
        },
    ]

    return (
        <Box>
            {
                data.map((project) => (<Project project={project} />))
            }
        </Box>        
    )
}