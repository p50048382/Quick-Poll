import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private http: HttpClient) {}

  // getPollsData() {
  //   return this.http.get('http://localhost:3000/polls');
  // }
  // getPollSummary() {
  //   return this.http.get('http://localhost:3000/pollSummary');
  // }
  getPollsData() {
    return this.http.get('http://localhost:3000/polls1');
  }
  getPollSummary() {
    return this.http.get('http://localhost:3000/pollSummary1');
  }

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
