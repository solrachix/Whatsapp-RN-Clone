import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    /* padding: 0px 10px 0px 10px; */
    display: flex;
    flex: 1;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    z-index: 1;
    .content{
        display: flex;
        height: 100%;
        width: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Img = styled.img`
    width: 200px;
    height: 200px;

    margin: 30px auto;
    transform-origin: center;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
`;