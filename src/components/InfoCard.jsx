import { Box, Card, CardContent, CardOverflow, Chip, IconButton, Link, Stack, Typography } from "@mui/joy";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { DynamicColumnList } from "./DynamicColumnList";


export function InfoCard({info, ...params}) {
    return (
        <Box height="100%" display='grid' flexDirection='column'>
        <Card sx={{marginBottom: 1}} variant={params.forPrint ? "plain" : "soft" }>
            <CardContent>
                <Typography level="title-md" textAlign="left" sx={{textTransform: 'uppercase', whiteSpace: "normal", wordBreak: "break-word", overflow: "visible"}}>{info.title}</Typography>
                <Typography level="body-sm" textAlign="left" sx={{fontStyle:'italic', marginLeft: 'auto', marginRight: 1, textTransform: 'uppercase'}}>{info.subtitle}</Typography>
                <DynamicColumnList items={info.bullets} />
                {
                    params.excludeInfoCardDescription === true ? null : (<Typography textAlign="left" level="body-sm">{info.description}</Typography>)
                }
            </CardContent>
            {
                params.forPrint === true ? null : (
                    <CardOverflow
                        variant="soft"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                            py: 1,
                        }}
                    >
                        <Stack direction="row" alignItems="center" width="100%">
                            <Box>
                                {
                                    info.tags.map((tag) => (<Chip sx={{margin:1}} variant="solid" onClick={function(){}}>{tag}</Chip>))
                                }

                            </Box>
                            {
                                info.url ? (
                                    <IconButton sx={{marginLeft: "auto"}} component={Link} target='_blank' href={info.url} size="sm" variant="plain" color="neutral">
                                        <ExitToAppIcon />
                                    </IconButton>
                                ) : null
                            }
                        </Stack>
                    </CardOverflow>
            )}
        </Card>
        </Box>

    )
}