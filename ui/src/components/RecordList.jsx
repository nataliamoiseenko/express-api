/* eslint-disable react/prop-types */
import { RecordItem } from './RecordItem';

export const RecordList = ({ records }) => {
  return (
    <ul>
      {records.map((record) => (
        <RecordItem key={record.id} {...record} />
      ))}
    </ul>
  );
};
