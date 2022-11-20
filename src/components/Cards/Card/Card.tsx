import React from 'react';
import style from '../cards.module.css';
import { IApiData } from '../../../Interface';

const Card = (props: { cards: IApiData }): JSX.Element => {
  const item = props.cards;
  return (
    <div className={style.card} id={item._id}>
      <div className={style.image}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={style.title}>
        <h1
          style={{
            fontSize: 25,
            margin: 0,
          }}
        >
          {item.title}
        </h1>
        <p>{item.year}</p>
      </div>
      <div className={style.plot} style={{ textOverflow: 'ellipsis' }}>
        {item.synopsis}
      </div>
    </div>
  );
};

export default Card;
