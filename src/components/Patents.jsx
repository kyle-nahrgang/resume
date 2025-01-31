import { InfoCardGrid } from "./InfoCardGrid";

export function Patents() {
    const patents = [
        {
            title: "Establishing trust between applications in a computing environment",
            subtitle: "Application US17/885,236",
            description: "A method, system and device are disclosed. A premises device comprising a first operating system and a second operating system is described. The premises device comprises processing circuitry configured to establish a chain of trust at least between the first operating system and at least one software application associated with the second operating system. The processing circuitry is further configured to perform at least one action based at least in part on the established chain of trust.",
            tags: [
                "ADT", "Pending", "Aug 2022"
            ],
            url: "https://patents.google.com/patent/US20230049508A1"
        },
        {
            title: "Network provisioning and tokenization using a remote terminal",
            subtitle: "US-12047356",
            description: "A method of tokenizing sensitive data from a terminal device includes receiving, a connection request comprising a hardware serial number associated with a terminal device and validating the hardware serial number associated with the terminal device. The method includes sending a command to a terminal device that causes the terminal device to display a prompt for sensitive data associated with a user interacting with the terminal device and receiving an encrypted data packet from the terminal device. The encrypted data packet includes the sensitive data. The method includes sending the encrypted data packet to a gateway system for tokenization, receiving a token that represents the sensitive data, and providing the token to the terminal device.",
            tags: [
                "FirstData", "Nov 2021"
            ],
            url: "https://patents.google.com/patent/US12047356B2"
        },
        {
            title: "Nonstop Computing Fabric Arrangements",
            subtitle: "US-10965616",
            description: "Systems and methods for non-stop computing in a virtualization fabric are disclosed. One system includes a computing fabric comprising a plurality of host platforms, the plurality of host platforms including at least a first host platform and a second host platform communicatively connected to the first host platform. The system also includes an interconnect service partitions residing on the first host platform. The system includes a plurality of guest partitions distributed across the plurality of host platforms. The system further includes a DNS server instance managed by at least one of the plurality of interconnect service partitions and defining at least one zone, the at least one zone including one or more partitions from among the plurality of guest partitions distributed across the plurality of host plat forms.",
            tags: [
                "Unisys", "March 2021"
            ],
            url: "https://patents.google.com/patent/US10965616B2"
        },
        {
            title: "System and method of constructing a memory-based interconnect between multiple partitions",
            subtitle:  "Application US13/955,188",
            bullets: [

            ],
            description: "The shared memory interconnect system provides an improved method for efficiently and dynamically sharing resources between two or more guest partitions. The system also provides a method to amend the parameters of the shared resources without resetting all guest partitions. In various embodiments, a XML file is used to dynamically define the parameters of shared resources. In one such embodiment using a XML or equivalent file, the interconnect system driver will establish a mailbox shared by each guest partition. The mailbox provides messaging queues and related structures between the guest partitions. In various embodiments, the interconnect system driver may use macros to locate each memory structure. The shared memory interconnect system allows a virtualization system to establish the parameters of shared resources during runtime.",
            tags: [
               "Unisys", "Abandoned", "March 2013"
            ],
            url: "https://patents.google.com/patent/US20140143372A1"
        },
    ]
    return (
        <InfoCardGrid items={patents} />
    )
}