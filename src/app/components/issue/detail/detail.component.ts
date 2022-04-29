import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public issue: Issue;

  constructor(private issueService: IssueService,
    private activatedRoute: ActivatedRoute) { }

    public ngOnInit(): void {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.issue = this.issueService.get(id) as Issue;
    }
}
