import React from 'react';
import Quote from './Quote';
import Container from 'react-bootstrap/Container';
function QuoteList({ quotes }) {
  return (
    <>
      {quotes.map(quote => (
        <Quote quote={quote} key={quote._id} />
      ))}
    </>
  );
}

export default QuoteList;
