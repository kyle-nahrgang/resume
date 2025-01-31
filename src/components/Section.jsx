import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/joy";
import AddIcon from '@mui/icons-material/Add';

export function Section({title, children, ...params}) {
    return params.forPrint ?
    (
     <Box paddingBottom={3}>
        <Typography level='h4' textAlign='left' sx={{textTransform: 'uppercase'}}>{title}</Typography>
        <Divider sx={{ marginBottom: 2}}/>
        <Box marginLeft={3} marginRight={2}>
        { children }
        </Box>

     </Box>
    ) : (
        <Accordion defaultExpanded={true} >
            <AccordionSummary indicator={<AddIcon />} component={Typography} level="h1" margin={3}>{title}</AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
}