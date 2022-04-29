import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() issue: Issue;

  constructor() {
  }

  ngOnInit(): void {
  }

}
