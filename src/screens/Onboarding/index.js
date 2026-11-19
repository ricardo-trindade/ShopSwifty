import { Image, Text, View } from "react-native";
import {
  Container,
  ContentOnboarding,
  ButtonEnter,
  TextButton,
  TextDescription,
  TextTitle,
  TextHighlight,
  IllustrationContainer,
} from "./style";
import logo from "../../assets/logoShopSwift.png";

export const Onboarding = ({ onNavigate }) => {
  return (
    <Container>
      <IllustrationContainer>
        <Image source={logo} style={{ width: 150, height: 150 }} />
      </IllustrationContainer>

      <ContentOnboarding>
        <TextTitle>
          Encontre o que <TextHighlight>você ama</TextHighlight>
        </TextTitle>

        <TextDescription>
          Descubra milhares de produtos das melhores marcas com preços incríveis.
        </TextDescription>

        <ButtonEnter onPress={() => onNavigate("login")}>
          <TextButton>Entrar</TextButton>
        </ButtonEnter>

        <Text style={{ textAlign: "center", color: "#666", fontSize: 12 }}>
          Já tem conta? <Text style={{ color: "#375EE7", textDecorationLine: "underline", fontWeight: "bold" }} onPress={() => onNavigate("login")}>Fazer login</Text>
        </Text>
      </ContentOnboarding>
    </Container>
  );
};
