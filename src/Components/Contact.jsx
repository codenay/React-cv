import { Typography } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <Typography variant='h6'>CONTACT</Typography>
        <Stack spacing={2} sx={{marginTop: '10px', marginBottom:'20px'}}>
            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Name: </Typography> Ebenezer Awuku
            </Typography>

            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Email: </Typography> koffieawuku@gmail.com
            </Typography>

            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Phone: </Typography> +233 24 799 7581
            </Typography>
        </Stack>
    </div>
  )
}

export default Contact