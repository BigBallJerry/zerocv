import { useContext, useState, useEffect, Fragment } from "react";
import Box from "@mui/material/Box";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from './widgets/Accordion';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { AccordionContext } from "./AccordionWrapper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Slider from "@mui/material/Slider";
import ListItemText from "@mui/material/ListItemText";
import { Container, Draggable } from "react-smooth-dnd";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { styled } from "@mui/material/styles";

const Skills = ({ name, id, title }) => {
  const { expanded, setExpanded } = useContext(AccordionContext);

  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState(0);

  const { register, handleSubmit, reset, control, setValue, getValues, watch } =
    useForm({
      defaultValues: {
        skills: [{ skillName: "English", skillLevel: 0 }],
      },
    });

  const { fields, append, move, swap, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const levelMarks = [
    {
      value: 0,
      label: "Beginner",
    },
    {
      value: 1,
      label: "Intermediate",
    },
    {
      value: 2,
      label: "Proficient",
    },
    {
      value: 3,
      label: "Fluent",
    },
    {
      value: 4,
      label: "Native",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (panel) => (event, newExpanded) => {
    event.stopPropagation();
    event.preventDefault();
    setExpanded(newExpanded ? panel : false);
  };

  const watchFieldArray = watch("skills");
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

  const LevelSlider = styled(Slider)({
    "& .MuiSlider-valueLabel": { fontSize: 12, fontWeight: "normal" },
  });

  return (
    <Fragment>
      <Box
        sx={{
          marginBottom: "2px",
          "&:hover": { border: "1px solid #d0d0d0" },
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
            expandIcon={<ExpandMoreIcon fontSize="large" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <GTranslateOutlinedIcon
              fontSize="medium"
              sx={{ marginRight: "10px" }}
            />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "30px" }}>
            <Grid container>
              <Grid item xs={12}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Container
                    dragHandleSelector=".column-drag-handle"
                    onDrop={onDrop}
                    lockAxis="y"
                  >
                    {/* {items.map(({ id, text }) => ( */}
                    {controlledFields.map((field, index) => (
                      <Draggable key={field.id}>
                        <ListItem
                          component="div"
                          disablePadding
                          style={{
                            border: "solid 1px gray",
                            background: "white",
                            marginBottom: "10px",
                            paddingTop: "10px",
                            paddingBottom: "5px",
                            alignItems: "center",
                          }}
                          secondaryAction={
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => remove(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <Grid
                            container
                            wrap="nowrap"
                            spacing={3}
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item xs={1}>
                              <span
                                className="column-drag-handle"
                                style={{
                                  float: "left",
                                  paddingRight: "20px",
                                }}
                              >
                                <DragIndicatorIcon />
                              </span>
                            </Grid>
                            <Grid item xs={4}>
                              <TextField
                                id="skill"
                                label="Skill"
                                variant="outlined"
                                defaultValue={field.skillName}
                                fullWidth
                                margin="none"
                                size="small"
                                style={{
                                  fontSize: "14px",
                                  paddingRight: "20px",
                                }}
                                onChange={(newSkillName) => {
                                  setSkillName(newSkillName);
                                }}
                                {...register(`skills.${index}.skillName`, {
                                  required: true,
                                  maxLength: 100,
                                })}
                              />
                            </Grid>
                            <Grid item xs={7}>
                              <Box sx={{ width: 250 }}>
                                <Controller
                                  control={control}
                                  name="test"
                                  // defaultValue={field.skillLevel}
                                  render={({ field }) => (
                                    <Slider
                                      aria-label="non-linear-slider"
                                      step={1}
                                      min={0}
                                      max={4}
                                      color="primary"
                                      size="small"
                                      marks={levelMarks}
                                      value={field.skillLevel}
                                      valueLabelDisplay="off"
                                      getAriaValueText={valuetext}
                                      onChange={(newSkillLevel) => {
                                        setSkillLevel(newSkillLevel);
                                      }}
                                      sx={{
                                        "& .MuiSlider-markLabel": {
                                          fontSize: 12,
                                          fontWeight: "500",
                                        },
                                      }}
                                      {...register(
                                        `skills.${index}.skillLevel`,
                                        {
                                          required: true,
                                        }
                                      )}
                                    />
                                  )}
                                />
                              </Box>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </Draggable>
                    ))}
                  </Container>
                  <Box
                    mt={1}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={4}>
                        <Button
                          type="button"
                          startIcon={<AddCircleIcon />}
                          onClick={() => {
                            append({
                              skillName: "",
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
