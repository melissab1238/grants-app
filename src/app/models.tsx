export interface Source {
  name: string;
  url: string;
}

export type GrantTypes = "Loan" | "Incentive" | "Rebate";

export interface Grant {
  name: string;
  type: GrantTypes;
  targetAudience?: string;
  bulletPoints?: string[];
  description: string;
  id: number;
  active: boolean;
  source: Source;
}
