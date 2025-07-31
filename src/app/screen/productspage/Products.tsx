import React from "react";
import {Box, Button, Container, Stack} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search" ;
import MonetizationOnIcon from"@mui/icons-material/MonetizationOn" ;
import  RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../../css/product.css";


const products = [
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "kebab", imagePath: "/img/kebab.webp"},
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "kebab", imagePath: "/img/kebab.webp"},
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    
  

]
export default function Products(){
    return (<div className="products">
         <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
                <Stack className="avatar-big-box">
                    <Stack className={"top-text"}>
                        <p>Burak Restaraunt</p>
                    </Stack>
                    <Stack className={"single-button-search"}></Stack>
                </Stack>
                <Stack className="dishes-filter-section">
                    <Stack className="dishes-filter-box">
                        <Button
                        variant="contained"
                        color={"primary"}
                        className={"order"}>
                            New
                        </Button>
                       <Button
                        variant="contained"
                        color={"secondary"}
                        className={"order"}>
                            Price
                        </Button>
                         <Button
                        variant="contained"
                        color={"secondary"}
                        className={"order"}>
                            Views
                        </Button>
                    </Stack>
                </Stack>

                <Stack className="list-category-section">
                    <Stack className="product-category">
                        <div className={"category-main"}>
                            <Button variant={"contained"} color={"secondary"}>
                                Other
                            </Button>
                            <Button variant={"contained"} color={"secondary"}>
                                Dessert
                            </Button>
                            <Button variant={"contained"} color={"secondary"}>
                                Drink
                            </Button>
                            <Button variant={"contained"} color={"secondary"}>
                                Salad
                            </Button>
                            <Button variant={"contained"} color={"primary"}>
                                Dish
                            </Button>
                        </div>
                    </Stack>

                    <Stack className={"product-wrapper"}>
                        {products.length !== 0 ? (
                            products.map((product, index) =>{
                                return (
                                    <Stack key ={index} className={"product-card"}>
                                        <Stack
                                        className={"product-img"}
                                        sx={{backgroundImage: `url(${product.imagePath})`}}
                                        >
                                            <div className={"product-sale"}>Normal size</div>
                                            <Button className={"shop-btn"}>
                                                <img
                                                src={"/icons/shopping-cart.svg"}
                                                style={{display: "flex"}}/>
                                            </Button>
                                            <Button className={"view-btn"} sx={{right: "36px"}}>
                                                <Badge badgeContent={20} color="secondary">
                                                    <RemoveRedEyeIcon
                                                    sx={{
                                                        // color: product.views >20 ? "gray" : "white"
                                                        color: "gray"
                                                    }}/>
                                                </Badge>
                                            </Button>
                                        </Stack>
                                        <Box className={"product-desc"}>
                                            <span className={"product-title"}>
                                                {product.productName}
                                            </span>
                                            <div className={"product-desc"}>
                                                <MonetizationOnIcon/>
                                                {12}
                                            </div>
                                        </Box>
                                    </Stack>
                                )
                            })
                        ) : (
                            <Box className={"no-data"}>Products are not available</Box>
                        )}
                    </Stack>
                </Stack>

                <Stack className="pagination-section">
                    <Pagination
                    count={3}
                    page={1}
                    renderItem={(item)=>(
                        <PaginationItem
                        components={{
                            previous: ArrowBackIcon,
                            next: ArrowForwardIcon
                        }}
                        {...item}
                        color={"secondary"}/>
                        )}
                        />
                </Stack>
            </Stack>
        </Container>
        <div className="brand-logo">
            <Container className={"family-brands"}>
                <Box className={"category-title"}>Our family Brands</Box>
                <Stack className={"brand-list"}>
                    
                     <Box className={"review-box"}>
                        <img src={"/img/seafood.webp"}/>
                    </Box>
                     <Box className={"review-box"}>
                        <img src={"/img/sweets.webp"}/>
                    </Box>
                     <Box className={"review-box"}>
                        <img src={"/img/doner.webp"}/>
                    </Box>
                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"}/>
                    </Box>
                    
                </Stack>
            </Container>
        </div>

        <div className="address">
            <Container>
                <Stack className={"address-area"}>
                    <Box className={"title"}>Our address</Box>
                    <iframe
                    style={{marginTop: "60px"}}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47938.853071100435!2d69.2350318!3d41.3267357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b68ce3db0a1%3A0xd55f39a4a1e8d055!2sRayhon!5e0!3m2!1sru!2skr!4v1753883712132!5m2!1sru!2skr"
                    width= "1320"
                    height="500"

                    ></iframe>
                </Stack>
            </Container>
        </div>
        </div>
        );
}