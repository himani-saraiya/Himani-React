import {ShoppingBasket } from "@mui/icons-material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
  AppBar,
  Button,
  IconButton,
  Rating,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";


const URL = "https://fakestoreapi.com/products";

const FatchData = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState([]);
  const [id, setId] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (el) => {
    setCount(parseFloat(count + 1));
    setId(el.id);
  };

  useEffect(() => {
    fatch();
  }, []);

  const fatch = () => {
    axios
      .get(URL)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filteredProducts = product.filter((el) => {
    return el.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <TextField
              style={{ width: "500px" }}
              focused
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: <SearchIcon style={{ color: "white" }} />,
              }}
            />
          </Typography>
          <Typography variant="h6" component="div">
          <ShoppingCartCheckoutIcon color="white" />
            Cart: {count} :: Id: {id}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="main">
        <div className="btn-group-sm" style={{ marginTop: "20px" }}>
        </div>
        {filteredProducts.map((el) => {
          return (
            <div className="card" key={el.id}>
              <div className="img">
                <img
                  className="image card-img-top"
                  src={el.image}
                  alt="abc"
                ></img>
              </div>

              <h1 style={{ fontFamily: "sans-serif" }}>
                Id:{el.id}
                <br />
                category:{el.category}
                <br />
                price:{el.price}
                <br />
                Title:{el.title}
                <br />
                <br />
                Rating:
                <Rating />
              </h1>
              <IconButton
                variant="outlined"
                color="error"
                aria-label="add to shopping cart"
                onClick={() => handleAddToCart(el)}
              >
                Add to Cart
                <AddShoppingCartIcon />
              </IconButton>
              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate(`/products/${el.id}`)}
              >
                <ShoppingBasket />
                Buy
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FatchData;
