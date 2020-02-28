import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.tertiary};
    height: 115px;
    border-top-color: ${props => props.theme.colors.quarterly};
    border-top-width: 0.5px;
    border-bottom-width: 0.5px;
    border-bottom-color: ${props => props.theme.colors.quarterly};
`;

export const UserStatus = styled.View`
    height: 88px;
    background-color: ${props => props.theme.colors.secundary};
    border-top-color: ${props => props.theme.colors.quarterly};
    border-top-width: 0.5px;
    margin-top: 0px;
`;
export const UserStatusBody = styled.View`
    flex-direction: row;
    padding: 15px;
    height: 80px;
    align-items: center;
    margin-left: 15px;
`;

export const HeaderText = styled.Text`
    height: 15px;
    font-size: 12px;
    color: ${props => props.theme.colors.text};
    /* margin-top: 30px; */
    margin-top: 5px;
    margin-left: 20px; 
`;

export const ContainerIcon = styled.View`
    height: 40px;
    width:  40px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.tertiary};
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`;

export const PlusCircleContainer = styled.View`
    margin-left: 35px;
    margin-top: 30px;
    background-color: ${props => props.theme.colors.secundary};
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;

export const TextContainer = styled.View`
    margin-left: 15px;
    height: 80px;
    justify-content: center;
`;
