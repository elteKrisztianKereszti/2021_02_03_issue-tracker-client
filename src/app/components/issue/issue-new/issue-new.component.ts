import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-new',
  templateUrl: './issue-new.component.html',
  styleUrls: ['./issue-new.component.css']
})
export class IssueNewComponent implements OnInit {

  constructor(private issueService: IssueService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onSaveIssue(issue: Issue): void {
    this.issueService.add(issue);
    this.router.navigate(['/issues']);
  }
}
