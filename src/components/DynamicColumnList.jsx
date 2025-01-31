import { Grid, List, ListItem, Typography } from "@mui/joy";

export function DynamicColumnList({ items, ...params})  {
    if (!items)
      return null;

    const columnDef = params.singleColumn === true ? null : {
      xs: "1fr", // 1 column on small screens
      sm: "repeat(2, 1fr)", // 2 columns on medium+ screens
    }


    return (
      <Grid container>
        <List marker="circle" size="sm"
          sx={{
            display: "grid",
            gridTemplateColumns: columnDef,
          }}
        >
          {items.map((item, index) => (
            <ListItem key={index} >
              <Typography textAlign="left" sx={{marginRight: 7}} >
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  };
