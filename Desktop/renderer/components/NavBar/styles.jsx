import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa'

export const Container = styled.div`
  width: 36%;
  height: 100vh;
  padding: 15px;

  border-right-color: ${({ theme }) => theme.colors.quarterly};
  border-right-style: solid;
  border-right-width: 2px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`;

export const Header = styled.header`
  width: 100%;
  height: 6vh;
  margin-bottom: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.div`
  width: 70%;
  height: 14px;
  padding: 6px 12px 6px 12px;

  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 `;

export const Input = styled.input`
  width: 86%;
  height: 80%;

  font-size: .68em;
  color: ${({ theme }) => theme.colors.text };

  background: transparent;
  border: none;
  outline: none;
`;


// ICONS
export const Lupa = styled(FaSearch)`
  color: ${({ theme }) => theme.colors.text };
`;