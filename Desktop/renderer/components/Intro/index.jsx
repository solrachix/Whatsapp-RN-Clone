import React from 'react';

// import intro from '../../public/images/intro.jpg';
import Text from '../Text';
import { Container, Img } from './styles';

export default function Intro() {
  return (
    <Container>
      <div className="content">
        <Img src="https://web.whatsapp.com/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg"/> 
        <Text
          size={1.6}
          align="center"
          text="Mantenha seu celular conectado" />
        <Text
          size={0.8}
          color="rgba(255,255,255, .6)"
          align="center"
          text="O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi." />
      </div>    
    </Container>
  );
}
