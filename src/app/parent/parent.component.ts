import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  names = ["Alex", "David", "John"]
  constructor() { }

  ngOnInit() {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++
  }

}
