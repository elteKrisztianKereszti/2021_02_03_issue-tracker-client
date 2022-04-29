import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private issueService: IssueService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onSaveIssue(issue: Issue): void {
    this.issueService.add(issue);
    this.router.navigate(['/issues']);
  }
}
