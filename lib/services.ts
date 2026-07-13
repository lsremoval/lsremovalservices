export type Service = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  intro: string[];
  whatWeTake: string[];
  process: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    shortName: "Furniture",
    eyebrow: "Couches, sectionals, bed frames & more",
    summary:
      "Old couch by the curb going nowhere? We haul off furniture of every size, no matter how many stairs are between it and the truck.",
    intro: [
      "Furniture is heavy, awkward, and rarely fits in a regular trash pickup — which is exactly why it tends to sit in a garage or spare room for months. Our crew shows up with the manpower and the truck to take it in one trip.",
      "Whether it's a single recliner or you're clearing out an entire living room, we carry it out ourselves. You don't lift a finger.",
    ],
    whatWeTake: [
      "Couches, sofas & sectionals",
      "Mattresses & box springs",
      "Dressers, bed frames & headboards",
      "Recliners & upholstered chairs",
      "Dining tables & office desks",
      "Bookshelves & entertainment centers",
    ],
    process: [
      { title: "Text or call for a quote", detail: "Send a photo and your address — we'll give you a real price before we ever load the truck." },
      { title: "We show up and load it", detail: "Our crew handles the carrying, the stairs, and the tight doorways." },
      { title: "We haul it away", detail: "Donatable pieces go to local charities when possible; the rest is disposed of responsibly." },
    ],
    faqs: [
      { q: "Do you take furniture with stains or damage?", a: "Yes. As long as it's not a health hazard (mold, bedbugs, biohazard), we'll take it regardless of condition." },
      { q: "Can you get furniture out of a basement or upstairs bedroom?", a: "That's most of what we do. Stairs, tight hallways, and awkward angles are part of the job." },
    ],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    shortName: "Appliances",
    eyebrow: "Fridges, washers, dryers & more",
    summary:
      "Dead refrigerator, broken washer, old water heater — appliances are heavy and hard to move alone. We load them out and dispose of them the right way.",
    intro: [
      "Appliances are some of the heaviest, most awkward items in a home to move solo — sharp edges, dead weight, and doors that swing open at the worst time. We bring the equipment and manpower to move them safely, without gouging your floors or walls on the way out.",
      "We also handle appliances containing refrigerants or other regulated materials with proper disposal, so you're not left wondering if it was done right.",
    ],
    whatWeTake: [
      "Refrigerators & freezers",
      "Washers & dryers",
      "Dishwashers",
      "Stoves, ranges & ovens",
      "Water heaters",
      "Window & wall AC units",
    ],
    process: [
      { title: "Text or call for a quote", detail: "Tell us what appliance and where it's located in the home." },
      { title: "We load it out", detail: "We protect doorways and floors on the way to the truck." },
      { title: "Responsible disposal", detail: "Regulated components are handled per local disposal requirements." },
    ],
    faqs: [
      { q: "Do you disconnect appliances?", a: "We can disconnect simple hookups (washer/dryer hoses, standard plugs). Gas lines or hardwired units should be disconnected by a licensed technician beforehand." },
      { q: "Do you take non-working appliances?", a: "Yes — working or not, we'll haul it." },
    ],
  },
  {
    slug: "garage-attic-shed-cleanout",
    name: "Garage, Attic & Shed Cleanouts",
    shortName: "Garage / Attic / Shed",
    eyebrow: "Years of accumulated stuff, gone in a day",
    summary:
      "The shed you can't walk into, the attic you're afraid to open, the garage that hasn't fit a car in years — we clear it out top to bottom.",
    intro: [
      "Garages, attics, and sheds have a way of becoming storage for everything that doesn't have another home — until one day it's wall to wall and you can't find anything, let alone park a car. We come in, clear it out completely, and leave the space usable again.",
      "You point at what stays, we haul off the rest — no sorting required on your end unless you want to.",
    ],
    whatWeTake: [
      "Old tools & hardware",
      "Paint cans & chemicals (per local disposal rules)",
      "Boxes of accumulated storage",
      "Broken lawn equipment",
      "Scrap wood & building materials",
      "General clutter of any kind",
    ],
    process: [
      { title: "Walk the space with us or send photos", detail: "We'll quote based on volume — how much of the truck it fills." },
      { title: "We clear it top to bottom", detail: "Attic, shelving, corners — we don't leave the hard-to-reach stuff behind." },
      { title: "Broom-clean when we leave", detail: "The space is left ready to actually use again." },
    ],
    faqs: [
      { q: "Do I need to be there while you work?", a: "Not necessarily — many customers just show us what to take and go about their day, or leave instructions if you can't be on site." },
      { q: "What if I only want part of it cleared?", a: "No problem — we only take what you point out." },
    ],
  },
  {
    slug: "estate-property-cleanouts",
    name: "Estate & Property Cleanouts",
    shortName: "Estate Cleanouts",
    eyebrow: "Full-property clearouts, handled with care",
    summary:
      "Clearing a loved one's home, prepping a property for sale, or closing out a rental — we handle whole-property cleanouts start to finish.",
    intro: [
      "Estate cleanouts are often handled during a hard time, or under a tight closing deadline. Either way, our crew moves efficiently and respectfully, clearing an entire property — house, garage, outbuildings — so it's ready for the next step, whether that's a realtor's photos or a new tenant.",
      "We work directly with families, executors, realtors, and property managers, and can coordinate timing around closings or showings.",
    ],
    whatWeTake: [
      "Full household furniture & belongings",
      "Appliances",
      "Garage, attic & outbuilding contents",
      "Yard debris & outdoor items",
      "General trash & discarded items",
      "Items left behind after a move-out",
    ],
    process: [
      { title: "Walkthrough & quote", detail: "We assess the full property and give you a clear price up front." },
      { title: "Full clearout", detail: "Our crew clears every room, plus garage and outdoor spaces as needed." },
      { title: "Property left move-in or showing ready", detail: "Broom-swept and ready for what's next." },
    ],
    faqs: [
      { q: "Can you work with a realtor or property manager directly?", a: "Yes — we regularly coordinate directly with realtors, executors, and property managers on timing and access." },
      { q: "Do you separate items for donation or sale?", a: "We can set aside anything you flag for family, donation, or an estate sale before hauling the rest." },
    ],
  },
  {
    slug: "yard-debris-removal",
    name: "Yard Debris & Brush Removal",
    shortName: "Yard Debris",
    eyebrow: "Brush, limbs, storm cleanup & more",
    summary:
      "Storm knocked down limbs, or you've got a pile of brush and yard waste that's been sitting for a season — we load it up and haul it off.",
    intro: [
      "Yard debris piles up fast — storm damage, a weekend of clearing brush, or just yard waste your regular pickup won't take. We load and haul it in bulk so it's gone in one trip instead of sitting at the curb.",
      "We also handle post-storm cleanup when limbs and debris need to come off the property quickly.",
    ],
    whatWeTake: [
      "Fallen limbs & storm debris",
      "Brush & branches",
      "Leaf & yard waste piles",
      "Old fencing & landscape timbers",
      "Scrap lumber from outdoor projects",
      "General outdoor clutter",
    ],
    process: [
      { title: "Text a photo of the pile", detail: "We'll quote based on volume." },
      { title: "We load it out", detail: "No need to bag or bundle anything beforehand." },
      { title: "Yard left clear", detail: "Debris is hauled and disposed of properly." },
    ],
    faqs: [
      { q: "Do I need to bag the debris first?", a: "No — leave it as-is, we'll load it directly." },
      { q: "Can you handle a large storm cleanup?", a: "Yes, we can scale the crew and truck runs for larger storm debris jobs." },
    ],
  },
  {
    slug: "household-junk-removal",
    name: "Household Junk & Clutter Removal",
    shortName: "Household Junk",
    eyebrow: "General clutter, closets, basements & more",
    summary:
      "Not everything fits a category — old boxes, closets full of clutter, a basement that needs a fresh start. If it needs to go, we'll take it.",
    intro: [
      "Not every job is a single category — sometimes it's just a house full of accumulated stuff that needs to go, room by room. We handle general household junk removal for exactly that: closets, basements, spare rooms, whatever's been piling up.",
      "One call covers all of it — you don't need to separate junk into categories before we arrive.",
    ],
    whatWeTake: [
      "General household clutter",
      "Boxes & storage bins",
      "Old electronics",
      "Closet & basement cleanouts",
      "Miscellaneous household items",
      "Combination loads (furniture + appliances + junk in one trip)",
    ],
    process: [
      { title: "Text or call for a quote", detail: "Describe what's going, or send photos — we'll quote it fast." },
      { title: "We load everything in one trip", detail: "No need to sort by category first." },
      { title: "Space cleared", detail: "Donatable items are routed to local charities when possible." },
    ],
    faqs: [
      { q: "Can I combine multiple types of junk in one pickup?", a: "Yes — that's the most common job we run. Furniture, appliances, and general clutter all in one visit." },
      { q: "Is there a minimum load size?", a: "No formal minimum — text us what you've got and we'll quote it fairly." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
