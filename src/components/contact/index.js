import React from "react";
import Reveal from "../reveal";
import { contact, logotext } from "../../content_option";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact__in">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2>{contact.headline}</h2>
          <p>{contact.blurb}</p>
        </Reveal>
        <Reveal className="contact__links">
          {contact.links.map((l, i) => (
            <a href={l.href} key={i}>
              <span className="k">{l.k}</span> {l.label}
            </a>
          ))}
        </Reveal>
      </div>
      <footer className="foot">
        <div className="wrap foot__in">
          <span>© 2026 {logotext}</span>
          <span>Portfolio of Artifacts</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
