import styled from 'styled-components';

export const Text = styled.p`
  /* width: 100%; */
  font-family: Roboto, sans-serif;
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size}em;
  font-weight: ${({ bold }) => bold};
  color: ${({ color }) => color};
  margin: 0;
`;