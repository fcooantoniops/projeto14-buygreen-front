import Product from "./Product.js";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledProducts = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

export default function Products() {

    const [products, setProducts] = useState([]);

    console.log(products)

    useEffect(() => {
		const request = axios.get("http://localhost:5000/products");


		request.then(response => {
			setProducts(response.data);
		});

        console.log(products)
	}, []);

    if(products.length === 0) {
		return <h2>Buscando as plantinhas pra você cuidar...</h2>;
	}

    return (
        <StyledProducts>
            {products.map((m, index) => {
        return <Product key={index} m={m} />
      })}
        </StyledProducts>
    )
}