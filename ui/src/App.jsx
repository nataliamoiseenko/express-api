import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { RecordList } from './components/RecordList';

function App() {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((res) => setRecords(res));
  }, []);

  const handleSubmit = useCallback(
    (input) => {
      fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({ record: input }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((res) => setRecords([...res, ...records]));
    },
    [records]
  );

  const clear = () => {
    fetch(`http://localhost:3000/delete`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then(() => setRecords([]));
  };

  return (
    <div className="app">
      <div className="container">
        <Form handleSubmit={handleSubmit} />

        <button
          className="button"
          onClick={clear}
          style={{ marginTop: '20px' }}
        >
          Clear All
        </button>

        <div className="bottom">
          {!records?.length ? (
            <div>Your notes are empty</div>
          ) : (
            <RecordList records={records} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
