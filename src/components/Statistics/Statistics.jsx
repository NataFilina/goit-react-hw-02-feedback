import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './Statistics.module.css';
import { Notification } from '../Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>

      {total ? (
        <>
          <p key={uuidv4()} className={css.statistic}>
            Good:{good}
          </p>
          <p key={uuidv4()} className={css.statistic}>
            Neutral:{neutral}
          </p>
          <p key={uuidv4()} className={css.statistic}>
            Bad:{bad}
          </p>
          <p key={uuidv4()} className={css.statistic}>
            Total:{total}
          </p>
          <p key={uuidv4()} className={css.statistic}>
            Positive feedback: {positiveFeedback}%
          </p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
