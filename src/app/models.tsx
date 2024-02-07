export interface Source {
  name: string;
  url: string;
}

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

export type GrantTypes = "Loan" | "Incentive" | "Rebate" | "Default";

interface ColorTypes {
  [key: string]: string; // Grant type as key, color as value
}

const colorTypes: Record<GrantTypes, string> = {
  Loan: 'bg-blue-100',
  Incentive: 'bg-purple-100',
  Rebate: 'bg-yellow-100',
  Default: 'bg-gray-100',
};

export const getBoxColor = (type: GrantTypes): string => {
  return colorTypes[type] || colorTypes.Default;
};
