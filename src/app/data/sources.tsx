import { Source } from "../models";

export const availableSources: Record<string, Source> = {
  grantsGov: { name: "Grants Gov", url: "grants.gov" },
  energyCA: { name: "Energy CA", url: "energy.ca.gov" },
  OCED: { name: "OCED", url: "https://oced-exchange.energy.gov/" },
};
