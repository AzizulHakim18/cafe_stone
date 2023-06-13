import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Cart = ({ cart }) => {
    console.log(cart.length);
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
                                    </Typography>
                                    Price:{ }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                </List>)}
            </div>
        </div>
    );
};

export default Cart;