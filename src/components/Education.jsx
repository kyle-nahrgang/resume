import { Box, Card,  Stack, Typography } from "@mui/joy";

export function Education({ data, ...params }) {
    const SchoolWrapper = params.forPrint ? Box : Card;

    const schoolNameSize = params.forPrint ? "title-md" : "h3";
    const schoolLocationeSize = params.forPrint ? "title-md" : "title-lg";
    const degreeDetailsSize = params.forPrint ? "title-sm" : "title-md";

    return  (
        <Stack>
            {
                data.map((school) => (
                    <SchoolWrapper>
                            <Stack direction='row'>
                                <Typography level={schoolNameSize}>{school.name}</Typography>
                                <Typography level={schoolLocationeSize} sx={{ marginLeft: "auto" }}>{school.location}</Typography>
                            </Stack>
                            <Stack direction='row'>
                                <Typography level={degreeDetailsSize}>{school.degree}</Typography>
                                <Typography level={degreeDetailsSize} sx={{ marginLeft: "auto" }}>
                                    {school.start} - {school.end ? school.end : "CURRENT"}
                                </Typography>
                            </Stack>
                    </SchoolWrapper>
                ))
            }

        </Stack>
    )
}