import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/joy";
import AddIcon from '@mui/icons-material/Add';

export function Section({title, children}) {
    return (
        <Accordion defaultExpanded={true}>
            <AccordionSummary indicator={<AddIcon />} component={Typography} level="h1" margin={3}>{title}</AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
}