import React from 'react';

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
      title: 'Lorem Ipsum Delino',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    },
    {
      icon: 'bi bi-card-checklist',
      title: 'Dolor Sitema',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      isBackground: true,
    },
    {
      icon: 'bi bi-binoculars',
      title: 'Sed ut perspiciatis',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
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
  const boxClassName = `col-lg-4 box ${props.isBackground ? 'box-bg' : ''}`;

  return (
    <div className={boxClassName}>
      <i className={props.icon}></i>
      <h4 className="title">
        <a href="">{props.title}</a>
      </h4>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Features;
