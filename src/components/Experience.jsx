import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardOverflow, Chip,  Sheet,  Stack, Typography } from "@mui/joy";
import { TwoColumnList } from "./TwoColumnList";



function Title({title}) {
    return (     
        <Card sx={{marginTop: 3}}>
            <CardContent>
                <Stack direction="row">
                    <Typography level="title-md">{title.role}</Typography>
                    <Typography level="title-md"  sx={{ marginLeft: "auto" }}>
                        {title.start} - {title.end ? title.end : "CURRENT"}
                    </Typography>
                </Stack>
                
                <TwoColumnList items={title.responsibility} />              
            </CardContent>
        </Card>
        
    )
}


function Company({company}) {
    return (     
        <Accordion defaultExpanded={true} sx={{paddingTop: 2}}>
            <AccordionSummary>
                <Stack direction="row" width={"100%"}>
                    <Typography level="h3">{company.name}</Typography>
                    <Typography level="title-lg" sx={{ marginLeft: "auto" }}>{company.location}</Typography>
                    {
                        company.remote ? <Chip sx={{marginLeft: 2}} variant="outlined">REMOTE</Chip> : null
                    }
                </Stack>
            </AccordionSummary>
        
            <AccordionDetails>
                {
                    company.titles.map((title) => (<Title title={title} />))
                }
                
                <Box sx={{paddingTop: 2, paddingBottom: 2}}>
                    {
                        company.tags ? 
                        company.tags.map((tag) => (<Chip sx={{margin:1}} variant="solid" onClick={function(){}}>{tag}</Chip>))
                        : null
                    }
                </Box>
            </AccordionDetails>
        </Accordion>
        
    )
}


export function Experience() {
    const data = [
        {
            name: "XYPRO",
            location: "Simi Valley, CA",
            remote: true,
            titles: [
                {
                    role: "Software Engineer III",
                    start: "Oct 2024",
                    responsibility: [
                        "Contribute to and support legacy applications built for HPE NonStop",
                        "Improve build systems"
                    ]
                }
            ]
        },
        {
            name: "ADT",
            location: "Blue Bell, PA",
            remote: true,
            tags: [
                "Software Architecture", "C++", "GCP", "Secure Boot", "Home Automation", 
            ],
            titles: [
                {
                    role: "Principal Software Engineer",
                    start: "Feb 2024",
                    end: "Oct 2024",
                    responsibility: [
                        "Design and document architectural solutions for implementing complicated features that cross multiple engineering team",
                        "Present in-depth analysis of problems and solutions to executive and engineering audiences",
                        "Design enterprise-level architecture solutions",
                        "Research solutions and make recommendations for complex engineering problems",
                        "Implement processes to streamline architecture intake and output",
                        "Coordinate design across several functional components and teams",
                        "Negotiate feature requirements with stakeholders",
                    ]
                },
                {
                    role: "Senior Software Engineer II - Embedded",
                    start: "Sep 2021",
                    end: "Feb 2024",
                    responsibility: [
                        "Lead a team developing the next generation home security product using using a proprietary ARM based embedded Linux environment that conforms to security industry standards (SIA PC-01, UL985, UL1023))",
                        "Organize several team members to implement design while driving best practices for development, testing, and deployment",
                        "Maintain build artifacts and records in GCP (Google Cloud Storage, Spanner)",
                        "Support production issues leveraging custom logging in Dynatrace and Splunk",
                        "Drive coordination between development teams for multiple system components",
                        "Participate in hardware validation at mass manufacturing facility",
                        "Support and participate in third-party penetration testing.",
                    ]
                },
                {
                    role: "Embedded Software Engineer",
                    start: "May 2020",
                    end: "Sep 2021",
                    responsibility: [
                        "Debug and modify Linux kernel code and drivers",
                        "Research and develop embedded encryption tools and methods for ARM using OP-TEE",
                        "Implement Secure Boot",
                        "Lead the rewrite of an embedded security business logic application using modern C++ techniques (C++17) resulting in a 60% reduction of the lines of code and 95% unit test code coverage",
                        "Drive process improvements to increase reliability and productivity of development team",
                        "Build a firmware recovery platform (Python Django)",
                        "Maintain Buildroot build system",
                        "Automate build and deployment process (Jenkins, GCP Cloud Build, Harness). Establish coding standards and best practices",
                    ]
                },

            ]
        },
        {
            name: "CardConnect / FirstData / Fiserv",
            location: "King of Prussia, PA",
            titles: [
                {
                    role: "Software Development Team Lead - Embedded",
                    start: "Sep 2019",
                    end: "May 2020",
                    responsibility: [
                        "Lead a team developing embedded applications for credit card terminals to meet industry standards (EMV, ISO-8583, PCI-DSS)",
                        "Organize and lead the development for a new embedded payment application",
                        "Negotiate new features and schedule releases with input from stakeholders",
                        "Interface with customers to gather feature requirements and handle support escalations",
                    ]
                },
                {
                    role: "Senior Embedded Software Engineer",
                    start: "Dec 2018",
                    end: "Sep 2019",
                    responsibility: [
                        "Fully automate device and application certification testing, including building a Python based UI and an OpenBuilds based robot driven by a Java Spring Boot application",
                        "Drive industry best practices to the development, test, and deployment process",
                        "Attend industry conferences and report on changing standards",
                        "Own domain knowledge for payment certification requirements",
                    ]
                },
                {
                    role: "Embedded Software Engineer",
                    start: "Jan 2017",
                    end: "Dec 2018",
                    responsibility: [
                        "Manage build process of embedded application using Jenkins and Bitbucket",
                        "Modernize legacy code base",
                        "Leverage vendor SDK to develop payment acceptance features (Ingenico)",
                        "Support and participate in PCI certifications",
                        "Establish coding standards and best practices",
                    ]
                }
            ]
        },
        {
            name: "Unisys",
            location: "Malvern, PA",
            titles: [
                {
                    role: "Senior Software Engineer",
                    start: "May 2014",
                    end: "Jan 2017",
                    responsibility: [
                        "Act as Scrum Master for team of 5 to 10 engineers",
                        "Develop high-speed interconnect between hypervisors using Infiniband",
                        "Develop network monitoring application to assist in network security configuration",
                    ]
                },
                {
                    role: "Software Engineer",
                    start: "Apr 2013",
                    end: "May 2014",
                    responsibility: [
                        "Develop virtual device drivers for Linux and Windows",
                        "Maintain Buildroot build system",
                        "Communicate with engineers inside and outside of my team",
                    ]
                },
                {
                    role: "Associate Software Engineer",
                    start: "Jun 2011",
                    end: "Apr 2013",
                    responsibility: [
                        "Contribute to Secure Partitioning (s-Par) hypervisor",
                        "Research and understand design guidelines",
                        "Accurately estimate time required to complete tasks",
                        "Document patch details effectively",
                    ]
                },
                {
                    role: "Software Engineering Co-op",
                    start: "Sep 2007",
                    end: "Jun 2011",
                    responsibility: [
                        "Write firmware in C and C#",
                        "Identify, research, and fix bugs",
                        "Implement and complete assigned tasks according to the SCRUM process",
                        "Write applications to assist hardware testing",
                    ]
                }
            ]
        },
    ]

    return (
        <Box>
            {
                data.map((company) => (<Company company={company} />))
            }
        </Box>
    )
}