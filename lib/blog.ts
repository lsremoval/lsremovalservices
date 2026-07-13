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
      "A straightforward breakdown of what drives junk removal pricing: volume, item type, and access, so you know what to expect before you call.",
    category: "Pricing",
    date: "2026-06-02",
    readMinutes: 5,
    body: [
      {
        paragraphs: [
          "Junk removal pricing usually comes down to three things: how much space your items take up in the truck, what kind of items they are, and how hard they are to get to. Most companies, us included, quote based on volume rather than a flat per-item fee. A single couch costs less than a quarter-truckload of mixed household junk.",
        ],
      },
      {
        heading: "What actually drives the price",
        paragraphs: [
          "Volume is the biggest factor. We quote based on roughly how much of the truck bed your items will fill: a single item, a quarter load, a half load, or a full load. The more space something takes, the more it costs to haul and dispose of responsibly.",
          "Item type matters too. Appliances with refrigerants, mattresses, and anything requiring special disposal handling can carry a small additional cost beyond straight volume, since disposal fees for those items are higher than general household waste.",
          "Access affects labor time. A couch sitting in a driveway is a five-minute job. The same couch three flights up in a walk-up apartment takes longer and requires more manpower, and that gets reflected in the quote.",
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
          "Our quotes include the labor to load everything, hauling, and responsible disposal, including routing usable items to local donation centers when possible. There's no separate 'loading fee' or surprise line item added after the truck is full.",
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
          "Estate cleanouts are rarely just a hauling job. They're an emotional process with a practical deadline attached, whether that's a closing date, a lease turnover, or simply wanting to move forward. Having a clear order of operations makes the physical part easier to manage.",
        ],
      },
      {
        heading: "1. Separate before you sort",
        paragraphs: [
          "Before diving into every drawer, do a first pass to separate items into three broad buckets: keep (family items, documents, anything of sentimental or financial value), sell or donate, and haul. You don't need to make every decision immediately, just get things into the right room or area.",
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
          "If there's enough furniture or valuable items to justify an estate sale or auction, that typically needs to happen before a full cleanout. Sale companies usually want the property untouched until their event is done. If you're not doing a sale, this step can be skipped entirely.",
        ],
      },
      {
        heading: "4. Schedule the full cleanout",
        paragraphs: [
          "Once keep and sale items are out, the rest (furniture, appliances, garage and attic contents, general household items) can be cleared in a single visit. We walk the property, quote the full scope, and clear it top to bottom, including outbuildings if needed.",
          "If you're coordinating around a closing date or realtor showing, let us know up front. We regularly work around those deadlines.",
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
          "Garages have a way of becoming the default storage for everything without an obvious home, until one day there's a narrow walking path and no room for the car. Here's how to approach getting it back under control without it turning into an all-weekend project.",
        ],
      },
      {
        heading: "1. Work in zones, not the whole room at once",
        paragraphs: [
          "Trying to sort the entire garage in one pass is overwhelming and usually stalls out. Break it into zones (one wall, one shelving unit, one corner) and finish each zone before moving to the next.",
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
          "You don't need the whole garage perfectly organized before scheduling a cleanout. Most people just need the 'definitely going' pile removed to actually see what they're working with. We can clear a first pass, and you can handle finer organizing once there's breathing room.",
        ],
      },
      {
        heading: "5. Think vertical once it's cleared",
        paragraphs: [
          "Once the floor is clear, wall-mounted shelving or a slat-wall system keeps things from creeping back into chaos. It's much easier to maintain an organized garage than to reclaim one from scratch a second time.",
        ],
      },
    ],
  },
  {
    slug: "what-can-be-donated-vs-junk",
    title: "What Can Be Donated vs. What Just Needs to Go",
    excerpt:
      "A quick, honest guide to what local charities can actually use, and what's better off going straight to disposal.",
    category: "Donation & Disposal",
    date: "2026-06-25",
    readMinutes: 4,
    body: [
      {
        paragraphs: [
          "One of the most common questions we get is whether something can be donated instead of hauled to disposal. Local donation centers are genuinely helpful for a lot of household items, but they also have real limits on what they can accept, and knowing the difference saves everyone time.",
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
          "When we haul a job, we route anything in donatable condition to local charities rather than defaulting straight to disposal. It costs you nothing extra and keeps usable items out of a landfill. Items that don't meet donation standards are disposed of responsibly instead.",
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
          "Spring cleaning tends to get put off because it feels like an all-or-nothing project. Breaking it into a room-by-room plan over a couple of weekends makes it far more likely to actually get done, and gives you a natural point to schedule a junk pickup for whatever you're clearing out.",
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
          "These spaces tend to accumulate the most over a full year: lawn equipment, holiday decorations, half-finished projects. Clearing them in spring, before yard work season ramps up, means your tools and equipment are actually accessible when you need them.",
        ],
      },
      {
        heading: "Then move room by room indoors",
        paragraphs: [
          "Closets, spare rooms, and basements are natural places for clutter to collect over winter. Tackle one room per weekend rather than trying to do the whole house at once. It's far more sustainable and less likely to stall out halfway through.",
        ],
      },
      {
        heading: "Schedule the haul-away last",
        paragraphs: [
          "Once you've got a pile, whether it's from the yard, garage, or inside the house, that's the point to text us a photo. Most homeowners in Taylorsville and Hickory end up combining yard debris, garage items, and household clutter into a single pickup, which is more efficient than separate trips for each.",
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
          "Moving day has a way of clarifying exactly what's actually worth the cost and hassle of moving, and what's better off left behind. If you're facing a move-out deadline with furniture that isn't making the trip, here's how to handle it without scrambling at the last minute.",
        ],
      },
      {
        heading: "Decide early, not on move-out day",
        paragraphs: [
          "The biggest mistake is leaving this decision until the moving truck is already loaded. Walk through the home a few days before your move and flag anything that's staying. This gives you time to schedule a pickup instead of leaving it curbside and hoping for the best.",
        ],
      },
      {
        heading: "Check your lease or closing terms",
        paragraphs: [
          "Rental leases and home sale agreements often require the property to be left empty and broom-clean. Leaving furniture behind without arranging removal can result in charges from a landlord or delay a closing, so it's worth confirming this before your move-out date.",
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
  {
    slug: "questions-to-ask-junk-removal-company",
    title: "5 Questions to Ask Before You Hire a Junk Removal Company",
    excerpt:
      "Not all junk removal companies operate the same way. Here's what to ask before you book, so there are no surprises on pickup day.",
    category: "Hiring Tips",
    date: "2026-07-10",
    readMinutes: 4,
    body: [
      {
        paragraphs: [
          "Junk removal is a fairly unregulated industry, and pricing structures, insurance, and disposal practices vary a lot between companies. A few quick questions before you book can save you from surprise charges or a job that doesn't get finished right.",
        ],
      },
      {
        heading: "1. Is the price locked in before the truck shows up?",
        paragraphs: [
          "Ask whether the quote is a firm price or just an estimate that could change once the crew sees the job. A company that can quote confidently from a photo has done enough of these jobs to price accurately up front.",
        ],
      },
      {
        heading: "2. What happens to the items after pickup?",
        paragraphs: [
          "Responsible companies route usable furniture and goods to donation when possible, rather than sending everything straight to a landfill. It's worth asking directly rather than assuming.",
        ],
      },
      {
        heading: "3. Are they insured?",
        paragraphs: [
          "Moving heavy items through doorways, down stairs, and across floors carries some risk of property damage. A company that carries insurance is protecting you, not just themselves.",
        ],
      },
      {
        heading: "4. How is the crew reached directly?",
        paragraphs: [
          "Some larger franchises route everything through a national call center, which can mean delays getting a straight answer. Ask if you're talking to the actual crew that will show up, or a booking line several layers removed from the work.",
        ],
      },
      {
        heading: "5. What's their actual availability?",
        paragraphs: [
          "If you need something gone this week, ask directly rather than assuming based on a website. Smaller, local operations can often move faster than large franchises juggling a wide service radius.",
        ],
      },
    ],
  },
  {
    slug: "storm-cleanup-yard-debris-nc",
    title: "After the Storm: Handling Yard Debris Cleanup in Western NC",
    excerpt:
      "Storms in the Taylorsville and Hickory area can leave a yard buried in limbs and debris fast. Here's how to prioritize the cleanup.",
    category: "Seasonal",
    date: "2026-07-11",
    readMinutes: 4,
    body: [
      {
        paragraphs: [
          "Storm season in western North Carolina can turn a clean yard into a mess of downed limbs and scattered debris overnight. Knowing how to prioritize the cleanup keeps things manageable instead of overwhelming.",
        ],
      },
      {
        heading: "Safety first, always",
        paragraphs: [
          "Before touching anything, check for downed power lines and structural damage to your home, garage, or any outbuildings. If a limb is resting on a power line or your roof, that's a call to the power company or a professional, not a DIY cleanup task.",
        ],
      },
      {
        heading: "Clear access points first",
        paragraphs: [
          "Prioritize your driveway, walkways, and anywhere you need daily access before worrying about the rest of the yard. This gets your property functional again quickly, even if full cleanup takes a few more days.",
        ],
      },
      {
        heading: "Don't feel like you need to bundle or bag debris",
        paragraphs: [
          "A lot of people assume yard waste has to be cut, bundled, or bagged before it can be hauled off. For a bulk pickup, that's not necessary. We load debris as-is, which saves you hours of prep work after an already stressful storm.",
        ],
      },
      {
        heading: "Scale the cleanup to the damage",
        paragraphs: [
          "A few fallen limbs is a quick single-trip job. Widespread storm damage across a property may need multiple truck runs. Either way, get a quote based on the actual scope rather than guessing at cost beforehand.",
        ],
      },
    ],
  },
  {
    slug: "downsizing-decluttering-before-a-move",
    title: "Downsizing Before a Move: What to Let Go Of First",
    excerpt:
      "Downsizing to a smaller home is as much a mental process as a physical one. Here's a practical way to start.",
    category: "Moving",
    date: "2026-07-12",
    readMinutes: 5,
    body: [
      {
        paragraphs: [
          "Downsizing, whether it's moving to a smaller home, a retirement community, or simply simplifying, is one of the harder decluttering projects, because almost everything has some history attached. A practical framework makes it less overwhelming.",
        ],
      },
      {
        heading: "Start with true duplicates",
        paragraphs: [
          "Multiples of the same item (a second couch, extra dining chairs, redundant kitchen tools) are the easiest decisions in the whole process. Clearing duplicates first builds momentum without requiring any emotional weighing.",
        ],
      },
      {
        heading: "Measure your new space before deciding on furniture",
        paragraphs: [
          "It's much easier to decide what furniture is coming with you when you know exactly what will fit. Measure the new space first, then work backward to figure out which pieces make sense. This turns an emotional decision into a practical one.",
        ],
      },
      {
        heading: "Set aside, don't decide on, sentimental items",
        paragraphs: [
          "Items with strong sentimental value are the hardest to make quick calls on. Rather than forcing a decision under time pressure, set them in a separate area to revisit once the bulk of the easier decisions are already made.",
        ],
      },
      {
        heading: "Handle the big stuff in one haul",
        paragraphs: [
          "Once you know what's staying, the rest (furniture, appliances, garage and closet contents) can go in a single pickup rather than multiple smaller trips. This is usually the point people call us: after the sorting is done and it's just a matter of getting it out of the house.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
