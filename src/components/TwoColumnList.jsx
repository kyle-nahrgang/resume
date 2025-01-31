import { Box, Typography } from "@mui/joy";

export function TwoColumnList({ items })  {
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
