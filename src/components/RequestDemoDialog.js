import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { sendEmail } from '../services/EmailService';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function RequestDemoDialog({ handleClose, open }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const request = {
                name: name,
                email: email
            }
            const responseData = await sendEmail(request);
            console.log(responseData)
        } catch (error) {
            console.log(error.message)
        }

        handleClose();
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            sx={{
                fontWeight: "bold",
                backgroundColor: "transparent !important", // Transparent background
                boxShadow: "none !important", // No box shadow
            }}
            PaperProps={{
                sx: {
                    backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent black background
                },
            }}
        >
            <DialogTitle sx={{ m: 0, fontWeight: "bold", padding: "20px !important" }} id="customized-dialog-title">
                Contact
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'black',
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers sx={{
                fontWeight: "bold !important",
                padding: "30px !important"
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography sx={{
                            fontWeight: "bold !important",

                        }} variant="h5">Enter Name</Typography>
                        <TextField sx={{
                            fontWeight: "bold !important",

                        }}
                            placeholder="Name"
                            variant="outlined"
                            fullWidth
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{
                            fontWeight: "bold !important",

                        }} variant="h5">Enter Email</Typography>
                        <TextField
                            placeholder="Email"
                            variant="outlined"
                            fullWidth
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{
                padding: "20px !important"
            }}>
                <Button variant="contained" style={{
                    color: "#000000",
                    backgroundColor: "#ffffff", fontWeight: "bold"
                }} autoFocus onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}
