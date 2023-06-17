import { BsArrowLeft } from 'react-icons/bs';
import { Btn } from './BackBtn.styled';

export const BackBtn = ({ to }) => {
  return (
    <Btn to={to}>
      <BsArrowLeft />
      Back
    </Btn>
  );
};
