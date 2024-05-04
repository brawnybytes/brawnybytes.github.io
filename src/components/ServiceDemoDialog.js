import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import * as React from 'react';
import { useState } from 'react';
import { sendEmail } from '../services/EmailService';
import Alert from '@mui/material/Alert';
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import tech1 from '../resources/img/tech-1.jpg';
import tech2 from '../resources/img/tech-2.jpg';
import tech3 from '../resources/img/tech-3.jpg';
import tech4 from '../resources/img/tech-3.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "100%",
    maxWidth: "800px",  // Set your width here
  }
}));

export default function ServiceDemoDialog({ handleCloseService, openService }) {

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("Something went wrong!");
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
   <Grid container spacing={${spacing}}>
   `;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);

  };




  return (

    <BootstrapDialog

      aria-labelledby="customized-dialog-title"
      open={openService}
      onClose={handleCloseService}
      PaperProps={{
        sx: { backgroundColor: "rgba(255, 255, 255, 0.7)" }, // Adjust background opacity
      }}
    >




      <Box
        aria-labelledby="customized-dialog-title"
        open={openService}
        onClose={handleCloseService}
      >



        <Grid container spacing={3}>

          <Grid item xs={4}>
            <Item> <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={tech1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Generative AI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Generative AI tools change the calculus of knowledge work automation
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="secondary">
                  More
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </Button>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Generative AI tools change the calculus of knowledge work automation; their ability to produce human-like writing, images, audio, or video in response to plain-English
                    text prompts means .



                  </Typography>
                </CardContent>
              </Collapse>

            </Card></Item>
          </Grid>
          <Grid item xs={4}>
            <Item> <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={tech2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Consulting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our  Services focus on clients' most critical issues and opportunities,
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="secondary">
                  More
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </Button>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    The Internet of things describes devices with sensors,
                    processing ability, software and other technologies that connect and exchange data with other devices
                    over the Internet .



                  </Typography>
                </CardContent>
              </Collapse>

            </Card></Item>
          </Grid>


          <Grid item xs={4}>
            <Item> <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={tech3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  IoT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Internet of things describes devices with sensors, processing ability,
                </Typography>
              </CardContent>
              <CardActions>



                <Button color="secondary">
                  More
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </Button>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    The Internet of things describes devices with sensors,
                    processing ability, software and other technologies that connect and exchange data with other devices
                    over the Internet .



                  </Typography>
                </CardContent>
              </Collapse>
            </Card></Item>
          </Grid>


        </Grid>


      </Box>






    </BootstrapDialog >





  );
}
