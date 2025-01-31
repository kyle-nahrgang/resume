import { InfoCardGrid } from "./InfoCardGrid";

export function Projects() {
    const data = [
        {
            title: "FULL-STACK BILLIARD LEAGUE HANDICAP PREDICTION APP",
            bullets: [
                "React Frontend",
                "Rust / Actix-web REST API",
                "Auth0 JWT authentication",
                "MongoDB (Atlas) backed database",
                "Reverse-engineered GraphQL API to scrape league data",
                "Docker container running nginx hosted by GCP cloud-run instance",
                "Custom machine learning models for handicap prediction using Rust (burn)"
            ],
            tags: [
                "React",
                "Rust",
                "REST API",
                "MongoDB",
                "GraphQL",
                "GCP",
                "Auth0"
            ],
            url: "https://apa.nahrgang.dev"
        },
        {
            title: "REACT RESUME TEMPLATE",
            bullets: [
                "Joy-UI Components",
                "Driven by JSON Data",
            ],
            tags: [
                "React",
                "Joy-UI",
            ],
            url: "https://github.com/kyle-nahrgang/resume"
        },
    ]

    return (
        <InfoCardGrid items={data} />
    )
}