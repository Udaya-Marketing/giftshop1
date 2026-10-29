export const site = {
  name: "Aster & Pine",
  tagline: "Gifts with a story to tell",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://asterandpine.example",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@asterandpine.example",
  location: "London, United Kingdom",
  currency: "INR",
  description:
    "Thoughtful gift boxes, keepsakes and celebration details, gathered by hand in London and sent with care around the world.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Occasions", href: "/occasions/birthday-gifts" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
  ],
};

export const imageUrl = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
