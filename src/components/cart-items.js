import React,{useState} from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-stars";

const CartItem = (props) => {
  const { children, brand, title, images, price, description, rating, onClick } = props;
  const [index, setIndex] = useState(0);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="img" variant="top" src={images[index]} />
      <div className="d-flex gap-20 mt-2">
        {
          images.map((el, i) =>{
            return <img key={i} className=" gap-2" width={30} height={30} onClick={() => setIndex(i)} src={images[i]} alt=""
            style={{gap:"10px", border: i === index ? "2px solid red" : null}} />
          })
        }
      </div>
      <Card.Body>
        <div className="title d-flex gap-2 justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Card.Title>{brand}</Card.Title>
        </div>
        <div className="description">
          <Card.Text>{description}</Card.Text>
        </div>

        <ReactStars
          size={30}
          value={rating}
        />
        
        <div className="btn d-flex align-items-center justify-content-between">
            <span>{price} $</span>
          <Button variant="primary" onClick={onClick}>{children}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;