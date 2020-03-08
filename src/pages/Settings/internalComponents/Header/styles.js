import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 35px;

    align-items: baseline;
    justify-content: space-between;
    flex-flow: column wrap;
    align-content: space-between;

    background-color: ${props => props.theme.colors.secundary};
    border-top-color: ${props => props.theme.colors.quarterly};
    border-top-width: 0.5px;
    border-bottom-width: 0.5px;
    border-bottom-color: ${props => props.theme.colors.quarterly};
`;

export const HeaderText = styled.Text`
    height: 20px;
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    /* margin-top: 30px; */
    margin-top: 5px;
    margin-left: 20px;
    padding-right: 20px;
`;
