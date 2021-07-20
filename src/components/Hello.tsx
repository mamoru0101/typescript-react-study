import React from 'react';

type HelloProps = {
  message: string;
}

const Hello = ({message}: HelloProps) => {
  return <h1>Hello {message}</h1>
}
export default Hello