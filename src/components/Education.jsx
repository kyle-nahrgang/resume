import { Card, CardContent, Stack, Typography } from "@mui/joy";

export function Education() {
    const education = [
        {
            name: "Drexel University",
            location: "Philadelphia, PA",
            degree: "B.S. Computer Engineering",
            start: "Sep 2006",
            end: "Jun 2011"
        }
    ]
   
    return (
        <Stack>
            {
                education.map((school) => (
                    <Card>
                        <CardContent>
                            <Stack direction='row'>
                                <Typography level="h3">{school.name}</Typography>
                                <Typography level="title-lg" sx={{ marginLeft: "auto" }}>{school.location}</Typography>
                            </Stack>
                            <Stack direction='row'>
                                <Typography level="title-md">{school.degree}</Typography>
                                <Typography level="title-md"  sx={{ marginLeft: "auto" }}>
                                    {school.start} - {school.end ? school.end : "CURRENT"}
                                </Typography>
                            </Stack> 
                        </CardContent>
                    </Card>
                )) 
            }
            
        </Stack>
    )
}