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
    description: "About: The Advanced Reactor Demonstration Program (ARDP) is a funding opportunity offered by the U.S. Department of Energy (DOE), Office of Nuclear Energy (NE) to support the development of advanced nuclear reactor designs. With a focus on enhancing safety, security, economics, and environmental impacts over current nuclear power plant designs, this program aims to facilitate the construction of real demonstration reactors that are safe and affordable to build in the near- to mid-term. The funding, made available through the FY2020 Further Consolidation Appropriations Act, reflects the government's commitment to maintaining the nation's technological leadership position in the global nuclear industry and ensuring national energy security. By fostering public-private partnerships and supporting diverse advanced reactor technologies, the ARDP seeks to enable the commercialization of reliable, cost-effective, licensable, and commercially viable advanced reactors, ultimately contributing to a market environment with safe and affordable commercial reactor services. Projects: Projects that would best fit this funding opportunity would focus on the development of advanced nuclear reactor designs that are reliable, cost-effective, licensable, and commercially viable. These projects should aim to enable a market environment in which commercial reactor services are safe and affordable to both construct and operate compared to alternative sources of energy in the near- and mid-term. Specifically, the program is seeking projects that support the actual construction of real demonstration reactors that are safe and affordable to build in the near- to mid-term. This includes support for two reactor designs to be operational in 5-7 years, as well as 2-5 additional diverse advanced reactor designs with a commercialization horizon approximately 5 years longer. Additionally, the program is interested in advancing reactor designs toward the demonstration phase through public-private partnership awards with a commercialization horizon approximately 5 years longer than the previous category. Previous successful applicants may have included private industry entities, national laboratories, and academia with a focus on advancing nuclear reactor technologies and capabilities.",
    id: 2,
    active: false,
    source: availableSources.OCED,
  },
  {
    name: "Active Transportation",
    type: "Rebate",
    description: "About: The Active Transportation Program (ATP) aims to address the increasing reliance on motorized transportation by encouraging and supporting active modes of travel, such as walking and biking. With a focus on enhancing safety, mobility, and public health, the program seeks to increase the proportion of trips accomplished through non-motorized means, while also advancing regional efforts to achieve greenhouse gas reduction goals. By prioritizing projects that benefit a wide range of users, including disadvantaged communities, the ATP aims to ensure that the benefits of active transportation are equitably distributed. This program represents a proactive response to the challenges posed by sedentary lifestyles, traffic congestion, and environmental concerns, offering a comprehensive approach to promoting healthier, more sustainable modes of travel. Projects: Projects that would best fit the Active Transportation Program (ATP) funding opportunity would focus on increasing the use of active modes of transportation, such as biking and walking, while also prioritizing safety, mobility, and public health. Examples of relevant projects could include the development of new bike lanes and pedestrian pathways, the implementation of traffic calming measures to improve safety for non-motorized users, the creation of programs to promote biking and walking, and initiatives to enhance accessibility for disadvantaged communities. Winning applicants in the past have included local governments, transportation agencies, non-profit organizations, and community groups that have demonstrated a commitment to advancing active transportation and addressing the needs of diverse user groups.",
    id: 3,
    active: true,
    source: availableSources.energyCA,
  },
];
