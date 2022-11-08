import PropTypes from 'prop-types';
import { RatingText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <RatingText>Good: {good}</RatingText>
      <RatingText>Neutral: {neutral}</RatingText>
      <RatingText>Bad: {bad}</RatingText>
      <RatingText>Total: {total}</RatingText>
      <RatingText>Positive feedback: {positivePercentage}%</RatingText>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
