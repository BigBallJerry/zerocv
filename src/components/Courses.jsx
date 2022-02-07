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
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import FormGroup from "@mui/material/FormGroup";
import { useForm, useFieldArray } from "react-hook-form";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Courses = ({ name, id, title }) => {
  const { expanded, setExpanded } = useContext(AccordionContext);

  const [startDate, setStartDate] = useState(new Date("2021-01-01T00:00:00"));
  const [endDate, setEndDate] = useState(new Date("2021-01-01T00:00:00"));

  const defaultValues = {
    courses: [
      {
        courseName: "",
        institution: "",
        start_date: { startDate },
        end_date: { endDate },
      },
    ],
  };

  const { register, handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {
      name: "default name",
      courses: [
        {
          start_date: { startDate },
          end_date: { endDate },
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "courses",
  });

  useEffect(() => {
    reset(defaultValues);
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    event.stopPropagation();
    event.preventDefault();
    setExpanded(newExpanded ? panel : false);
  };

  const [innerExpanded, setInnerExpanded] = useState("edupanel_0");

  const handleInnerChange = (panel) => (event, newExpanded) => {
    event.stopPropagation();
    event.preventDefault();
    setInnerExpanded(newExpanded ? panel : false);
  };

  const [titleName, setTitleName] = useState("Courses");
  const [xrate, setXrate] = useState("XRATE");

  const [dateValue, setDateValue] = useState(new Date());

  const onSubmit = (data) => console.log(data);

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
            <BookOutlinedIcon fontSize="medium" sx={{ marginRight: "10px" }} />
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    {fields.map((field, index) => (
                      <Box
                        key={index}
                        sx={{
                          marginBottom: "2px",
                          "&:hover": { border: "1px solid #d0d0d0" },
                        }}
                      >
                        <Accordion
                          expanded={innerExpanded === `edupanel_${index}`}
                          onChange={handleInnerChange(`edupanel_${index}`)}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <BookOutlinedIcon sx={{ marginRight: "10px" }} />
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              {title}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container spacing={3}>
                              <Grid item xs={12} sm={6}>
                                <FormGroup>
                                  <TextField
                                    required
                                    id="courseName"
                                    name="courseName"
                                    label="Course"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                    onChange={(newName) => {
                                      setTitleName(newName);
                                      setXrate(newName);
                                    }}
                                    {...register(
                                      `courses.${index}.courseName`,
                                      {
                                        required: true,
                                        maxLength: 200,
                                      }
                                    )}
                                  />
                                </FormGroup>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FormGroup>
                                  <TextField
                                    required
                                    id="institution"
                                    name="institution"
                                    label="Institution"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                    {...register(
                                      `courses.${index}.institution`,
                                      {
                                        required: true,
                                      }
                                    )}
                                  />
                                </FormGroup>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FormGroup>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                  >
                                    {/* <DatePicker
                                  required
                                  views={['year', 'month']}
                                  label='Start date'
                                  minDate={new Date('1950-01-01')}
                                  maxDate={new Date('2030-12-31')}
                                  value={startDate}
                                  format='MM/dd/yyyy'
                                  onChange={(val) => {
                                    setStartDate(val);
                                    //setValue("start_date", val);
                                    setValue(`experience.${index}.start_date`, val);
                                  }}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                /> */}
                                    <DatePicker
                                      disableFuture
                                      label="Responsive"
                                      openTo="year"
                                      views={["year", "month", "day"]}
                                      value={dateValue}
                                      onChange={(newValue) => {
                                        setDateValue(newValue);
                                      }}
                                      renderInput={(params) => (
                                        <TextField {...params} />
                                      )}
                                    />
                                  </LocalizationProvider>
                                </FormGroup>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FormGroup>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                  >
                                    <DatePicker
                                      required
                                      views={["year", "month"]}
                                      label="End date"
                                      minDate={new Date("1950-01-01")}
                                      maxDate={new Date("2030-12-31")}
                                      value={endDate}
                                      format="MM/dd/yyyy"
                                      onChange={(val) => {
                                        setEndDate(val);
                                        setValue(
                                          `courses.${index}.end_date`,
                                          val
                                        );
                                      }}
                                      defaultValue={""}
                                      renderInput={(params) => (
                                        <TextField {...params} />
                                      )}
                                    />
                                  </LocalizationProvider>
                                </FormGroup>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    ))}
                  </div>
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
                            append({ defaultValues }, true);
                            setInnerExpanded(`edupanel_${fields.length}`);
                          }}
                        >
                          Add courses
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

export default Courses;
