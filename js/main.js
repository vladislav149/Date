/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { intervalToDuration } from 'date-fns';

import UI_ELEMENTS from './consts.js';
import showDate from './view.js';

function result(e) {
  e.preventDefault();
  const date = new Date(UI_ELEMENTS.INPUT.value);
  const now = new Date();
  const timeInterval = intervalToDuration({
    start: date,
    end: now,
  });
  showDate(timeInterval);
}

UI_ELEMENTS.FORM.addEventListener('submit', result);
