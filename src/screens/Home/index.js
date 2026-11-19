import { Image, ScrollView, Pressable, Text } from "react-native"
import { Container, HighlightsSection, Scroll, TextHighlight, TitleHighlight, NavContainer, NavButton, NavButtonText } from "./style"
import logo from '../../assets/logoShopSwift.png'
import destaque1 from '../../assets/destaque1.png'
import destaque2 from '../../assets/destaque2.png'
import destaque3 from '../../assets/destaque3.png'
import { CategorySection } from "../../components/categorySection"
import { ProductsSection } from "../../components/ProductsSection"

export const Home = ({ onNavigate }) => {
    return(
        <>
            <NavContainer>
                <NavButton onPress={() => onNavigate('home')}>
                    <NavButtonText active={true}>Home</NavButtonText>
                </NavButton>
                <NavButton onPress={() => onNavigate('products')}>
                    <NavButtonText>Produtos</NavButtonText>
                </NavButton>
                <NavButton onPress={() => onNavigate('contact')}>
                    <NavButtonText>Contato</NavButtonText>
                </NavButton>
            </NavContainer>

            <ScrollView>

                <Container>

                    <Image source={logo} style={{ width: 120, height: 40 }} />

                    <HighlightsSection>

                        <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>

                        <Scroll horizontal showsHorizontalScrollIndicator={false}>
                            <Image source={destaque1} style={{ width: 300, height: 200, borderRadius: 8, marginRight: 15 }} />
                            <Image source={destaque2} style={{ width: 300, height: 200, borderRadius: 8, marginRight: 15 }} />
                            <Image source={destaque3} style={{ width: 300, height: 200, borderRadius: 8 }} />
                        </Scroll>

                    </HighlightsSection>

                    <CategorySection/>

                    <ProductsSection/>

                </Container>
            </ScrollView>
        </>
    )
}