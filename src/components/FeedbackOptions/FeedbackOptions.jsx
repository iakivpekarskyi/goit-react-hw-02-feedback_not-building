import { render } from '@testing-library/react';
import PropTypes from 'prop-types';

import { Btn, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <Btn type="button" key={option} onClick={onLeaveFeedback}>
            {option}
          </Btn>
        );
      })}
    </Wrapper>
  );
};
