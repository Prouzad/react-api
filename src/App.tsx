import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimeService from 'components/ApiService';
import './App.css';
import MainPage from 'pages/main/main';
import HeaderApp from './components/header/header';
import PageNotFound from 'pages/pageNotFound/pageNoutFound';
import AboutUs from 'pages/about/about';

import { IApiData } from 'Interface';
import Forms from 'pages/forms/Forms';

const Anime = new AnimeService();

class App extends Component<unknown, { data: IApiData[]; loading: boolean; show: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      show: true,
    };
    this.addNewCard = this.addNewCard.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  async componentDidMount() {
    try {
      const data = await Anime.getData();
      this.setState({
        data: data.data,
        loading: false,
      });
    } catch (error) {
      console.log('Error', error);
    }
  }

  addNewCard = (obj: IApiData) => {
    const data = this.state.data;
    this.setState({
      data: [...data, obj],
    });
  };

  changeDate = async (value: string) => {
    this.setState({ ...this.state, loading: true });
    try {
      const data = await Anime.getSearch(value);
      this.setState({
        data: data.data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        data: [],
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <HeaderApp />

        <Routes>
          <Route
            path="/"
            element={
              this.state.loading ? (
                <h1>Loading .....</h1>
              ) : (
                <MainPage dataArr={this.state.data} callback={this.changeDate} />
              )
            }
          />
          <Route path="/about" element={<AboutUs data={this.state.data} />} />
          <Route path="/forms" element={<Forms callback={this.addNewCard} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
