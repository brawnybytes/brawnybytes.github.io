import { Dialog } from '@mui/material';
import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import tech1 from '../resources/img/tech-1.jpg';
import tech2 from '../resources/img/services.jpg';
import tech3 from '../resources/img/tech-3.jpg';
import tech4 from '../resources/img/pixels.jpg';
import '../components/service.scss';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "100%",
    maxWidth: "1500px",  // Set your width here
  }
}));

export default function ServiceDemoDialog({ handleCloseService, openService }) {
  return (
    <BootstrapDialog
      aria-labelledby="customized-dialog-title"
      open={openService}
      onClose={handleCloseService}
      PaperProps={{
        sx: { backgroundColor: "rgba(255, 255, 255, 0.7)" }, // Adjust background opacity
      }}>
      <Box>
        <div className="wrapper">
          <Card
            img={tech1}
            title="GENERATIVE AI"
            description="Automation • AI"
            price="AI Tools"
          />
          <Card
            img={tech2}
            title="CONSULTING"
            description="Development • IT"
            price="Products"
          />
          <Card
            img={tech3}
            title="IoT"
            description="Iot Devices• Sensors"
            price="Appliances"
          />
          <Card
            img={tech4}
            title="Cloud"
            description="Computing • Resources"
            price="Cloud Services"
          />
        </div>
      </Box>
    </BootstrapDialog >
  );

  function Card(props) {
    return (
      <div className="card">
        <img src={props.img} className="card__img" alt="Nova Enigma" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <h3 className="card__price">{props.price}</h3>
          <button className="card__btn">More</button>
        </div>
      </div>
    );
  }
}
