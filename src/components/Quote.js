import React from 'react';

function Quote({ quote }) {
  return (
    <div>
      <q>{quote.content}</q>
      <strong> - {quote.author}</strong>
      <hr />
    </div>
  );
}

export default Quote;
