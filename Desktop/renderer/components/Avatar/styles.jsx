import styled from 'styled-components';

export const Avatar = styled.nav`
  width: 30px;
  height: 30px;

  background: url(${({ url }) => url}) no-repeat;
  background-size: contain;
  border-radius: 50px;

  &:after{
    content: "";
    position: absolute;
    margin-top: 2%;
    margin-left: 2%;

    width: 8px;
    height: 8px;

    background: ${({ statusColor }) => statusColor};
    border: 4px solid ${({ theme }) => theme.colors.secondary };
    border-radius: 50px;
  }
`;
