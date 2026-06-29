// ---------------------------------------------------------------------------
// Company info (NAP, stats, social links).
//
// Centralized so all surfaces of the site read from one source of truth.
// Items still marked PLACEHOLDER need real values — verify the street
// address, phone, social URLs, license number, and stat figures before
// publishing publicly.
// ---------------------------------------------------------------------------

export const company = {
  name: "Apex Capital Realty",
  tagline:
    "Breaking away from traditional industrial brokerage and bringing an edge to today's market.",
  // NAP — Name, Address, Phone. PLACEHOLDER street pending confirmation.
  address: {
    street: "Office address — TBD", // PLACEHOLDER
    city: "Orlando",
    state: "FL",
    zip: "32801", // PLACEHOLDER ZIP — downtown Orlando default
  },
  phone: "(407) 337-4312", // PLACEHOLDER — confirm main office line
  email: "info@apexcapitalrealty.com", // PLACEHOLDER
  // Downtown Orlando coordinates as a placeholder for the embedded map.
  geo: { lat: 28.5383, lng: -81.3792 },
  social: {
    linkedin: "https://www.linkedin.com/", // PLACEHOLDER
    instagram: "https://www.instagram.com/", // PLACEHOLDER
    facebook: "https://www.facebook.com/", // PLACEHOLDER
    youtube: "https://www.youtube.com/", // PLACEHOLDER
  },
};

// Company performance stats. PLACEHOLDER numbers — clearly marked as editable.
// Replace with verified, current figures before launch.
export const companyStats = [
  { value: "$1.5B+", label: "In transactions" }, // PLACEHOLDER
  { value: "300M+", label: "Sq ft transacted" }, // PLACEHOLDER
  { value: "75+", label: "Years combined experience" }, // PLACEHOLDER
  { value: "500+", label: "Clients represented" }, // PLACEHOLDER
];
