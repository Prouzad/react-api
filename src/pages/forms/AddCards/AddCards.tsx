import { IApiData, ICallback } from 'Interface';
import React, { Component } from 'react';

import styleClass from './AddCards.module.css';

class AddCards extends Component<{
  callback: (obj: IApiData) => void;
  changeDisabled: (num: number) => void;
  changeShowState: () => void;
  dis: boolean;
}> {
  title: React.RefObject<HTMLInputElement>;
  year: React.RefObject<HTMLInputElement>;
  synopsis: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  constructor(props: ICallback) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.title = React.createRef();
    this.year = React.createRef();
    this.synopsis = React.createRef();
    this.file = React.createRef();
  }
  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const obj = {
      title: this.title.current?.value,
      year: this.year.current?.value,
      synopsis: this.synopsis.current?.value,
      image: URL.createObjectURL(this.file.current!.files![0]),
    };
    this.props.changeShowState();
    setTimeout(() => {
      this.title.current!.value = '';
      this.year.current!.value = '';
      this.synopsis.current!.value = '';
      this.props.callback(obj);
    }, 1500);
  }

  handleChange(event: { preventDefault: () => void }) {
    event.preventDefault();
    const obj = {
      name: this.title.current?.value,
      year: this.year.current?.value,
      synopsis: this.synopsis.current?.value,
    };

    const resultArr = Object.values(obj).filter((item) => item!.length > 0);
    resultArr.length > 0 ? this.props.changeDisabled(1) : this.props.changeDisabled(0);
  }
  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { dis } = this.props;
    return (
      <form
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label>
          Name:
          <input
            placeholder="Write name cinema"
            type="text"
            ref={this.title}
            className={styleClass.myInput}
            required
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            placeholder="Write year cinema"
            min="1900"
            max="2099"
            step="1"
            ref={this.year}
            className={styleClass.myInput}
            required
          />
        </label>
        <label>
          Plot:
          <input
            placeholder="Write plot cinema"
            type="text"
            ref={this.synopsis}
            size={50}
            className={styleClass.myInput}
            required
          />
        </label>
        <label>
          image:
          <input placeholder="Write plot cinema" type="file" ref={this.file} required />
        </label>
        <input type="submit" value="Submit" disabled={dis} className={styleClass.myBtn} />
      </form>
    );
  }
}

export default AddCards;
