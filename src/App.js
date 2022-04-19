import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Experience from './Components/Experience';
import {Box} from '@mui/material'

function App() {
  return (
    <div className="App">
     
        <Box sx={{padding:'60px', maxWidth: '450px',minWidth: '100px', borderRadius:'10px', bgcolor: '#F8F9FA' }}>
          <Contact />
          <Education />
          <Experience />
        </Box>
      
    </div>
  );
}

export default App;
