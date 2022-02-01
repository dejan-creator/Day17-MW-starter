import { ProgressBar } from './ProgressBar';



document.addEventListener('DOMContentLoaded', () => {

  const progressBar = new ProgressBar (4, 2, 30); //no. 1 new ProgresBar
  document.body.appendChild(progressBar.element) // kreiranje prvog elementa iz ProgressBar.js
  // @TODO no.1 create new instance of ProgressBar and append its right one property to body element
  // @TODO no.2 fix missing icon on plus button... resenje u u codu scss proveriti link za img
});
