import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css'],
})
export class IssueFormComponent implements OnInit {
  @Input() issue: Issue;

  public issueForm: FormGroup;

  @Output() saveIssue: EventEmitter<Issue> = new EventEmitter<Issue>();

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      id: [this.issue?.id],
      title: [this.issue?.title, [Validators.required]],
      description: this.issue?.description,
      place: [this.issue?.place, [Validators.required]],
      status: [this.issue?.status, [Validators.required]],
    });
  }

  public onSubmit(): void {
    if (this.issueForm.valid) {
      this.saveIssue.emit(this.issueForm.value as Issue);
    }
  }

  public setIsInvalidClass(property: string): boolean {
    return (
      this.issueForm.get(property)?.invalid &&
      (this.issueForm.get(property)?.dirty ||
        this.issueForm.get(property)?.touched)
    );
  }
}
