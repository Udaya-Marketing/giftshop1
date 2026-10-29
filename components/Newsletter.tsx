"use client";

import { useState } from "react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
      <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
      <input id="newsletter-email" name="email" type="email" placeholder="Your email address" required />
      <button className="button button-dark" type="submit">{submitted ? "You’re on the list" : "Count me in"}</button>
      <p className="form-note" aria-live="polite">{submitted ? "Thank you — a little note from us is on its way." : "A good note now and then. Never a crowded inbox."}</p>
    </form>
  );
}
