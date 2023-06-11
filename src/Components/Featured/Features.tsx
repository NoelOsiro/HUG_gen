import React from 'react';
import './feat.css';
interface Ifeats {
  icon: string,
  title: string,
  description:string
  isBackground?:boolean
}
const Features = () => {
  const featureBoxes: Ifeats[] = [
    {
      icon: 'bi bi-award',
      title: 'Empower',
      description: 'Empowering through education, training, and resources to create positive change in lives and communities.',
    },
    {
      icon: 'bi bi-gender-trans',
      title: 'Inclusivity',
      description: 'Promote inclusivity by valuing and respecting diversity and ensuring that all voices are heard and represented, regardless of gender, race, ethnicity, religion, or socio-economic status.',
      isBackground: true,
    },
    {
      icon: 'bi bi-globe-europe-africa',
      title: 'Sustainability',
      description: 'Prioritize sustainable practices & solutions.Promote eco-friendly practices, advocate for policies & empower individuals for a sustainable future',
    },
  ];

  return (
    <section id="featured-services">
      <div className="container">
        <div className="row">
          {featureBoxes.map((box, index) => (
            <FeatureBox
              key={index}
              icon={box.icon}
              title={box.title}
              description={box.description}
              isBackground={box.isBackground}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureBox = (props:Ifeats) => {
  const boxClassName = `col-lg-4 col-md-12 col-sm-12 box ${props.isBackground ? 'box-bg' : ''}`;

  return (
    <div className={boxClassName}>
      <i className={props.icon}></i>
      <h4 className="title">
        {/* eslint jsx-a11y/anchor-is-valid: 0 */}
        <a>{props.title}</a>
      </h4>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Features;
