import { imageUrl } from "@/data/site";

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
  body: string[];
};

export const posts: JournalPost[] = [
  {
    slug: "how-to-choose-a-thoughtful-gift",
    title: "How to choose a thoughtful gift",
    excerpt: "A few gentle questions can make finding the right thing feel much less like guesswork.",
    date: "2026-03-12",
    readTime: "4 min read",
    image: imageUrl("photo-1511988617509-a57c8a288659"),
    alt: "A dinner table set for friends sharing a thoughtful celebration",
    body: [
      "The best gifts tend to begin with noticing. What does their Sunday look like? Which little ritual do they protect? What do they reach for when the day finally slows down?",
      "Start with a feeling rather than a price tag. A generous afternoon, a welcome home, a quiet congratulations — once you know what you want the gift to say, the right pieces become easier to find.",
      "Then leave room for the human detail. A name written by hand, a note that sounds like you, or one familiar favourite tucked beside something new can turn a lovely box into their box.",
    ],
  },
  {
    slug: "wedding-favour-ideas-with-a-personal-touch",
    title: "Wedding favour ideas with a personal touch",
    excerpt: "Small gestures, chosen with care, give guests something to remember long after the last dance.",
    date: "2026-02-20",
    readTime: "5 min read",
    image: imageUrl("photo-1519741497674-611481863552"),
    alt: "A softly styled wedding table with flowers and thoughtful details",
    body: [
      "A favour does not need to be grand. It needs to feel like you. Think of the details guests will find on the table: a little local treat, a pressed flower, a handwritten note tucked beneath the ribbon.",
      "Choose something people can enjoy there or take home easily. Useful, edible and personal are a lovely trio — and seasonal ingredients or flowers bring the place into the story.",
      "A few well-chosen details feel more generous than a table crowded with things. Keep the packaging simple, let the materials speak, and add one note that tells guests why you chose it.",
    ],
  },
  {
    slug: "a-more-human-corporate-gifting-guide",
    title: "A more human corporate gifting guide",
    excerpt: "Make the thank-you feel like it came from a person, not a procurement form.",
    date: "2026-01-28",
    readTime: "4 min read",
    image: imageUrl("photo-1497366754035-f200968a6e72"),
    alt: "A calm, light-filled workspace ready to welcome a new colleague",
    body: [
      "A good work gift makes someone feel seen. That might be a warm welcome for a new teammate, a well-earned thank-you or a small mark of a team milestone.",
      "Think about the person opening it. Can the collection be adapted for dietary needs? Is the note signed by a real colleague? Does each piece have a story worth sharing?",
      "Plan for the practical details early — delivery windows, addresses and a consistent presentation — so the personal part can take centre stage when the parcels arrive.",
    ],
  },
];
