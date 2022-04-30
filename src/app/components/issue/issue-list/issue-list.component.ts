import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit{
  public issues: Array<Issue> = []
  public selectedStatus: string;
  public selectedIssue: Issue;

  constructor(private issueService: IssueService) {
  }

  public ngOnInit(): void {
    this.selectedStatus = '';
    this.filter();
  }

  public onFilterChanged(newStatus: string) {
    console.log(newStatus);
    this.selectedStatus = newStatus;
    this.filter();
  }

  public filter(): void {
    this.issues = this.issueService.getAll();

    this.issues = this.selectedStatus ?
      this.issues.filter((i: Issue) => i.status === this.selectedStatus) :
      this.issues;
  }

  public onSaveIssue(issue: Issue): void {
    this.issueService.update(issue.id, issue);
    // save
  }
}