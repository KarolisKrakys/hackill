import React, { FC, useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Popup from '../event_popup/EventPopup'

function EventBox(props: any){
    const [openModal, setOpenModal] = useState<boolean>(false);
    return(         
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card sx={{ width: 350, height: 225, marginTop:5, marginLeft:"auto",marginRight:"auto", display:"grid"}}>
            <CardContent>
                <Typography variant="h5" component="div" fontSize={20}>
                    {props.event_name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.event_type}
                </Typography>
                <Typography sx={{fontSize:12}}>
                 {props.time}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 13}} color="text.secondary">
                    {props.event_description}
                </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent: "space-between"}}>
                <Button className="openModalBtn" onClick={()=> setOpenModal(true)} size="small">Learn More</Button>
                <Button className="openModalBtn" size="small">Favorite</Button>
                {openModal && <Popup setOpenModal={setOpenModal} name={props.event_name}/>}
            </CardActions>
            </Card>
        </Grid>
    );
}

export default EventBox