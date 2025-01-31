import { Grid } from "@mui/joy";
import { InfoCard } from "./InfoCard";

export function InfoCardGrid({items, ...params}) {
    return (
        <Grid container spacing={2} margin="space-between" >
            {
                items.map((patent) => (
                    <Grid item xs={12} md={params.forPrint ? 12 : 6}>
                        <InfoCard info={patent} {...params} />
                    </Grid>
                ))
            }
        </Grid>
    )
}