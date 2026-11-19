import { Image, ScrollView, Text, View } from "react-native";
import {
  Container,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductPriceValue,
  AddButton,
  BackButton,
  BackButtonText,
} from "./style";
import imageProduct from "../../assets/imageProduct.png";

export const Products = ({ onNavigate }) => {
  const products = [
    { id: 1, name: "Tênis descolado do melhor corre...", price: "800.00" },
    { id: 2, name: "Tênis descolado do melhor corre...", price: "800.00" },
    { id: 3, name: "Tênis descolado do melhor corre...", price: "800.00" },
    { id: 4, name: "Tênis descolado do melhor corre...", price: "800.00" },
    { id: 5, name: "Tênis descolado do melhor corre...", price: "800.00" },
    { id: 6, name: "Tênis descolado do melhor corre...", price: "800.00" },
  ];

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={() => onNavigate("home")}>
          <BackButtonText>← Voltar</BackButtonText>
        </BackButton>
        <HeaderTitle>Nossos <Text style={{ color: "#375EE7" }}>Produtos</Text></HeaderTitle>
      </HeaderContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage source={imageProduct} />
              <ProductName>{product.name}</ProductName>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <ProductPrice>
                  <Text style={{ fontSize: 12, color: "#999" }}>R$</Text>
                  <ProductPriceValue>{product.price}</ProductPriceValue>
                </ProductPrice>
                <AddButton>
                  <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>+</Text>
                </AddButton>
              </View>
            </ProductCard>
          ))}
        </ProductsGrid>
      </ScrollView>
    </Container>
  );
};
