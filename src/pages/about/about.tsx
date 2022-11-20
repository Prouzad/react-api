import Cards from 'components/Cards/cards';
import { IApiData } from 'Interface';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AboutUs = (props: { data: IApiData[] }) => {
  const result = props.data.map((item) => {
    <img src={item.image} alt={item.title} />;
  });
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus consequuntur
        minima dicta aliquam perspiciatis. Inventore, unde officia quisquam sit veritatis veniam
        quia aperiam voluptas numquam, voluptatem consectetur a facilis.
      </p>
    </div>
  );
};

export default AboutUs;
