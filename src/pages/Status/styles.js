import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${props => props.theme.colors.secundary};
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin-left: 20px;
`;