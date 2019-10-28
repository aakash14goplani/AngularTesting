import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voting-integration',
  templateUrl: './voting-integration.component.html',
  styleUrls: ['./voting-integration.component.css']
})
export class VotingIntegrationComponent {

  @Input() othersVote = 0;
  @Input() myVote = 0;
  @Output() vote = new EventEmitter();

  upVote() {
    if (this.myVote === 1) {
      return;
    }
    this.myVote++;
    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    if (this.myVote === -1) {
      return;
    }
    this.myVote--;
    this.vote.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  }
}
