import moment from "moment-jalaali";
import "moment/locale/fa";

moment.locale("fa");

export function getDays() {
  const days = [];
  const today = moment();
  const currentDate = today.jDate();

  for (let i = 2; i >= 0; i--) {
    const date = moment(today).subtract(i, "days");
    const name = date.format("dddd");
    const number = date.jDate();
    const isCurrentDay = i === 0;
    days.push({ name, number, isCurrentDay });
  }

  for (let i = 1; i <= 2; i++) {
    const date = moment(today).add(i, "days");
    const name = date.format("dddd");
    const number = date.jDate();
    const isCurrentDay = i === 1;
    days.push({ name, number, isCurrentDay });
  }

  return days;
}

export function getDays7() {
  const days = [];
  const today = moment();
  const currentDate = today.jDate();

  for (let i = 3; i >= 0; i--) {
    const date = moment(today).subtract(i, "days");
    const name = date.format("dddd");
    const number = date.jDate();
    const isCurrentDay = i === 3;
    days.push({ name, number, isCurrentDay });
  }

  for (let i = 1; i <= 3; i++) {
    const date = moment(today).add(i, "days");
    const name = date.format("dddd");
    const number = date.jDate();
    const isCurrentDay = i === 1;
    days.push({ name, number, isCurrentDay });
  }

  return days;
}