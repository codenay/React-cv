import React from 'react'
import { Typography } from '@mui/material'
import { Stack } from '@mui/material'

const Education = () => {
  return (
    <div>
        <Typography variant='h6'>EDUCATION</Typography>
        <Stack spacing={2} sx={{marginTop: '10px', marginBottom:'20px'}}>
            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>School: </Typography> University of Ghana
            </Typography>

            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Course: </Typography> Bsc. Computer Science
            </Typography>

            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Date: </Typography> September 2019 - June 2023
            </Typography>
        </Stack>
    </div>
  )
}

export default Education