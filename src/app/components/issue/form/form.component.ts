import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
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
