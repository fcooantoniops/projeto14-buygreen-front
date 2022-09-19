import styled from "styled-components"

const StyledProduct = styled.li`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 30vh;
`
const ProductImage = styled.img`
    max-width: 40vw;
    max-height: 20vh;

`
const ProductPrice = styled.p`

`
const ProductName = styled.h3`


`

export default function Product(props) {

    return (
        <StyledProduct>
            <ProductImage alt="" src={props.m.image} ></ProductImage>
            <ProductName>{props.m.name}</ProductName>
            <ProductPrice>{props.m.price}</ProductPrice>
        </StyledProduct>
    )
}