import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    height: 100px;

    background: ${props => props.theme.colors.secundary};
`;