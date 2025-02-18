import { differenceInDays } from "date-fns";

const christmas = new Date(2025, 11, 25);
const now = new Date();
const dday = differenceInDays(christmas, now);

console.log(dday); // 309
