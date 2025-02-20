const date1 = new Date(2024, 6, 18, 10, 24);
const date2 = new Date(2024, 6, 19, 14, 47);

const todos = [
  {
    title: "изучить react",
    desc: "да поскорее",
    img: "",
    done: true,
    createdAt: date1.toLocaleDateString(),
    key: date1.getTime(),
  },
  {
    title: "написать первое react приложение",
    desc: "список запланированных дней",
    img: "",
    done: false,
    createdAt: date2.toLocaleDateString(),
    key: date2.getTime(),
  },
];
export default todos;
