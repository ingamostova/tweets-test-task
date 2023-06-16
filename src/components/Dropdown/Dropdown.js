import { useState } from 'react';
import { Container } from './Dropdown.styled';

export const Dropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const togleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container onClick={togleMenu}>
      OPEN
      {menuOpen && (
        <>
          <button>show all</button>
          <button>follow</button>
          <button>followings</button>
        </>
      )}
    </Container>
  );
};
