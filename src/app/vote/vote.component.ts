import { Component, OnInit, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }

  totalVotes = 0;
  voteChanged = new EventEmitter<number>();

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }

  downVote() {
    this.totalVotes--;
  }

  ngOnInit() {
  }

}
