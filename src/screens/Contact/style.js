import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const HeaderContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  gap: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const BackButton = styled.Pressable`
  background-color: transparent;
  padding: 8px 12px;
`;

export const BackButtonText = styled.Text`
  color: #375ee7;
  font-size: 16px;
  font-weight: 600;
`;

export const HeaderTitle = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #2d3133;
`;

export const FormContainer = styled.View`
  padding: 20px;
  gap: 20px;
`;

export const FormField = styled.View`
  gap: 8px;
`;

export const FormLabel = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #2d3133;
`;

export const FormInput = styled.TextInput`
  border-width: 1px;
  border-color: #2d3133;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
`;

export const FormTextArea = styled.TextInput`
  border-width: 1px;
  border-color: #2d3133;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  text-align-vertical: top;
`;

export const SendButton = styled.Pressable`
  background-color: #375ee7;
  border-radius: 8px;
  padding: 15px 0;
  margin-top: 10px;
`;

export const SendButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
