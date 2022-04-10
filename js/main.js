import {UI_ELEMENTS} from './consts.js';
import { formatDistanceToNowStrict } from 'date-fns'
UI_ELEMENTS.FORM.addEventListener('submit', result);
function result(e) {
  e.preventDefault();
  let date = new Date(UI_ELEMENTS.INPUT.value);
  console.log(date);
  const now = new Date();
  console.log(now);
  console.log(now-date);
  //const test = format(new Date(), '	X');
  //console.log(test);
  const test2 = formatDistanceToNowStrict(new Date(date));
  console.log(test2);
}