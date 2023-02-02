import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import QuoteList from './components/QuoteList';
import axios from 'axios';
function App() {
  const [quotes, setQuotes] = useState([]);
  const getQuotes = () => {
    axios.get('https://api.quotable.io/random').then(res => setQuotes([res.data, ...quotes]));
  };
  useEffect(() => {
    if (quotes.length) {
      const id = setInterval(() => {
        getQuotes();
      }, 30000);
      return () => clearInterval(id);
    } else {
      getQuotes();
    }
  }, [quotes]);

  return (
    <div className="App">
      <Header />
      {/* {quotes.map(q => (
        <div key={q._id}>
          <q>{q.content}</q>
          <strong>- {q.author}</strong>
        </div>
      ))} */}
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;
