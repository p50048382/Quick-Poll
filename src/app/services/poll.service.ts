import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}
  getQuestions() {
    let questions = [
      {
        pollName: 'COVID-19',
        QuesId: 'COVID-19',
        QuesText:
          'How would you rate the helps provided by Reliance in fighting COVID-19?',
        options: [
          { key: 'excellent', value: 'Excellent' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unsatisfactory', value: 'Unsatisfactory' },
        ],
      },
      {
        pollName: 'WORLD CUP',
        QuesId: 'WORLD CUP',
        QuesText:
          'Which country do you think will win the next FIFA World Cup?',
        options: [
          { key: 'Gr', value: 'Germany' },
          { key: 'Fr', value: 'France' },
          { key: 'Ar', value: 'Argentina' },
          { key: 'Eng', value: 'England' },
          { key: 'None', value: 'None of the above' },
        ],
      },
    ];

    return questions;
  }
}
