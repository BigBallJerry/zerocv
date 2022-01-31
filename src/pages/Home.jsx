import React, { createContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../components/form/AddressForm';
import Grid from '@mui/material/Grid';
import AccordionWrapper from '../components/AccordionWrapper';
import ContactEditor from '../components/ContactEditor';
import ProfessionalSummary from '../components/ProfessionalSummary';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import References from '../components/References';
import Hobbies from '../components/Hobbies';
import Languages from '../components/Languages';
import ExActivities from '../components/ExActivities';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <AddressForm />;
    case 2:
      return <AddressForm />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export const AccordionContext = createContext({
  expanded: false,
  setExpanded: () => {},
});

const Home = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Container component="main" maxWidth="sm" sx={{ mb: 4 }}> */}
      <Grid container component='main' sx={{ height: '100vh', width: '100vw' }}>
        <Grid
          item
          xs={12}
          sm={9}
          md={7}
          lg={7}
          xl={7}
          component={Paper}
          elevation={3}
          square
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: '100%',
              marginTop: '30px',
            }}
          >
            {/* <AllAccordions /> */}
            <AccordionWrapper>
              <ContactEditor name='panel_1' id='panel_1' title='Contact' />
              <ProfessionalSummary
                name='panel_2'
                id='panel_2'
                title='Professional'
              />
              <Experience name='panel_3' id='panel_3' title='Experience' />
              <Education name='panel_4' id='panel_4' title='Education' />
              <Courses name='panel_5' id='panel_5' title='Courses' />
              <Skills name='panel_6' id='panel_6' title='Skills' />
              <References name='panel_7' id='panel_7' title='References' />
              <Hobbies name='panel_8' id='panel_8' title='Hobbies' />
              <Languages name='panel_9' id='panel_9' title='Languages' />
              <ExActivities
                name='panel_10'
                id='panel_10'
                title='Extra-Curricular Activities'
              />
            </AccordionWrapper>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={3}
          md={5}
          lg={5}
          xl={5}
          component={Paper}
          elevation={1}
          square
        >
          <Paper
            variant='outlined'
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component='h1' variant='h4' align='center'>
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant='h5' gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant='subtitle1'>
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      variant='contained'
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
