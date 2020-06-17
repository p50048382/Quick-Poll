import { Component, OnInit } from '@angular/core';
import { FormGroup, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PollService } from '../services/poll.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  results = ' Results';
  polls;
  submittedPolls = {};
  constructor(private http: HttpClient, private pollService: PollService) {}
  ngOnInit(): void {
    this.polls = this.pollService.getQuestions();
    console.log(this.polls);
    this.polls.forEach((poll) => {
      this.submittedPolls[poll.pollName] = false;
    });

    // console.log(this.polls);
  }
  checkPollStatus(poll) {
    console.log(poll);
    return true;
  }
  OnSubmit(poll) {
    console.log(poll);
    console.log(this.submittedPolls);
    this.submittedPolls[poll.pollName] = true;
    console.log(this.submittedPolls[poll.pollName]);
  }
}
