import PropTypes from 'prop-types';
import { BtnFeedback, BtnList } from './FeedbackOptions.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(feedback => (
        <li key={feedback}>
          <BtnFeedback type="button" onClick={() => onLeaveFeedback(feedback)}>
            {feedback}
          </BtnFeedback>
        </li>
      ))}
    </BtnList>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
