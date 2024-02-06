import { Grant } from "../models";
import { availableSources } from "./sources";

export const grants: Grant[] = [
  {
    name: "Energy Infrastructure Reinvestment (EIR) Program",
    type: "Loan",
    id: 1,
    source: availableSources.grantsUS,
    active: true,
    bulletPoints: [
      "Retooling, repowering, repurposing, or replacing inactive energy infrastructure.",
      "Enhancing operational facilities to avoid, reduce, utilize, or sequester air pollutants.",
      "Addressing anthropogenic emissions of greenhouse gases.",
    ],
    description:
      "About: The Energy Infrastructure Reinvestment (EIR) Program, established under the Inflation Reduction Act, represents a historic investment in climate and energy in the United States. With over $100 billion in increased lending authorities and an additional $5 billion appropriation through September 30, 2026, the EIR Program aims to guarantee loans for projects that revitalize energy infrastructure. This includes retooling, repowering, repurposing, or replacing energy infrastructure that has ceased operations, as well as enabling operating energy infrastructure to mitigate air pollutants and greenhouse gas emissions. The program seeks to address the critical need for modernizing and enhancing energy infrastructure to align with environmental and climate goals. Interested applicants are encouraged to familiarize themselves with the specific requirements and application details, as the EIR Program presents a significant opportunity for advancing sustainable energy initiatives and fostering community engagement. Project: Projects that would best fit the Energy Infrastructure Reinvestment (EIR) Program are those that focus on retooling, repowering, repurposing, or replacing energy infrastructure that has ceased operations, or enabling operating energy infrastructure to avoid, reduce, utilize, or sequester air pollutants or anthropogenic emissions of greenhouse gases. This could include initiatives such as repurposing abandoned coal plants for renewable energy generation, upgrading existing infrastructure to incorporate carbon capture and storage technologies, or implementing innovative solutions to reduce emissions from operating energy facilities. Additionally, projects that demonstrate a clear plan for engaging with and positively affecting associated communities, as well as those that involve environmental remediation of the project site, would be well-aligned with the goals of the program. Successful applicants in the past have included a diverse range of entities, including utilities, renewable energy developers, and technology innovators.",
  },
  {
    name: "Advanced Reactor Demonstration",
    type: "Incentive",
    description: "Another grant description",
    id: 2,
    active: false,
    source: availableSources.OCED,
  },
  {
    name: "Active Transportation",
    type: "Rebate",
    description: "Yet another description",
    id: 3,
    active: true,
    source: availableSources.energyCA,
  },
];
