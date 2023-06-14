import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Cart = ({ cart }) => {
    console.log(cart.length);

    const totalProductsPrice = cart.reduce((x, y) => {
        return x + y.price;
    }, 0);
    console.log(totalProductsPrice);


    return (
        <div>
            <h3>Order Summery</h3>
            <div>
                {cart.map(cartItem => <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="" src={cartItem.img} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={cartItem.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Quantity: {cartItem.productQuantity}
                                        Price:{cartItem.price}
                                    </Typography >

                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                </List>)}
            </div>
            <h2>Sub Totall: {totalProductsPrice} BDT</h2>
            <Button variant="outlined">Pay Now</Button>
        </div>
    );
};

export default Cart;