import { Grid, List, ListItem, Typography } from "@mui/joy";

export function DynamicColumnList({ items })  {
    if (!items) 
      return null;

    return (
      <Grid container>
        <List marker="circle"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on small screens
              sm: "repeat(2, 1fr)", // 2 columns on medium+ screens
            },
          }}
        >
          {items.map((item, index) => (
            <ListItem key={index}>
              <Typography textAlign="left" sx={{marginRight: 7}}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  };
