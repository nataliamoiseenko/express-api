import { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { RecordList } from './components/RecordList';

function App() {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/test')
      .then((res) => res.json())
      .then((res) => setHello(res));
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Input />

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
