export type Review = {
  name: string;
  rating: number;
  text: string;
  source: string;
};

export const reviews: Review[] = [
  {
    name: "Michael White",
    rating: 5,
    text: "Excellent service and reasonable prices. Friendly and professional. Highly recommended.",
    source: "Facebook",
  },
  {
    name: "James Thompson-Whitfield",
    rating: 5,
    text: "This company was great to work with. On time, professional and affordable. I recommend these guys 110%. Excellent service.",
    source: "Facebook",
  },
];
