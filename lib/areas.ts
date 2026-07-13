export type Area = {
  slug: string;
  city: string;
  county: string;
  blurb: string;
  distanceNote: string;
};

export const areas: Area[] = [
  {
    slug: "taylorsville-nc",
    city: "Taylorsville",
    county: "Alexander County",
    blurb:
      "Home base. Taylorsville is where L&S Removal Services started, and it's still where our truck rolls out from every morning.",
    distanceNote: "Home base",
  },
  {
    slug: "hickory-nc",
    city: "Hickory",
    county: "Catawba County",
    blurb:
      "From furniture cleanouts near Lake Hickory to estate cleanouts across the city, Hickory is one of our most-requested service areas.",
    distanceNote: "~20 min from Taylorsville",
  },
  {
    slug: "statesville-nc",
    city: "Statesville",
    county: "Iredell County",
    blurb:
      "We run regular jobs throughout Statesville, including garage cleanouts, appliance pickups, and full property clearouts.",
    distanceNote: "~30 min from Taylorsville",
  },
  {
    slug: "lenoir-nc",
    city: "Lenoir",
    county: "Caldwell County",
    blurb:
      "Lenoir homeowners call us for everything from single-item furniture pickups to full attic and shed cleanouts.",
    distanceNote: "~25 min from Taylorsville",
  },
  {
    slug: "newton-nc",
    city: "Newton",
    county: "Catawba County",
    blurb:
      "Junk removal and cleanouts across Newton, handled with the same fast turnaround as everywhere else on our route.",
    distanceNote: "~25 min from Taylorsville",
  },
  {
    slug: "conover-nc",
    city: "Conover",
    county: "Catawba County",
    blurb:
      "Furniture pickups, appliance removal, and garage cleanouts across Conover on our regular Catawba County route.",
    distanceNote: "~25 min from Taylorsville",
  },
  {
    slug: "claremont-nc",
    city: "Claremont",
    county: "Catawba County",
    blurb:
      "Serving Claremont for household junk removal, yard debris, and full property cleanouts.",
    distanceNote: "~20 min from Taylorsville",
  },
  {
    slug: "maiden-nc",
    city: "Maiden",
    county: "Catawba County",
    blurb: "Junk removal, appliance pickups, and shed cleanouts across Maiden and the surrounding area.",
    distanceNote: "~30 min from Taylorsville",
  },
  {
    slug: "granite-falls-nc",
    city: "Granite Falls",
    county: "Caldwell County",
    blurb: "Serving Granite Falls for furniture removal, junk hauling, and yard debris cleanup.",
    distanceNote: "~20 min from Taylorsville",
  },
  {
    slug: "mooresville-nc",
    city: "Mooresville",
    county: "Iredell County",
    blurb:
      "From lakefront property cleanouts to standard household junk removal, we service Mooresville on our regular Charlotte-corridor route.",
    distanceNote: "~50 min from Taylorsville",
  },
  {
    slug: "troutman-nc",
    city: "Troutman",
    county: "Iredell County",
    blurb: "Furniture, appliance, and garage cleanout junk removal serving Troutman.",
    distanceNote: "~40 min from Taylorsville",
  },
  {
    slug: "davidson-nc",
    city: "Davidson",
    county: "Mecklenburg County",
    blurb: "Serving Davidson and the Lake Norman area for household and estate cleanout junk removal.",
    distanceNote: "~55 min from Taylorsville",
  },
  {
    slug: "cornelius-nc",
    city: "Cornelius",
    county: "Mecklenburg County",
    blurb: "Serving Cornelius and the Lake Norman area for furniture, appliance, and estate cleanout jobs.",
    distanceNote: "~55 min from Taylorsville",
  },
  {
    slug: "huntersville-nc",
    city: "Huntersville",
    county: "Mecklenburg County",
    blurb: "Huntersville homeowners and property managers rely on us for fast, reliable junk removal.",
    distanceNote: "~1 hr from Taylorsville",
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    county: "Mecklenburg County",
    blurb:
      "We run regular routes into Charlotte for estate cleanouts, property turnovers, and full-home junk removal.",
    distanceNote: "~1 hr from Taylorsville",
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
