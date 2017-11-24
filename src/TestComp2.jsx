import React from 'react';

export default props => {
  const { prop1 } = props
  return <div>{prop1 ? `prop1: ${prop1.name} = ${prop1.value}` : 'NULL'}</div>
};
