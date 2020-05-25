import React from 'react';

import { Container, Title } from './styles';

export default function HeaderCF({ name }) {
  return (
    <Container>
        <Title>{name}</Title>
    </Container>
  );
}
