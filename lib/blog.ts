export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-junk-removal-cost-nc",
    title: "How Much Does Junk Removal Cost in North Carolina?",
    excerpt:
      "A straightforward breakdown of what drives junk removal pricing — volume, item type, and access — so you know what to expect before you call.",
    category: "Pricing",
    date: "2026-06-02",
    readMinutes: 5,
    body: [
      {
        paragraphs: [
          "Junk removal pricing usually comes down to three things: how much space your items take up in the truck, what kind of items they are, and how hard they are to get to. Most companies, us included, quote based on volume rather than a flat per-item fee — a single couch costs less than a quarter-truckload of mixed household junk.",
        ],
      },
      {
        heading: "What actually drives the price",
        paragraphs: [
          "Volume is the biggest factor. We quote based on roughly how much of the truck bed your items will fill — a single item, a quarter load, a half load, or a full load. The more space something takes, the more it costs to haul and dispose of responsibly.",
          "Item type matters too. Appliances with refrigerants, mattresses, and anything requiring special disposal handling can carry a small additional cost beyond straight volume, since disposal fees for those items are higher than general household waste.",
          "Access affects labor time. A couch sitting in a driveway is a five-minute job. The same couch three flights up in a walk-up apartment takes longer and requires more manpower — that gets reflected in the quote.",
        ],
      },
      {
        heading: "How to get an accurate quote fast",
        paragraphs: [
          "The fastest way to get a real number is to text a photo of what needs to go along with your general location. We can usually give you a price back the same day without needing to schedule an in-person walkthrough first, unless it's a large estate or property cleanout where seeing the full scope matters.",
        ],
      },
      {
        heading: "What's typically included",
        paragraphs: [
          "Our quotes include the labor to load everything, hauling, and responsible disposal — including routing usable items to local donation centers when possible. There's no separate 'loading fee' or surprise line item added after the truck is full.",
        ],
      },
    ],
  },
  {
    slug: "estate-cleanout-checklist",
    title: "Estate Cleanout Checklist: Where to Start",
    excerpt:
      "Clearing a loved one's home is overwhelming. Here's a practical order of operations that keeps the process manageable.",
    category: "Estate Cleanouts",
    date: "2026-06-10",
    readMinutes: 6,
    body: [
      {
        paragraphs: [
          "Estate cleanouts are rarely just a hauling job — they're an emotional process with a practical deadline attached, whether that's a closing date, a lease turnover, or simply wanting to move forward. Having a clear order of operations makes the physical part easier to manage.",
        ],
      },
      {
        heading: "1. Separate before you sort",
        paragraphs: [
          "Before diving into every drawer, do a first pass to separate items into three broad buckets: keep (family items, documents, anything of sentimental or financial value), sell or donate, and haul. You don't need to make every decision immediately — just get things into the right room or area.",
        ],
      },
      {
        heading: "2. Handle documents and valuables first",
        paragraphs: [
          "Financial documents, deeds, jewelry, and anything of clear value should be located and secured before any hauling begins. It's much easier to do this in a calm first pass than to worry about it once a crew is actively clearing rooms.",
        ],
      },
      {
        heading: "3. Decide what's worth an estate sale",
        paragraphs: [
          "If there's enough furniture or valuable items to justify an estate sale or auction, that typically needs to happen before a full cleanout — sale companies usually want the property untouched until their event is done. If you're not doing a sale, this step can be skipped entirely.",
        ],
      },
      {
        heading: "4. Schedule the full cleanout",
        paragraphs: [
          "Once keep and sale items are out, the rest — furniture, appliances, garage and attic contents, general household items — can be cleared in a single visit. We walk the property, quote the full scope, and clear it top to bottom, including outbuildings if needed.",
          "If you're coordinating around a closing date or realtor showing, let us know up front — we regularly work around those deadlines.",
        ],
      },
      {
        heading: "5. Final walkthrough",
        paragraphs: [
          "A last walkthrough after the cleanout confirms the property is left broom-swept and ready for its next step, whether that's photos, showings, or a new tenant moving in.",
        ],
      },
    ],
  },
  {
    slug: "garage-cleanout-tips",
    title: "5 Tips for Tackling a Garage That's Gotten Out of Control",
    excerpt:
      "If you can't remember the last time you parked a car in there, here's how to get it back without losing a weekend.",
    category: "Garage & Attic",
    date: "2026-06-18",
    readMinutes: 4,
    body: [
      {
        paragraphs: [
          "Garages have a way of becoming the default storage for everything without an obvious home — until one day there's a narrow walking path and no room for the car. Here's how to approach getting it back under control without it turning into an all-weekend project.",
        ],
      },
      {
        heading: "1. Work in zones, not the whole room at once",
        paragraphs: [
          "Trying to sort the entire garage in one pass is overwhelming and usually stalls out. Break it into zones — one wall, one shelving unit, one corner — and finish each zone before moving to the next.",
        ],
      },
      {
        heading: "2. Use the one-year rule",
        paragraphs: [
          "If you haven't touched it in a year and it's not seasonal (holiday decorations, out-of-season gear), it's a strong candidate to go. This single rule clears out more clutter than almost any other sorting method.",
        ],
      },
      {
        heading: "3. Separate hazardous materials early",
        paragraphs: [
          "Old paint cans, chemicals, and similar items need to be handled per local disposal guidelines rather than tossed in with general junk. Set these aside in their own area so they don't get mixed into a general haul-away pile.",
        ],
      },
      {
        heading: "4. Don't sort everything before calling for a haul",
        paragraphs: [
          "You don't need the whole garage perfectly organized before scheduling a cleanout — most people just need the 'definitely going' pile removed to actually see what they're working with. We can clear a first pass, and you can handle finer organizing once there's breathing room.",
        ],
      },
      {
        heading: "5. Think vertical once it's cleared",
        paragraphs: [
          "Once the floor is clear, wall-mounted shelving or a slat-wall system keeps things from creeping back into chaos — it's much easier to maintain an organized garage than to reclaim one from scratch a second time.",
        ],
      },
    ],
  },
  {
    slug: "what-can-be-donated-vs-junk",
    title: "What Can Be Donated vs. What Just Needs to Go",
    excerpt:
      "A quick, honest guide to what local charities can actually use — and what's better off going straight to disposal.",
    category: "Donation & Disposal",
    date: "2026-06-25",
    readMinutes: 4,
    body: [
      {
        paragraphs: [
          "One of the most common questions we get is whether something can be donated instead of hauled to disposal. Local donation centers are genuinely helpful for a lot of household items — but they also have real limits on what they can accept, and knowing the difference saves everyone time.",
        ],
      },
      {
        heading: "Usually donatable",
        list: [
          "Furniture in good, usable condition (no major stains, structural damage, or odor)",
          "Working small appliances",
          "Clothing, linens, and household goods in clean condition",
          "Books, toys, and games in good shape",
        ],
        paragraphs: [],
      },
      {
        heading: "Usually not accepted for donation",
        list: [
          "Mattresses (most donation centers can't take these due to health regulations)",
          "Furniture with tears, stains, or structural damage",
          "Broken or non-working appliances",
          "Items with mold, pest damage, or strong odors",
        ],
        paragraphs: [],
      },
      {
        heading: "Where we come in",
        paragraphs: [
          "When we haul a job, we route anything in donatable condition to local charities rather than defaulting straight to disposal — it costs you nothing extra and keeps usable items out of a landfill. Items that don't meet donation standards are disposed of responsibly instead.",
        ],
      },
    ],
  },
  {
    slug: "spring-cleaning-guide-taylorsville-hickory",
    title: "A Realistic Spring Cleaning Guide for Taylorsville & Hickory Homeowners",
    excerpt:
      "Spring cleaning doesn't have to mean an overwhelming weekend. Here's a room-by-room approach that actually gets finished.",
    category: "Seasonal",
    date: "2026-07-01",
    readMinutes: 5,
    body: [
      {
        paragraphs: [
          "Spring cleaning tends to get put off because it feels like an all-or-nothing project. Breaking it into a room-by-room plan over a couple of weekends makes it far more likely to actually get done — and gives you a natural point to schedule a junk pickup for whatever you're clearing out.",
        ],
      },
      {
        heading: "Start outside first",
        paragraphs: [
          "Winter tends to leave yards with fallen limbs, storm debris, and brush that piled up over the colder months. Clearing this first gives you a visible win and opens up space before you start pulling things out of the house.",
        ],
      },
      {
        heading: "Garage and shed next",
        paragraphs: [
          "These spaces tend to accumulate the most over a full year — lawn equipment, holiday decorations, half-finished projects. Clearing them in spring, before yard work season ramps up, means your tools and equipment are actually accessible when you need them.",
        ],
      },
      {
        heading: "Then move room by room indoors",
        paragraphs: [
          "Closets, spare rooms, and basements are natural places for clutter to collect over winter. Tackle one room per weekend rather than trying to do the whole house at once — it's far more sustainable and less likely to stall out halfway through.",
        ],
      },
      {
        heading: "Schedule the haul-away last",
        paragraphs: [
          "Once you've got a pile — whether it's from the yard, garage, or inside the house — that's the point to text us a photo. Most homeowners in Taylorsville and Hickory end up combining yard debris, garage items, and household clutter into a single pickup, which is more efficient than separate trips for each.",
        ],
      },
    ],
  },
  {
    slug: "moving-out-what-to-do-with-furniture-you-cant-take",
    title: "Moving Out? What to Do With Furniture You're Not Taking",
    excerpt:
      "Between a move-out date and a moving truck that's already full, here's how to handle the furniture that's staying behind.",
    category: "Moving",
    date: "2026-07-08",
    readMinutes: 4,
    body: [
      {
        paragraphs: [
          "Moving day has a way of clarifying exactly what's actually worth the cost and hassle of moving — and what's better off left behind. If you're facing a move-out deadline with furniture that isn't making the trip, here's how to handle it without scrambling at the last minute.",
        ],
      },
      {
        heading: "Decide early, not on move-out day",
        paragraphs: [
          "The biggest mistake is leaving this decision until the moving truck is already loaded. Walk through the home a few days before your move and flag anything that's staying — this gives you time to schedule a pickup instead of leaving it curbside and hoping for the best.",
        ],
      },
      {
        heading: "Check your lease or closing terms",
        paragraphs: [
          "Rental leases and home sale agreements often require the property to be left empty and broom-clean. Leaving furniture behind without arranging removal can result in charges from a landlord or delay a closing — worth confirming this before your move-out date.",
        ],
      },
      {
        heading: "One trip beats several",
        paragraphs: [
          "If you've got a mix of furniture, appliances, and general items staying behind, we can usually take it all in a single visit rather than requiring separate pickups by category. That's typically the most efficient way to clear a property before a move-out deadline.",
        ],
      },
      {
        heading: "Coordinate timing with your move",
        paragraphs: [
          "We regularly schedule pickups to line up with a move-out date, whether that means clearing the property the same day you hand back keys or the day after your moving truck leaves.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
