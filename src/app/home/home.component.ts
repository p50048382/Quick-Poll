import { Component, OnInit } from '@angular/core';
import { FormGroup, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PollService } from '../services/poll.service';

export interface poll {
  PollId: string;
  QText: string;
  Response: string;
  options: [];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // results = ' Results';
  results = '';
  polls;
  odataPolls = [];
  odataSummary = [];
  submittedPolls = {};

  constructor(private http: HttpClient, private pollService: PollService) {}
  ngOnInit(): void {
    // this.polls = this.pollService.getQuestions();
    // // console.log(this.polls);
    // this.polls.forEach((poll) => {
    //   this.submittedPolls[poll.pollName] = false;
    // });

    // *Working with odata
    this.getPollData();
    this.getPollSummary();
    // console.log(this.polls);
    console.log(this.submittedPolls);
  }

  getPollData() {
    this.pollService.getPollsData().subscribe((res) => {
      // console.log(res);
      // *Making an object of questions
      let questionSet;
      questionSet =
        res['feed']['entry'][0]['link'][1]['inline']['feed']['entry'];
      questionSet.forEach((Que) => {
        let questionObj = {};

        questionObj['PollName'] = Que.content.properties.PollName.__text;
        questionObj['PollId'] = Que.content.properties.PollId.__text;
        questionObj['QText'] = Que.content.properties.QText.__text;
        questionObj['Response'] = Que.content.properties.Response.__text;
        questionObj['options'] = [];
        this.submittedPolls[Que.content.properties.PollId.__text] = false;

        //* Here the question object has been made
        this.odataPolls.push(questionObj); //*Now each object is pushed into the poll
      });
      // console.log(this.odataPolls);

      // *Now Pushing the options into the each question object of poll
      let optionSet;
      optionSet = res['feed']['entry'][0]['link'][2]['inline']['feed']['entry'];
      optionSet.forEach((option) => {
        this.odataPolls.forEach((poll, index) => {
          if (poll.PollId == option.content.properties.PollId.__text) {
            let Option = {};
            Option['OptionText'] = option.content.properties.OptionText.__text;
            Option['OptionValue'] =
              option.content.properties.OptionValue.__text;
            this.odataPolls[index]['options'].push(Option);
            // console.log(this.odataPolls[index]);
          }
        });
      });
      // console.log(this.odataPolls);
    });
  }
  getPollSummary() {
    this.odataSummary = [];
    this.pollService.getPollSummary().subscribe((res) => {
      // console.log(res);
      res['feed']['entry'][0]['link'][1]['inline']['feed']['entry'].forEach(
        (Que) => {
          let questionObj = {};
          questionObj['PollId'] = Que.content.properties.PollId.__text;
          questionObj['PollName'] = Que.content.properties.PollName.__text;
          questionObj['QText'] = Que.content.properties.QText.__text;
          questionObj['Response'] = Que.content.properties.Response.__text;
          questionObj['options'] = [];

          this.odataSummary.push(questionObj);
        }
      );
      // console.log(this.odataSummary);
      console.log(res);
      res['feed']['entry'][0]['link'][2]['inline']['feed']['entry'].forEach(
        (option) => {
          // console.log(option);

          this.odataSummary.forEach((poll, index) => {
            if (poll.PollId == option.content.properties.PollId.__text) {
              let Option = {};
              Option['OptionText'] =
                option.content.properties.OptionText.__text;
              Option['Cnt'] = option.content.properties.Cnt.__text;
              Option['Pct'] = option.content.properties.Pct.__text;
              Option['Response'] = option.content.properties.Response.__text;
              this.odataSummary[index]['options'].push(Option);
              // console.log(this.odataPolls[index]);
            }
          });
        }
      );
      console.log(this.odataSummary);
    });
  }
  checkPollStatus(poll) {
    console.log(poll);
    return true;
  }
  OnSubmit(form, poll) {
    console.log(form);
    console.log(poll);

    this.postData(form, poll); //* Send the data to backend
  }
  postData(form, poll) {
    console.log(form.controls.questionControl.value);
    // ? Here we can call the post data api.
    // ? After posting the data destroy the submitted poll
    this.submittedPolls[poll.PollId] = true; //*Destroying the component

    // ?Call the getPollSummary() function again so that the results get updated.
    this.getPollSummary();
  }
}
