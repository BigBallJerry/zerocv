import { useContext } from 'react';
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
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

const References = ({ name, id, title }) => {
  const { expanded, setExpanded } = useContext(AccordionContext);

  const handleChange = (panel) => (event, newExpanded) => {
    event.preventDefault();
    setExpanded(newExpanded ? panel : false);
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
          <PeopleOutlinedIcon sx={{ marginRight: '10px' }} />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '30px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id='address'
                name='address'
                label='Address'
                fullWidth
                autoComplete='address'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='address'
                name='address'
                label='Address'
                fullWidth
                autoComplete='address'
                variant='standard'
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default References;
