"use strict";

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180,
  },
  {
    name: "Some web development",
    duration: 120,
  },
  {
    name: "Fix homework for class10",
    duration: 20,
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 1.0,
  },
  {
    name: "Some more web development",
    duration: 180,
  },
  {
    name: "Staring out the window",
    duration: 10,
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0,
  },
  {
    name: "Look at application assignments new students",
    duration: 40,
  },
];

console.log(monday[1].duration);

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  const totalEarning = tasks
    .map((task) => task.duration / 60) //convert durations of each task min to hour
    .filter((task) => task >= 2) //select the tasks take more than 2 hours
    .map((task) => task * hourlyRate) // multiply each task's hour by hourly rate
    .reduce((accumulator, current) => accumulator + current, 0); // sum all pay amounts
  return totalEarning;
}

const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
const formattedEarnings = earnings.toFixed(2);

console.log(`Maartje has earned €${formattedEarnings}`);
