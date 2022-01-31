import { useContext } from 'react';
import Box from '@mui/material/Box';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '../components/widgets/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { AccordionContext } from './AccordionWrapper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Input = styled('input')({
  display: 'none',
});

const ContactEditor = ({ name, id, title }) => {
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
          <PersonOutlineOutlinedIcon
            fontSize='medium'
            sx={{ marginRight: '10px' }}
          />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '30px' }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              container
              direction='row'
              alignItems='center'
              justifyContent='flex-start'
            >
              <Grid item xs={2}>
                <Avatar
                  alt='R'
                  src='./accsets/no-avatar.png'
                  // src={src={user? user.avatar_url : ''}
                  sx={{ width: 70, height: 70 }}
                />
              </Grid>
              <Grid item xs={2}>
                <label htmlFor='contained-button-file'>
                  <Input
                    accept='image/*'
                    id='contained-button-file'
                    multiple
                    type='file'
                  />
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='span'
                  >
                    <PhotoCamera fontSize='large' />
                  </IconButton>
                </label>
              </Grid>
              <Grid item xs={9}></Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='firstName'
                name='firstName'
                label='First name'
                fullWidth
                autoComplete='given-name'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='lastName'
                name='lastName'
                label='Last name'
                fullWidth
                autoComplete='family-name'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='email'
                name='email'
                label='Email address'
                fullWidth
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id='phonenumber'
                name='phonenumber'
                label='Phone number'
                fullWidth
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

            <Grid item xs={12} sm={6}>
              <TextField
                id='city'
                name='city'
                label='City'
                fullWidth
                autoComplete='shipping address-level2'
                variant='standard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='country'
                name='country'
                label='Country'
                fullWidth
                autoComplete='shipping country'
                variant='standard'
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ContactEditor;
