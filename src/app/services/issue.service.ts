import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issues: Array<Issue> = [
    {
      id: 1,
      title: 'Bad Machine',
      description: 'Bad Machine in the Farm',
      status: 'NEW',
      place: 'PC01',
    },
    {
      id: 2,
      title: 'Bad Mouse',
      description: 'Mickey Mouse ill',
      status: 'NEW',
      place: 'PC03',
    },
    {
      id: 3,
      title: 'Jim Raynor angry',
      description: 'Cannot run Stracraft on 386 arch computer',
      status: 'DOING',
      place: 'PC66',
    },
    {
      id: 4,
      title: 'No power',
      description: 'NO power in PC42',
      status: 'DONE',
      place: 'PC42',
    },
  ];

  constructor(private httpClient: HttpClient) {

  }

  public getAll(): Observable<Array<Issue>> {
    return this.httpClient.get<Array<Issue>>('http://127.0.0.10/api/issues');
    //return this.issues;
  }

  public get(id: number): Issue {
    return this.issues.find((i: Issue) => i.id === id);
  }

  public update(id: number, updatedIssue: Issue): Issue {
    let issue = this.get(id);
    if (issue) {
      Object.assign(issue, updatedIssue);
    }

    return issue;
  }

  public add(newIssue: Issue): Issue {
    newIssue.id = new Date().getMilliseconds();
    this.issues.push(newIssue);

    return newIssue;
  }

  public delete(id: number): void {
    let issue: Issue = this.get(id);
    if (issue) {
      this.issues.splice(this.issues.indexOf(issue), 1);
    }
  }
}
