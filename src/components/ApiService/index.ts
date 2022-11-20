class AnimeService {
  url: string;
  options: { method: string; headers: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string } };
  constructor() {
    this.url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10';
    this.options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ade29be18emsh6f81bf67f0e39c3p1aa838jsn5b73548d7db1',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
      },
    };
    this.getData = this.getData.bind(this);
  }
  async getData() {
    try {
      const response = await fetch(this.url, this.options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async getSearch(title: string) {
    try {
      const response = await fetch(`${this.url}&search=${title}`, this.options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async getByID(id: string) {
    try {
      const res = await fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`, this.options);
      const data = await res.json();
      return await data;
    } catch (error) {
      return error;
    }
  }
}

export default AnimeService;
