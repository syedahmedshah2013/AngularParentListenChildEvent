import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() name;
  @Output() onVoted:any = new EventEmitter<boolean>();
  voted = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agree: boolean) {
    this.onVoted.emit(agree);
    this.voted = true;
  }

}
