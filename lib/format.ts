import { site } from "@/data/site";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: site.currency,
});

export function formatPrice(amount: number) {
  return currencyFormatter.format(amount);
}
