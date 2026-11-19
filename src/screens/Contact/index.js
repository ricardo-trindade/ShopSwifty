import { ScrollView, Text, View, TextInput, Pressable } from "react-native";
import {
  Container,
  HeaderContainer,
  HeaderTitle,
  FormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormTextArea,
  SendButton,
  SendButtonText,
  BackButton,
  BackButtonText,
} from "./style";

export const Contact = ({ onNavigate }) => {
  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={() => onNavigate("home")}>
          <BackButtonText>← Voltar</BackButtonText>
        </BackButton>
        <HeaderTitle>Manda uma <Text style={{ color: "#375EE7" }}>Mensagem</Text></HeaderTitle>
      </HeaderContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <FormContainer>
          <FormField>
            <FormLabel>E-mail:</FormLabel>
            <FormInput placeholder="seu@email.com" />
          </FormField>

          <FormField>
            <FormLabel>Assunto:</FormLabel>
            <FormInput placeholder="Qual é o assunto?" />
          </FormField>

          <FormField>
            <FormLabel>Mensagem:</FormLabel>
            <FormTextArea
              placeholder="Digite sua mensagem..."
              multiline={true}
              numberOfLines={5}
            />
          </FormField>

          <SendButton onPress={() => onNavigate("home")}>
            <SendButtonText>Enviar</SendButtonText>
          </SendButton>
        </FormContainer>
      </ScrollView>
    </Container>
  );
};
