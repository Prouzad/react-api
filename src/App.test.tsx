// import React from 'react';
// import { render, screen, within } from '@testing-library/react';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import Card from 'components/Cards/Card/Card';
// import Cards from 'components/Cards/cards';
// import Forms from 'pages/forms/Forms';

// import avengers from './assets/img/avengers.jpg';
// import topGun from './assets/img/topgun.jpg';
// import { IApiData } from 'Interface';

// const CardDate = [
//   {
//     _id: '1',
//     title: 'The Avengers',
//     year: '2012',
//     synopsis:
//       "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
//     image: avengers,
//   },
//   {
//     _id: '2',
//     title: 'Top Gun: Maverick',
//     year: '2022',
//     synopsis:
//       "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
//     image: topGun,
//   },
// ];

// const setLocalStorage = (id: string, data: { data: string }) => {
//   window.localStorage.setItem(id, JSON.stringify(data));
// };

// describe('renders learn react-components', () => {
//   it('App', () => {
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );
//     const linkElement = screen.getByText(/Ready Player One/i);
//     expect(linkElement).toBeInTheDocument();
//   }),
//     it('Cards', () => {
//       render(<Cards dataArr={CardDate} />);
//     });

//   it('Card', () => {
//     render(<Card cards={CardDate[0]} />);
//     const image = screen.getByRole('img');
//     expect(image).toHaveAttribute('src', 'avengers.jpg');
//   });

//   it('data is added into local storage', () => {
//     const mockId = '1';
//     const mockJson = { data: 'json data' };
//     setLocalStorage(mockId, mockJson);
//     expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
//   });
// });

// describe('renders learn react-forms', () => {
//   it('Input texts', () => {
//     render(
//       <Forms
//         callback={function (obj: IApiData): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByPlaceholderText('Write name cinema')).toBeInTheDocument();
//     expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
//   });
// });
