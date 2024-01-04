import { Alert, AlertTitle, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Alertpage = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Stack sx={{ width: '100%' }} spacing={2}>
               
               <Alert severity="success">
                 <AlertTitle>Success</AlertTitle>
                 Your Order Is Confirmd<strong>{navigate("/")}Continue</strong>
               </Alert>
             </Stack>
    </div>
  )
}

export default Alertpage