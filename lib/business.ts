export const business = {
  name: "L&S Removal Services",
  legalName: "L&S Removal Services LLC",
  tagline: "Fireman-Owned Junk Removal",
  phone: "(828) 639-1126",
  phoneRaw: "+18286391126",
  email: "info@lsremovalservices.com",
  city: "Taylorsville",
  state: "NC",
  region: "Alexander County & the greater Charlotte area",
  url: "https://www.lsremovalservices.com",
  founded: "Fireman-owned and operated",
  hours: [
    { day: "Monday – Saturday", time: "7:00 AM – 7:00 PM" },
    { day: "Sunday", time: "By request" },
  ],
};

export const smsHref = `sms:${business.phoneRaw}?&body=${encodeURIComponent(
  "Hi L&S, I'd like a quote for junk removal: "
)}`;
export const telHref = `tel:${business.phoneRaw}`;
export const mailHref = `mailto:${business.email}?subject=${encodeURIComponent(
  "Junk removal quote request"
)}`;
