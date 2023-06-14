import styled from '@emotion/styled';
import picture from '../../images/picture.png';

export const Item = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Container = styled.div`
  position: relative;
  border-bottom: 8px solid #ebd8ff;
  padding: 28px 36px 18px;
  /* height: 214px; */
`;

export const ContainerTop = styled.div`
  background-image: url(${picture});
  background-repeat: no-repeat;
  background-size: cover;
  width: 308px;
  height: 168px;
  /* padding: 28px 36px 18px; */
`;

export const ContainerBottom = styled.div`
  /* height: 238px; */
  text-align: center;
  padding-top: 54px;
  /* padding-bottom: 36px; */
`;

export const Image = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Info = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Btn = styled.button`
  width: 196px;
  height: 50px;
  background-color: ${({ isActive }) => (isActive ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: #373737;

  :hover {
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: 47%;
  left: 50%;
  height: 80px;
  width: 80px;
  border: 8px solid #ebd8ff;
  border-radius: 50px;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  transform: translate(-50%, -50%);
`;
