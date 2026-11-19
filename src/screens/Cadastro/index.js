import { Image, Text, View } from "react-native";
import logo from "../../assets/logoShopSwift.png";
import {
  Container,
  ContentCadastro,
  CreateAccountButton,
  FormContainer,
  Input,
  InputsContainer,
  TextButton,
  TextHighlight,
  TextLabel,
  TextLogin,
  TextNavigation,
  TextTitle,
} from "./style";

export const Cadastro = ({ onNavigate }) => {
  return (
    <Container>
      <Image source={logo} />

      <ContentCadastro>
        <TextTitle>
          Crie uma conta <TextHighlight>e se surpreenda</TextHighlight>
        </TextTitle>

        <FormContainer>
          <InputsContainer>
            <View>
              <TextLabel>E-mail:</TextLabel>
              <Input/>
            </View>

            <View>
              <TextLabel>Senha:</TextLabel>
              <Input />
            </View>

          </InputsContainer>

          <CreateAccountButton onPress={() => onNavigate('home')}>
            <TextButton>Criar conta</TextButton>
          </CreateAccountButton>

        </FormContainer>

        <TextLogin>Já tem conta? <TextNavigation onPress={() => onNavigate('login')}>Fazer login</TextNavigation></TextLogin>

      </ContentCadastro>
    </Container>
  );
};
