import express from "express";
import cors from "cors";

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "3/1/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/15/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];
const hoje = new Date();
const data = hoje.toLocaleDateString();
let isHoliday = "Não, hoje não é feriado";
console.log(data === holidays[0].date);
for (let i = 0; i < holidays.length; i++) {
  if (data === holidays[i].date) {
    isHoliday = `Sim, hoje é ${holidays[i].name}`;
    break;
  }
}

const app = express();
app.use(cors());
app.get("/holidays", (req, res) => {
  res.send(holidays);
});
app.get("/is-today-holiday", (req, res) => {
  res.send(isHoliday);
});
app.get("/holidays/:month", (req, res) => {
  const month = parseInt(req.params.month);
  const arr = [];
  for (let i = 0; i < holidays.length; i++) {
    const dateArr = holidays[i].date.split("/");
    if (parseInt(dateArr[0]) === month) {
      arr.push(holidays[i]);
    }
  }
  res.send(arr);
});
app.listen(5000);
