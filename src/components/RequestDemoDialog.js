import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { sendEmail } from '../services/EmailService';
import Alert from '@mui/material/Alert';

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
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("Something went wrong!");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setShowAlert(false);

            const trimmedEmail = email?.trim();
            const trimmedName = name?.trim();

            if (!trimmedEmail || !trimmedName) {
                setShowAlert(true);
                setAlertMessage("Oops! Invalid input.")
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const nameRegex = /^[a-zA-Z\s'-]+$/;

            if (!emailRegex.test(trimmedEmail) || !nameRegex.test(trimmedName)) {
                setShowAlert(true);
                setAlertMessage("Oops! Invalid input.")
                return;
            }

            const request = { name: trimmedName, email: trimmedEmail };
            const responseData = await sendEmail(request);
            console.log("responseData: ", responseData)
            handleClose();
        } catch (error) {
            setShowAlert(true);
            setAlertMessage("Something went wrong!")
            console.log("Error: ", error.message)
        }
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            PaperProps={{
                sx: { backgroundColor: "rgba(255, 255, 255, 0.7)" }, // Adjust background opacity
            }}
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle sx={{ fontWeight: "bold" }} id="customized-dialog-title">
                    Contact
                    <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 0, top: 0, color: 'black' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {showAlert && (
                        <Alert severity="error" onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
                            {alertMessage}
                        </Alert>
                    )}
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">Name</Typography>
                            <TextField
                                placeholder="Enter your name"
                                fullWidth
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">Email</Typography>
                            <TextField
                                placeholder="Enter your email"
                                fullWidth
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" sx={{
                        color: "#ffffff",
                        backgroundColor: "#000000",
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: "#222222", // Darken color on hover
                        }
                    }} type='submit'>
                        Submit
                    </Button>
                </DialogActions>
            </form>
        </BootstrapDialog >
    );
}
