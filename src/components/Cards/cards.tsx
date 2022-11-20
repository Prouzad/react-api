import React, { Component } from 'react';
import { IApiData } from '../../Interface';
import Card from './Card/Card';

class Cards extends Component<{ dataArr: IApiData[] }> {
  constructor(props: { dataArr: IApiData[] }) {
    super(props);
  }

  render(): React.ReactNode {
    const { dataArr } = this.props;
    const arr = dataArr.map((card: IApiData) => {
      return <Card key={card._id} cards={card} />;
    });
    return arr.length !== 0 ? arr : <h1>Cards not found </h1>;
  }
}

export default Cards;
