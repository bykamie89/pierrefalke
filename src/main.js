import "./style.css";

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion"

inView(".fotoinview", () => {
  animate(".fotoinview", { x: [-2000, 0] }, { duration: 1 });
});