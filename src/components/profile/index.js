import React from "react";
import Reveal from "../reveal";
import { profile } from "../../content_option";

const Profile = () => {
  return (
    <section className="band section--alt" id="profile">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Profile</p>
          <h2>The engineer behind the artifacts</h2>
        </Reveal>

        <Reveal className="profile">
          <div>
            {profile.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="focus">
              {profile.focus.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="side">
              <h3>Experience</h3>
              <ul className="tl">
                {profile.experience.map((e, i) => (
                  <li key={i}>
                    <span className="tl-role">{e.role}</span>
                    <span className="tl-when">{e.when}</span>
                    <span className="tl-co">{e.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal as="dl" className="skills">
          {profile.skills.map((s, i) => (
            <div className="skills__row" key={i}>
              <dt>{s.label}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </Reveal>

        <Reveal as="ul" className="edu">
          {profile.education.map((e, i) => (
            <li key={i}>
              <div className="edu-deg">{e.deg}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-when">{e.when}</div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Profile;
