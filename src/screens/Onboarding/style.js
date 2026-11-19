import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 60px;
`;

export const IllustrationContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0;
`;

export const ContentOnboarding = styled.View`
  gap: 30px;
  width: 100%;
`;

export const TextTitle = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: #2d3133;
  text-align: center;
`;

export const TextHighlight = styled.Text`
  color: #375ee7;
`;

export const TextDescription = styled.Text`
  font-size: 16px;
  color: #666666;
  text-align: center;
  line-height: 24px;
`;

export const ButtonEnter = styled.Pressable`
  background-color: #375ee7;
  border-radius: 8px;
  padding: 15px 0;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
