/* eslint-disable react/prop-types */
import { useState } from 'react';

export const Form = ({ handleSubmit }) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    handleSubmit(input);
    setInput('');
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="input"
        placeholder="Enter new note"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />

      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
};
