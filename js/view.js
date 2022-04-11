import { UI_ELEMENTS } from './consts';

export default function showDate(date) {
  UI_ELEMENTS.OUTPUT.value = `years: ${date.years},months: ${date.months},hours: ${date.hours},minutes: ${date.minutes}`;
}
