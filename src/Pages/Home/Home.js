import React, { useEffect, useState } from 'react';
import Products from './Products';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import './Home.css';
import Grid from '@mui/material/Grid/Grid';
import Cart from './Cart';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';



const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // filter method by name
    const [filterParam, setFilterParam] = useState(["All"]);
    // filter method by veg
    const [filterParamVeg, setFilterParamVeg] = useState(["All"]);

    // search method
    const [q, setQ] = useState("");
    const [searchParam] = useState(["name"]);

    useEffect(() => {
        fetch("CafeData.json")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    // console.log(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);


    const search = (items) => {
        return items.filter((item) => {
            if (filterParam == "All") {
                if (filterParamVeg == "All") {
                    return searchParam.some((newItem) => {
                        return (
                            item[newItem]
                                .toString()
                                .toLowerCase()
                                .indexOf(q.toLowerCase()) > -1
                        );
                    })
                }
                else if (item.category_veg == filterParamVeg) {
                    return searchParam.some((newItem) => {
                        return (
                            item[newItem]
                                .toString()
                                .toLowerCase()
                                .indexOf(q.toLowerCase()) > -1
                        );
                    })
                }
            }

            else if (item.category == filterParam) {
                if (filterParamVeg == "All") {
                    return searchParam.some((newItem) => {
                        return (
                            item[newItem]
                                .toString()
                                .toLowerCase()
                                .indexOf(q.toLowerCase()) > -1
                        );
                    })
                }
                else if (item.category_veg == filterParamVeg) {
                    return searchParam.some((newItem) => {
                        return (
                            item[newItem]
                                .toString()
                                .toLowerCase()
                                .indexOf(q.toLowerCase()) > -1
                        );
                    })
                }
            }
        })
    }


    // cart system
    const [addQuantity, setAddQuantity] = useState("");
    console.log(addQuantity);
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        console.log(product);
        const newProduct = {
            id: product.id,
            price: product.price,
            img: product.image,
            name: product.name,
            productQuantity: addQuantity,

        }
        const newCart = [...cart, newProduct]
        setCart(newCart)
    }
    console.log(cart);

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {


        return (
            <div>

                {/* search section */}
                <div className='hero_search'>
                    <select

                        input={<OutlinedInput label="Name" />}
                        onChange={(e) => {
                            setFilterParam(e.target.value);
                        }}

                        className="custom-select"
                        aria-label="Filter  By Category">
                        <option value="All">All</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Burger">Burger</option>
                        <option value="Fish">Fish</option>

                    </select>



                    <select

                        onChange={(e) => {
                            setFilterParamVeg(e.target.value);
                        }}
                        className="custom-select"
                        aria-label="Filter By Veg">
                        <option value="All">All</option>
                        <option value="Veg">Veg</option>
                        <option value="NonVeg">NonVeg</option>
                    </select>


                    <Form inline={true}>
                        <Input
                            type='search'
                            name='search-form'
                            placeholder='Search .....'
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </Form>
                </div>

                {/* all item get by map method  */}
                <div className='hero_cart' >
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 1, md: 8 }}>
                        {search(items).map(item => <Grid xs={1} sm={1} md={4}>
                            <Products
                                key={item.id}
                                item={item}
                                handleAddToCart={handleAddToCart}
                                addQuantity={addQuantity}
                                setAddQuantity={setAddQuantity}
                            ></Products>
                        </Grid>)}
                    </Grid>
                    <div className='shopping_cart'>
                        <Cart
                            cart={cart}
                        ></Cart>
                    </div>
                </div>
            </div>
        );
    }

};

export default Home;