import { Box, Card, CardContent, CardOverflow, Chip, Divider, IconButton, Link, List, Stack, Typography } from "@mui/joy";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const TwoColumnList = ({ items }) => {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // Two equal columns
        }}
      >
        {items.map((item, index) => (
          <Typography key={index} level="body-sm" textAlign="left" sx={{ marginLeft: 3}}>
            ● {item}
          </Typography>
        ))}
      </Box>
    );
  };

function Project({project}) {
    return (     
        <Card>
            <CardContent>
                <Typography level="title-md" textAlign="left">{project.name}</Typography>
                <List>

                </List>
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
                    <Divider sx={{ marginLeft: "auto" }} orientation="vertical" />
                    <IconButton sx={{marginLeft: 2}} component={Link} target='_blank' href={project.url} size="sm" variant="plain" color="neutral"><ExitToAppIcon /></IconButton>
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

    ]

    return (
        <Box>
            {
                data.map((project) => (<Project project={project} />))
            }
        </Box>        
    )
}