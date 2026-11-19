import styled from "styled-components/native";

export const NavContainer = styled.View`
    flex-direction: row;
    background-color: #ffffff;
    border-bottom-width: 1px;
    border-bottom-color: #e0e0e0;
    padding: 0 20px;
    gap: 20px;
`;

export const NavButton = styled.Pressable`
    padding: 15px 0;
`;

export const NavButtonText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.active ? '#375EE7' : '#999'};
    border-bottom-width: ${props => props.active ? '2px' : '0'};
    border-bottom-color: #375EE7;
    padding-bottom: 5px;
`;

export const Container = styled.View`
    gap: 40px;
    padding-left: 20px;
    padding-bottom: 40px;
`

export const HighlightsSection = styled.View`
    gap: 5px;
`

export const TitleHighlight = styled.Text`
    font-size: 25px;
    font-weight: 700;
`

export const TextHighlight = styled.Text`
    color: #375EE7
`

export const Scroll = styled.ScrollView.attrs({
    contentContainerStyle:{
        gap: 20
    }
})``
