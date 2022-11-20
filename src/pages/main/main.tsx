import Cards from 'components/Cards/cards';
import Search from 'components/SearchBar/search';
import React, { Component, FormEvent } from 'react';
import { IApiData } from 'Interface';
import style from './main.module.css';
import AnimeService from 'components/ApiService';
import Modal from 'components/Modal/Modal';

const Anime = new AnimeService();

class MainPage extends Component<
  {
    dataArr: IApiData[];
    callback: (value: string) => void;
  },
  { data: IApiData[]; term: string; show: boolean; cardDate: object }
> {
  cardsBox: React.RefObject<HTMLDivElement>;
  constructor(props: { dataArr: IApiData[]; callback: (value: string) => void }) {
    super(props);
    this.state = {
      data: this.props.dataArr,
      term: '',
      show: true,
      cardDate: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValueInput = this.getValueInput.bind(this);
    this.changeShow = this.changeShow.bind(this);
    this.cardsBox = React.createRef();
  }

  async componentDidMount() {
    this.cardsBox.current?.childNodes.forEach((card) => {
      card.addEventListener('click', async (e) => {
        const event = e.currentTarget as HTMLDivElement;
        const result = await Anime.getByID(event.id);
        this.setState({
          cardDate: result,
          show: false,
        });
      });
    });
    const formData = JSON.parse(localStorage.getItem('term')!);
    if (formData) {
      this.setState({
        term: formData,
      });
    }
  }

  componentWillUnmount(): void {
    const result = this.state.term;
    localStorage.setItem('term', JSON.stringify(result));
  }

  getValueInput = (e: { target: { value: string } }) => {
    const res = e.target.value;

    this.setState({
      term: res,
    });
  };

  handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.callback(this.state.term);
  };

  changeShow = () => {
    const doc = document.querySelector('.Modal_modalContainer__MwIrw');
    doc?.addEventListener('click', (e) => {
      const el = e.target as HTMLElement;
      e.stopPropagation();
      if (el.className === 'Modal_buttonX__mpzTP') {
        this.setState({
          show: true,
        });
      }
    });
    this.setState({
      show: true,
    });
  };

  render() {
    const { data, term, cardDate, show } = this.state;
    console.log(cardDate);
    return (
      <div>
        <Search callback={this.handleSubmit} setTerm={this.getValueInput} term={term} />
        <div id={style.cardBox} ref={this.cardsBox}>
          <Cards dataArr={data} />;
        </div>
        <Modal data={cardDate} showModal={show} callback={this.changeShow} />
      </div>
    );
  }
}
export default MainPage;
