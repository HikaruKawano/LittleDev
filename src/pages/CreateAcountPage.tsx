import React from "react";

import Text from "../components/atom/text";
import Btn from "../components/atom/btn";
import Title from "../components/atom/title";
import Colors from "../components/color/colors";
import Container from "../components/atom/container";
import Card from "../components/atom/card";
import Form from "../components/atom/form";
import Input from "../components/atom/input";
import NavLink from "../components/atom/navLink";

const CreateAcount: React.FC = () => {
  return (
    <>
      <Container resAlign="center" resMargin="0">
        <Card width="40%" height="90%" flexDirection="column"  resWidth="90%" resAlign="flex-start" align="flex-start">
        <NavLink to="/" color='gray' height="auto" margin="25px 0 0 25px"> Voltar </NavLink>
          <Form>
            <>
            
              <Title margin="0 0 5% 0">Criar conta</Title>

              <Input inputtype="email" placeholder="Email"></Input>

              <Input inputtype="password" placeholder="Senha"></Input>

              <Input inputtype="password" placeholder="Comfirme a Senha"></Input>

              <NavLink to="/Connect" padding="0" height="auto">
                <Text color="gray" fontSize="larger" margin="5px 0 25px 0">
                  Já possuo uma conta
                </Text>
              </NavLink>

              <Btn width="25%" height="7%" bg={Colors.verde}>
                <NavLink to="/">Criar Conta</NavLink>
              </Btn>
            </>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default CreateAcount;
