import { Component } from '@angular/core';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public issues: Array<Issue> = []

  constructor(private issueService: IssueService) {
    this.issues = this.issueService.getAll();
  }
}
