import React from 'react';

export interface Props {
  searchChange: (ev : React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ searchChange } : Props) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search gifts'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;