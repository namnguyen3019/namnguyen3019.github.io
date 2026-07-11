import React from "react";
import { hero } from "../../content_option";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="wrap hero__in">
        <p className="eyebrow">Portfolio of Artifacts</p>
        <h1>{hero.name}</h1>
        <p className="hero__role">
          {hero.roleLead}
          <b>{hero.roleEmph}</b>
          {hero.roleTail}
        </p>
        <p className="hero__thesis">{hero.thesis}</p>
        <p className="hero__loc">
          <span>
            <span className="dot"></span> {hero.location}
          </span>
          <span>{hero.availability}</span>
        </p>

        <div className="stats">
          {hero.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat__n">{s.n}</div>
              <div className="stat__l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
