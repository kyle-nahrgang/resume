import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent,  Chip,   Stack, Typography } from "@mui/joy";
import { DynamicColumnList } from "./DynamicColumnList";



function Title({title}) {
    return (     
        <Card sx={{marginTop: 3}}>
            <CardContent>
                <Stack direction="row">
                    <Typography level="title-md">{title.role}</Typography>
                    <Typography level="title-md"  sx={{ marginLeft: "auto" }}>
                        {title.start} - {title.end ? title.end : "CURRENT"}
                    </Typography>
                </Stack>
                
                <DynamicColumnList items={title.responsibility} />              
            </CardContent>
        </Card>
        
    )
}


function Company({company}) {
    return (     
        <Accordion defaultExpanded={true} sx={{paddingTop: 2}}>
            <AccordionSummary>
                <Stack direction="row" width={"100%"}>
                    <Typography level="h3">{company.name}</Typography>
                    <Typography level="title-lg" sx={{ marginLeft: "auto" }}>{company.location}</Typography>
                    {
                        company.remote ? <Chip sx={{marginLeft: 2}} variant="outlined">REMOTE</Chip> : null
                    }
                </Stack>
            </AccordionSummary>
        
            <AccordionDetails>
                {
                    company.titles.map((title) => (<Title title={title} />))
                }
                
                <Box sx={{paddingTop: 2, paddingBottom: 2}}>
                    {
                        company.tags ? 
                        company.tags.map((tag) => (<Chip sx={{margin:1}} variant="solid" onClick={function(){}}>{tag}</Chip>))
                        : null
                    }
                </Box>
            </AccordionDetails>
        </Accordion>
        
    )
}


export function Experience({data}) {
    return (
        <Box>
            {
                data.map((company) => (<Company company={company} />))
            }
        </Box>
    )
}