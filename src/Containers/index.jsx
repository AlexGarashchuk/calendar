import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  MonthView,
  WeekView,
  DayView
} from "@devexpress/dx-react-scheduler-material-ui";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const data = [
  {
    startDate: "2020-03-12 10:00",
    endDate: "2020-03-12 12:00",
    title: "Meeting"
  },
  {
    startDate: "2020-03-12 10:00",
    endDate: "2020-03-12 12:00",
    title: "Watching"
  },
  {
    startDate: "2020-03-12 10:00",
    endDate: "2020-03-12 12:00",
    title: "Shopping"
  },
  {
    startDate: "2020-03-15 18:00",
    endDate: "2020-03-15 19:00",
    title: "Go to a gym"
  },
  {
    startDate: "2020-03-26 18:00",
    endDate: "2020-03-27 19:00",
    title: "Go to a home"
  }
];

const btnNav = [
  {
    color: "primary",
    name: "Today"
  },
  {
    color: "secondary",
    name: "Back"
  },
  {
    color: "secondary",
    name: "Next"
  }
];

const periods = ["Month", "Week", "Day", "Agenda"];
const useStyles = makeStyles(theme => ({
  root: {
    width: "auro",
    minHeight: "100vh",
    backgroundColor: "#f2f3f4"
  }
}));

export function Calendar() {
  const classes = useStyles();

  const [value, setValue] = useState("Month");
  const [currentData, setCurrentData] = useState("2020-03-27");

  const onChangeValue = value => {
    setValue(value);
    console.log(value);
  };

  const onCurrentDateChange = currentDate => {
    setCurrentData(currentData);
  };

  return (
    <div className={classes.root}>
      <h2>Calendar</h2>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <div>
          {periods.map((period, index) => (
            <Button
              variant="contained"
              color="primary"
              key={index}
              onClick={() => {
                onChangeValue(period);
              }}
              value={period}
            >
              {period}
            </Button>
          ))}
        </div>
      </Grid>

      <Scheduler data={data}>
      <ViewState onClick={onCurrentDateChange} />
        {value === "Week" && <WeekView />}
        {value === "Month" && <MonthView />}
        {value === "Day" && <DayView />}
          <Toolbar />
          <DateNavigator>
            <navigatorText>Bacj</navigatorText>
          </DateNavigator>
          <TodayButton />
        <Appointments />
        <AppointmentTooltip />
      </Scheduler>
    </div>
  );
}
