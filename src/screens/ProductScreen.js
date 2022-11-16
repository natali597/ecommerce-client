import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Raiting from "../components/Raiting";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../featuers/card";
import { useSelector } from "react-redux";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.card.value);

  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/api/products/${id}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const addToCart = () => {
    dispatch(add({ id: id, name: product.name, image: product.image }));
  };

  return (
    <div>
      <Link className="btn btn-light my-3 " to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={product && product.image}
            alt={product && product.name}
            fluid
          ></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product && product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Raiting
                color={"gold"}
                value={product && product.raiting}
                text={`${product && product.numReviews} reviews`}
              ></Raiting>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product && product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product && product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product && product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product && product.countInStock > 0
                      ? "In Stock"
                      : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product && product.countInStock === 0}
                  onClick={() => addToCart()}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
