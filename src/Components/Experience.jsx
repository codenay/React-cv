import React from 'react';
import { Typography } from '@mui/material'
import { Stack } from '@mui/material'

const Experience = () => {
  return (
    <div>
         <Typography variant='h6'>EXPERIENCE</Typography>
        <Stack spacing={2} sx={{marginTop: '10px', marginBottom:'20px'}}>
            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Company: </Typography> Side Hustle
            </Typography>

            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Position: </Typography> React Developer Intern
            </Typography>

            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Main Task: </Typography> Designing and implementing UI components for JavaScript-based web applications with the use of <br /> open-source library infrastructure.
            </Typography>

            <Typography variant='p'>
                <Typography variant='p' sx={{fontWeight:'bolder'}}>Date: </Typography> April 12 - Present
            </Typography>
        </Stack>
    </div>
  )
}

export default Experience