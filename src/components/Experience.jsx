import { Accordion, AccordionDetails, AccordionSummary, Box, Card,  Chip,   Divider,   Stack, Typography } from "@mui/joy";
import { DynamicColumnList } from "./DynamicColumnList";



function Title({title, ...params}) {
    return params.forPrint ? (
        <Box sx={{marginTop: 3}}>
            <Stack direction="row" marginBottom={1} >
                <Typography level="title-sm">{title.role}</Typography>
                <Typography level="title-sm"  sx={{ marginLeft: "auto" }}>
                    {title.start} - {title.end ? title.end : "CURRENT"}
                </Typography>
            </Stack>
            <DynamicColumnList items={title.responsibility} {...params} singleColumn={true} />
        </Box>
    ) : (
        <Card sx={{marginTop: 3}}>
                <Stack direction="row">
                    <Typography level="title-md">{title.role}</Typography>
                    <Typography level="title-md"  sx={{ marginLeft: "auto" }}>
                        {title.start} - {title.end ? title.end : "CURRENT"}
                    </Typography>
                </Stack>

                <DynamicColumnList items={title.responsibility} />
        </Card>

    )
}


function Company({company, ...params}) {

    return params.forPrint ?
    (
     <Box paddingBottom={3}>
        <Stack direction="row" width={"100%"}>
            <Typography level="title-md">{company.name}</Typography>
            <Typography level="title-md" sx={{ marginLeft: "auto" }}>{company.location}</Typography>
            {
                company.remote ? <Chip sx={{marginLeft: 2}} variant="outlined">REMOTE</Chip> : null
            }
        </Stack>
        <Divider sx={{marginTop: 1, marginBottom: 2}}/>
        {
            company.titles.map((title) => (<Title title={title} {...params} />))
        }
     </Box>
    ) : (
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
                    company.titles.map((title) => (<Title title={title} {...params} />))
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


export function Experience({data, ...params}) {
    return (
        <Box>
            {
                data.map((company) => (<Company company={company} {...params} />))
            }
        </Box>
    )
}