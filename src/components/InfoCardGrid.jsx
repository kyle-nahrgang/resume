import { Grid } from "@mui/joy";
import { InfoCard } from "./InfoCard";

export function InfoCardGrid({items}) {
    return (
        <Grid container spacing={2} margin="space-between" >
            {
                items.map((patent) => (
                    <Grid item xs={12} md={6}>
                        <InfoCard info={patent} />
                    </Grid>
                ))
            }
        </Grid>
    )
}