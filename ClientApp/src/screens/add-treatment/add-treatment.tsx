import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import { Save as SaveIcon } from "@material-ui/icons";
import { Treatment } from "../../models/treatment";

export function AddTreatment() {
  // State.
  const [ idCard, setIdCard ] = useState('');
  const [ medicine, setMedicine ] = useState('');
  const [ quantity, setQuantity ] = useState(0);
  const [ nurse, setNurse ] = useState('');
  const [ doctor, setDoctor ] = useState('');

  // Functions.
  async function handleSave() {
    const treatment = new Treatment({ nurse, doctor, idCard, medicine, quantity });
    const serialized = JSON.stringify(treatment);

    console.log('treatment: ', treatment);
    console.log('serialized: ', serialized);

    try{
      await fetch(
        'treatments', 
        {
          method: 'POST',
          mode: 'cors',
          cache: 'default',
          body: serialized,
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          })
        }
      );
    } catch(e) {
      console.log('error: ', e.message);
    }
  }

  return (
    <>
      <Typography variant="h3">Agregar Tratamiento</Typography>

      <Box m={2} color="red" height={8}/>

      {/* Cédula */}
      <TextField
        label="Cédula"
        type="text"
        value={idCard}
        onChange={(e) => setIdCard(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <Box m={2} color="red" height={6}/>

      <TextField
        label="Medicina"
        type="text"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <Box m={2} color="red" height={6}/>

      <TextField
        label="Cantidad"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <Box m={2} color="red" height={6}/>

      {/* Enfermera y Doctor */}
      <TextField
        label="Enfermera"
        type="text"
        value={nurse}
        onChange={(e) => setNurse(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <Box m={2} color="red" height={6}/>

      <TextField
        label="Doctor"
        type="text"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <Box m={2} color="red" height={6}/>

      <Button
        variant="outlined"
        color="primary"
        size="medium"
        startIcon={<SaveIcon />}
        onClick={handleSave}
      >
        Guardar Registro
      </Button>
    </>
  );
}
