import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public issue: Issue = new Issue();

  constructor(private issueService: IssueService) {
    this.issue = issueService.getAll()[0];
   }

  ngOnInit(): void {
  }

}
