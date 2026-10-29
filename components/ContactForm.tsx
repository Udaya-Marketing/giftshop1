"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
    <div className="form-row"><div><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required /></div><div><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div></div>
    <label htmlFor="contact-subject">What can we help with?</label><select id="contact-subject" name="subject" defaultValue=""><option value="" disabled>Choose a subject</option><option>Finding a gift</option><option>Wedding favours</option><option>Corporate order</option><option>Delivery question</option></select>
    <label htmlFor="contact-message">A little more about it</label><textarea id="contact-message" name="message" rows={5} required />
    <button className="button button-dark" type="submit">{submitted ? "Message noted" : "Send your note"}</button><p className="form-note" aria-live="polite">{submitted ? "Thank you for writing. This demo form is ready to connect to your inbox or CRM." : "We’ll be in touch within two working days."}</p>
  </form>;
}
