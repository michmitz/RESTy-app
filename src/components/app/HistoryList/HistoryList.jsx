import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../HistoryItem/HistoryItem';

const HistoryList = ({ history }) => {
  const historylist = history.map(historyitem => (
    <li key={`${historyitem.url}+${historyitem.method}`}>
        <HistoryItem {...historyitem} />
    </li>
  ));

  return (
    <ul data-testid="articles-list">
      {historylist}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;