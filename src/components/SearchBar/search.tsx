import React, { FormEvent } from 'react';

const Search: React.FC<{
  callback(e: FormEvent<HTMLFormElement>): void;
  setTerm(e: { target: { value: string } }): void;
  term: string;
}> = (props) => {
  const { term } = props;
  return (
    <div style={{ display: 'flex', width: '90vw', justifyContent: 'flex-end', margin: 25 }}>
      <form onSubmit={props.callback}>
        <input
          type="text"
          value={term}
          onChange={props.setTerm}
          placeholder="Search"
          style={{ width: 250, borderRadius: '15px', height: 18, padding: 5 }}
        />
      </form>
    </div>
  );
};

export default Search;
