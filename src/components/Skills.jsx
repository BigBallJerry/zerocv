import { useContext, useState, useEffect, Fragment } from 'react';
import Box from '@mui/material/Box';
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from './widgets/Accordion';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { AccordionContext } from './AccordionWrapper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import FormGroup from '@mui/material/FormGroup';
import { useForm, useFieldArray } from 'react-hook-form';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const Skills = ({ name, id, title }) => {
  const { expanded, setExpanded } = useContext(AccordionContext);

  const [skillName, setSkillName] = useState('Javascript');
  const [skillLevel, setSkillLevel] = useState(0);

  const { register, handleSubmit, reset, control, setValue, getValues, watch } =
    useForm({
      defaultValues: {
        skills: [{ skillName: '1 - Javascript', skillLevel: 0 }],
      },
    });

  const { fields, append, move, swap, remove } = useFieldArray({
    control,
    name: 'skills',
  });

  const levelMarks = [
    {
      value: 0,
      label: 'Novice',
    },
    {
      value: 25,
      label: 'Beginner',
    },
    {
      value: 50,
      label: 'Skillful',
    },
    {
      value: 75,
      label: 'Experienced',
    },
    {
      value: 100,
      label: 'Expert',
    },
  ];

  const handleChange = (panel) => (event, newExpanded) => {
    event.stopPropagation();
    event.preventDefault();
    setExpanded(newExpanded ? panel : false);
  };

  const watchFieldArray = watch('skills');
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const onDrop = ({ removedIndex, addedIndex }) => {
    move(removedIndex, addedIndex);
  };

  const [secondary, setSecondary] = useState(false);

  const values = watch({ nest: true });

  const onSubmit = (data) => console.log(data);

  return (
    <Fragment>
      <Box
        sx={{
          marginBottom: '2px',
          '&:hover': { border: '1px solid #d0d0d0' },
        }}
      >
        <Accordion
          expanded={expanded === id}
          onChange={handleChange(id)}
          TransitionProps={{
            mountOnEnter: true,
            unmountOnExit: true,
            timeout: 0,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize='large' />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
          >
            <LightbulbOutlinedIcon
              fontSize='medium'
              sx={{ marginRight: '10px' }}
            />
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '30px' }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    {fields.map((field, index) => (
                      <Box
                        key={index}
                        sx={{
                          marginBottom: '2px',
                          '&:hover': { border: '1px solid #d0d0d0' },
                        }}
                      >
                        <List
                          sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                          }}
                        >
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar>
                                <ImageIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary='Photos'
                              secondary='Jan 9, 2014'
                            />
                          </ListItem>
                        </List>
                      </Box>
                    ))}
                  </div>
                  <Box
                    mt={5}
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={4}>
                        <Button
                          type='button'
                          startIcon={<AddCircleIcon />}
                          onClick={() => {
                            append({
                              skillName: '',
                              skillLevel: 0,
                            });
                          }}
                        >
                          Add skills
                        </Button>
                      </Grid>
                      {/* <Button type="submit">Submit</Button> */}
                      <Grid item xs={6} md={4}></Grid>
                    </Grid>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Fragment>
  );
};

export default Skills;
