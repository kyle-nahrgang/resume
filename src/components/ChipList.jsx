import { Box, Chip } from "@mui/joy";

export function ChipList({data}) {
    return (
        <Box>
            {
                data.map((chip) => (
                    <Chip onClick={function(){}} sx={{margin: 0.5}}>{chip}</Chip>
                ))
            }
        </Box>
    );
}