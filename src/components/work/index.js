import React from "react";
import Reveal from "../reveal";
import { artifacts } from "../../content_option";

const Record = ({ a }) => (
  <Reveal as="article" className="record" id={a.id}>
    <div className="record__head">
      <span className="record__id">{a.id.toUpperCase()}</span>
      <span className="record__tag">{a.tag}</span>
      <span className="record__year">{a.year}</span>
    </div>
    <h3 className="record__title">{a.title}</h3>
    <p className="record__lead">{a.lead}</p>
    <dl className="spec">
      <div className="spec__row">
        <dt>Objective</dt>
        <dd>{a.objective}</dd>
      </div>
      <div className="spec__row">
        <dt>Process</dt>
        <dd>
          <ol className="proc">
            {a.process.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </dd>
      </div>
      <div className="spec__row">
        <dt>Tools</dt>
        <dd>
          <ul className="chips">
            {a.tools.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </dd>
      </div>
      <div className="spec__row spec__row--value">
        <dt>Value</dt>
        <dd>{a.value}</dd>
      </div>
      <div className="spec__row spec__row--take">
        <dt>Transferable</dt>
        <dd>{a.transferable}</dd>
      </div>
    </dl>
  </Reveal>
);

const Work = () => {
  return (
    <section className="band" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>Six artifacts, each documented end to end</h2>
          <p>
            Skim the index, then open any record. Each follows the same structure —{" "}
            <strong>Objective · Process · Tools · Value</strong> — with a note on what's transferable to your own work.
          </p>
        </Reveal>

        <Reveal as="nav" className="index" aria-label="Artifact index">
          {artifacts.map((a) => (
            <a href={`#${a.id}`} key={a.id}>
              <span className="ix-id">{a.id.toUpperCase()}</span>
              <span className="ix-title">{a.title}</span>
              <span className="ix-meta">{a.indexMeta}</span>
            </a>
          ))}
        </Reveal>

        <div className="records">
          {artifacts.map((a) => (
            <Record a={a} key={a.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
