/* eslint-disable react/prop-types */
export const RecordItem = ({ record }) => {
  return (
    <li className="item">
      <p className="record">{record}</p>

      <button className="button">Remove</button>
    </li>
  );
};
