import React from "react";
import NavBar from "../components/organisme/navBar";
import Container from "../components/atom/container";
import Image from "../components/atom/image";
import { Cloud, Img2, Chat, Touch } from "../assets";
import Title from "../components/atom/title";
import Text from "../components/atom/text";
import TextContainer from "../components/atom/textContainer";
import Card from "../components/atom/card";
import Colors from "../components/color/colors";
import Footer from "../components/organisme/footer";


const AboutPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container
        resMargin="0"
        resAlign="center"
        resWidth="100%"
        resPadding="0"
        height="100%"
        padding="10px 0 45px 0"
      >
        <>
          <Title margin="50px 0 2% 0 ">O QUE É A LITTLEDEV?</Title>
          <Image src={Img2} resHeight="55%" />
          <TextContainer w="70%" h="100%">
            <Text margin="35px 25px 25px 25px" resMargin=" 15px 0">
              É um aplicativo onde você pode facilmente gerenciar e compartilhar
              projetos individuais ou em equipe, agendar reuniões de vídeo e
              utilizar nosso chat para se comunicar com outros membros da equipe
              em tempo real.
            </Text>
            <Text margin="25px" resMargin="15px 0">
              Além disso, nosso aplicativo permite a criação de grupos e
              comunidades voltados para a programação, onde você pode se
              conectar com outros programadores e trocar informações relevantes
              para sua carreira.
            </Text>
            <Text margin="25px" resMargin="15px 0">
              No futuro, estaremos implementando uma área voltada para a
              comunidade, onde programadores poderão compartilhar suas ideias e
              solucionar problemas em conjunto, em um ambiente colaborativo e
              enriquecedor.
            </Text>
          </TextContainer>

          <Container
            flexDirection="row"
            height="100%"
            resFlexDirection="column"
            resAlign="center"
          >
            <>
              
                <Card
                  width="20%"
                  flexDirection="column"
                  height="350px"
                  align="center"
                  justify="space-evenly"
                  margin="0 25px 0 0"
                  resHeight="400px"
                  resWidth="50%"
                  resMargin="25px 0 0 0"
                >
                  <Container
                    height="40%"
                    width="70%"
                    background={Colors.pink}
                    borderRadius="50%"
                    resWidth="50%"
                    resAlign="center"
                    resDisplay="none"
                  >
                    <Image
                      src={Cloud}
                      resHeight="55%"
                      resMargin="0"
                      resMinWidth="0px"
                      resWidth="45%"
                      resDisplay="block"
                    />
                  </Container>

                  <Text textAlign="center" margin="0">
                    Integração ao GitHub
                  </Text>
                </Card>
             

              <Card
                width="20%"
                flexDirection="column"
                height="350px"
                align="center"
                justify="space-evenly"
                margin="0 25px 0 0"
                resHeight="400px"
                resWidth="50%"
                resMargin="25px 0 0 0"
              >
                <Container
                  height="40%"
                  width="70%"
                  background={Colors.pink}
                  borderRadius="50%"
                  resWidth="40%"
                  resAlign="center"
                  resDisplay="none"
                >
                  <Image
                    src={Touch}
                    resHeight="55%"
                    resMargin="0"
                    resMinWidth="0px"
                    resWidth="45%"
                  />
                </Container>

                <Text textAlign="center" margin="0">
                  Inteface fácil de usar
                </Text>
              </Card>

              <Card
                width="20%"
                flexDirection="column"
                height="350px"
                align="center"
                justify="space-evenly"
                margin="0 25px 0 0"
                resMargin="25px 0 0 0"
                resHeight="400px"
                resWidth="50%"
              >
                <Container
                  height="40%"
                  width="70%"
                  background={Colors.pink}
                  borderRadius="50%"
                  resWidth="40%"
                  resAlign="center"
                  resDisplay="none"
                >
                  <Image
                    src={Chat}
                    resHeight="55%"
                    resMargin="0"
                    resMinWidth="0px"
                    resWidth="45%"
                  />
                </Container>

                <Text textAlign="center" margin="0">
                  Suporte ao usuário
                </Text>
              </Card>
            </>
          </Container>
        </>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
