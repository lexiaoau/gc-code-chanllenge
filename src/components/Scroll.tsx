import React from 'react';

const Scroll = (props : any) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px groove grey', height: 'auto'}}>
      {props.children}
    </div>
  );
};

export default Scroll;