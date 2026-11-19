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

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const ProductsGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
  gap: 15px;
  justify-content: space-between;
`;

export const ProductCard = styled.View`
  width: 48%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px;
  gap: 10px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

export const ProductName = styled.Text`
  font-size: 13px;
  color: #2d3133;
  font-weight: 500;
`;

export const ProductPrice = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const ProductPriceValue = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #375ee7;
`;

export const AddButton = styled.Pressable`
  background-color: #375ee7;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;
