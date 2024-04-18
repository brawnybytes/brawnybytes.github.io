import CloseIcon from '@mui/icons-material/Close';
import { Button, Card, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { sendEmail } from '../services/EmailService';

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
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
            <DialogTitle id="customized-dialog-title" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    <p style={{ fontSize: 15, fontWeight: "bold", margin: 0 }}>
                        Request Demo
                    </p>
                </Typography>
                <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 0, top: 0 }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Card sx={{ p: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5">Enter Name</Typography>
                            <TextField
                                placeholder="Name"
                                variant="outlined"
                                fullWidth
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">Enter Email</Typography>
                            <TextField
                                placeholder="Email"
                                variant="outlined"
                                fullWidth
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                        </Grid>
                    </Grid>
                </Card>
            </DialogContent>
        </Dialog>
    );
}
