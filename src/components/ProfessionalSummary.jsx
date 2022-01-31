import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from './widgets/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { AccordionContext } from './AccordionWrapper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const ProfessionalSummary = ({ name, id, title }) => {
  const { expanded, setExpanded } = useContext(AccordionContext);

  const handleChange = (panel) => (event, newExpanded) => {
    event.preventDefault();
    setExpanded(newExpanded ? panel : false);
    console.log('ExpandMoreIcon onClick expanded= ' + expanded);
  };

  const [value, setValue] = useState('');

  const handleTextFieldChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        marginBottom: '2px',
        '&:hover': { border: '1px solid #d0d0d0' },
      }}
    >
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='large' />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <PersonOutlineOutlinedIcon
            fontSize='medium'
            sx={{ marginRight: '10px' }}
          />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '30px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='subtitle1' gutterBottom component='div'>
                A short summary of your experience that sits at the top of your
                resume (2-3 sentences)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box component='form' noValidate autoComplete='off'>
                <TextField
                  id='outlined-multiline-static'
                  label='How to describe your professional'
                  multiline
                  fullWidth
                  rows={6}
                  defaultValue=''
                />
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ProfessionalSummary;
