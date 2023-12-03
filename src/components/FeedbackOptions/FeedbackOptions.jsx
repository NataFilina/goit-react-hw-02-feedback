import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <>
      <button
        key={uuidv4()}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className={css.btn}
      >
        {option}
      </button>
    </>
  ));
};
