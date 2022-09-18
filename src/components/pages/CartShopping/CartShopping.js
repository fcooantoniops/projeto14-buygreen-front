import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";

function CardProduct({
  name,
  img,
  price,
  body,
  setBody,
  idProduct,
  idUser,
  atualizar,
  setAtualizar,
  selected,
}) {
  const [checked, setChecked] = useState("false");
  const [buttDelete, setButtDelete] = useState(false);

  function addBody() {
    setBody([...body, idProduct]);

    const promise = axios.put("http://localhost:5000/cartShopping", {
      name,
      price,
      img,
      idProduct,
      selected: "true",
    });
    promise
      .then(() => {
        setChecked("true");
        setAtualizar(!atualizar);
      })
      .catch(() => {
        alert("erro");
      });
  }

  function deleteBody() {
    const promise = axios.put("http://localhost:5000/cartShopping", {
      name,
      price,
      img,
      idProduct,
      selected: "false",
    });
    promise
      .then(() => {
        setChecked("false");
        setAtualizar(!atualizar);
      })
      .catch(() => {
        alert("erro");
      });

    setBody(body.filter((valor) => valor !== idProduct));
  }

  function deleteProduct() {
    const promisse = axios.delete("/cartShopping", { idProduct, idUser });
    promisse
      .then(() => {
        setButtDelete(!buttDelete);
        setAtualizar(!atualizar);
      })
      .catch(() => {
        alert("erro");
      });
  }

  return (
    <>
      <Card>
        {checked === "false" &&
        (selected === "false" || selected === undefined) ? (
          <BsCheckSquare
            onClick={addBody}
            style={{ fontSize: 45, color: "white" }}
          />
        ) : (
          <BsCheckSquareFill
            onClick={deleteBody}
            style={{ fontSize: 45, color: "white" }}
          />
        )}

        <Img src={img} alt="planta" />
        <CaixaInf>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </CaixaInf>
        <ButtonDelete onClick={deleteProduct}>
          {buttDelete === false ? (
            <AiOutlineDelete style={{ color: "white", fontSize: 32 }} />
          ) : (
            <AiFillDelete style={{ color: "white", fontSize: 32 }} />
          )}
        </ButtonDelete>
      </Card>
    </>
  );
}

export default function CartShopping() {
  const navigate = useNavigate();
  const [body, setBody] = useState([]);
  const [products, setProducts] = useState([]);
  const [atualizar, setAtualizar] = useState([]);

  useEffect(() => {
    const promisse = axios.get(`http://localhost:5000/cartShopping`);
    promisse
      .then((resposta) => {
        setProducts(resposta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [atualizar]);

  console.log("oooooooo", body);

  function purchase() {
    const promisse = axios.post("/http://localhost:5000/checkout", body);
    promisse
      .then(() => {
        navigate("/checkout");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Background>
        <Container>
          <Topo>
            <IoArrowBack
              onClick={() => navigate("/products")}
              style={{ fontSize: 35, color: "white" }}
            />
            <Center>
              <Titulo>Buy Green</Titulo>
            </Center>
          </Topo>
          {products.map(({ name, price, img, _id, selected, idUser }) => (
            <CardProduct
              name={name}
              price={price}
              img={img}
              body={body}
              selected={selected}
              setBody={setBody}
              idProduct={_id}
              idUser={idUser}
              atualizar={atualizar}
              setAtualizar={setAtualizar}
            />
          ))}
          <Footer>
            <Button onClick={purchase}>Comprar</Button>
          </Footer>
        </Container>
      </Background>
    </>
  );
}

const ButtonDelete = styled.div`
  width: 33px;
  height: 40px;
  margin: 0 auto;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Titulo = styled.div`
  margin-right: 40px;
  color: white;
  font-size: 2.5rem;
`;

const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  align-items: center;
  padding-left: 15px;
  background-color: #193631;
  width: 100vw;
  height: 50px;
`;

const CaixaInf = styled.div`
  width: 100%;
  font-size: 18px;
  margin: 10px 5px;
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  margin: 8px 8px;
  font-size: 18px;
  word-wrap: break-word;
  color: white;
`;

const Img = styled.img`
  margin: 7px;
  border-radius: 4px;
  height: 75%;
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 5px;
  padding: 10px;
  width: 90vw;
  height: 140px;
  border-radius: 5px;
  background-color: rgb(97, 176, 118);
`;

const Button = styled.button`
  width: 200px;
  height: 42px;
  margin: 4px;
  font-size: 18px;
  border-radius: 5px;
  background-color: rgb(97, 176, 118);
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: #193631;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 100vw;
  padding: 0px 5px 0px 5px;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-wrap: normal;
  box-sizing: border-box;
`;

const Background = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #193631;
`;
