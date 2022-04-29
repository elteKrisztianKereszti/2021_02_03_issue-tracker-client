import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() issue: Issue;
  @Output() saveIssue: EventEmitter<Issue> = new EventEmitter<Issue>();

  public issueForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      id: [ this.issue.id ],
      title: [ this.issue.title, [ Validators.required ]],
      description: this.issue.description,
      place: [ this.issue.place, [ Validators.required ]],
      status: [ this.issue.status, [ Validators.required ]],
    });
  }

  public onSubmit(e: any) {
    e.preventDefault();
    console.log(this.issueForm);
    console.log(this.issueForm.value);
    if (this.issueForm.valid) {
      this.saveIssue.emit(this.issueForm.value as Issue);
    }

  }

  public setIsInvalidClass(property: string) {
    return this.issueForm.get(property)?.invalid && (this.issueForm.get(property)?.dirty || this.issueForm.get(property)?.touched)
  }
}
