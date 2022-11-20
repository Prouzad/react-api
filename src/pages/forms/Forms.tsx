import Cards from 'components/Cards/cards';
import { IApiData } from 'Interface';
import React from 'react';
import { Component } from 'react';
import AddCards from './AddCards/AddCards';

// eslint-disable-next-line @typescript-eslint/ban-types
class Forms extends Component<
  { callback: (obj: IApiData) => void },
  { cards: IApiData[]; disabled: boolean; show: boolean }
> {
  formCardArr: IApiData[] | undefined;
  constructor(
    props: { callback: (obj: IApiData) => void } | Readonly<{ callback: (obj: IApiData) => void }>
  ) {
    super(props);
    this.state = {
      cards: [],
      disabled: true,
      show: false,
    };
    this.addFormCard = this.addFormCard.bind(this);
    this.changeSubmitBtn = this.changeSubmitBtn.bind(this);
    this.changeShowState = this.changeShowState.bind(this);
  }

  addFormCard = (obj: IApiData) => {
    this.props.callback(obj);
    const cards = this.state.cards;
    this.setState({
      cards: [...cards, obj],
      show: false,
    });
  };

  changeShowState = () => {
    this.setState({
      show: true,
    });
  };

  changeSubmitBtn = (num: number) => {
    const booleanResult = num > 0;
    this.setState({ disabled: !booleanResult });
  };

  render(): React.ReactNode {
    const { cards, show } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AddCards
          callback={this.addFormCard}
          changeDisabled={this.changeSubmitBtn}
          changeShowState={this.changeShowState}
          dis={this.state.disabled}
        />
        <h1 style={{ display: show ? 'block' : 'none', color: 'green' }}>
          Сard added successfully{' '}
        </h1>
        {cards.length !== 0 ? <Cards dataArr={cards} /> : <h1>Nout Found</h1>}
      </div>
    );
  }
}

export default Forms;
