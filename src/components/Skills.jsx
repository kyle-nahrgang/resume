import { Box, Chip } from "@mui/joy";

export function Skills() {
    const skills = [
        "C",
        "C++",
        "ReactJS",
        "BuildRoot",
        "Python",
        "OOP",
        "Rust",
        "Embedded Systems",
        "Machine Learning",
        "Java",
        "Spring Boot",
        "MongoDB",
        "SQL",
        "Shell Scripting",
        "Linux",
        "Agile",
        "Git",
        "JIRA",
        "GCP",
        "Harness",
        "Dynatrace",
        "LucidChart",
        "Automation",
        "Docker",
        "Z-Wave",
        "BLE",
        "REST",
        "Device Drivers",
        "Software Architecture",
        "Leadership"
    ];
    return (
        <Box>
            {
                skills.map((skill) => (
                    <Chip onClick={function(){}} sx={{margin: 0.5}}>{skill}</Chip>
                ))
            }
        </Box>
    );
}