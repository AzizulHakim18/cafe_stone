import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Products = ({ item, handleAddToCart, setAddQuantity, addQuantity }) => {
    // console.log(item);
    const { image, category, id, name, prices, quantity, varients, description } = item;


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    // console.log(addQuantity);

    return (

        <div >


            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            Quantity: <select name="" id="" onChange={(e) => { setAddQuantity(e.target.value) }}>
                                {[...Array(5).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select>

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => { handleAddToCart(item) }}>
                        Buy Now
                    </Button>
                    <Button size="small" color="primary" onClick={handleOpen}>
                        More Details
                    </Button>
                </CardActions>
            </Card>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            ><Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {item.name}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {description}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

        </div>

    );
};

export default Products;