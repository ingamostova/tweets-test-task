import PropTypes from 'prop-types';
import { Container, Select } from './Dropdown.styled';

export const Dropdown = ({ selectedFilter, onChange }) => {
  return (
    <Container>
      <Select value={selectedFilter} onChange={onChange}>
        <option value="all">Show All</option>
        <option value="follow">Follow</option>
        <option value="following">Followings</option>
      </Select>
    </Container>
  );
};

Dropdown.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
