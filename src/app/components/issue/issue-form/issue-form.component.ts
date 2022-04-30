import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css'],
})
export class IssueFormComponent implements OnInit {
  public issue: Issue;
  public issueForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private issueService: IssueService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) {
    this.issueForm = this.formBuilder.group({
      id: [undefined],
      title: ['', [Validators.required]],
      description: '',
      place: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  public ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.issue = this.issueService.get(id);
      this.issueForm.patchValue(this.issue);
    }
  }

  public onSubmit(): void {
    if (!this.issueForm.valid) {
      return;
    }

    if (this.issue.id) {
      this.issueService.update(this.issue.id, this.issueForm.value);
    }
    else {
      this.issue = this.issueService.add(this.issueForm.value);
    }

    this.router.navigate(['issues', this.issue.id]);
  }

  public setIsInvalidClass(property: string): boolean {
    return (
      this.issueForm.get(property)?.invalid &&
      (this.issueForm.get(property)?.dirty ||
        this.issueForm.get(property)?.touched)
    );
  }
}
