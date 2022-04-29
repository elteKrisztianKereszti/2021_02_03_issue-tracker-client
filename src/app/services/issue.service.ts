import { Injectable } from '@angular/core';
import { Issue } from '../issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Array<Issue> = [
    {
      id: 1,
      title: 'Bad Machine',
      description: 'Bad Machine in the Farm',
      status: 'NEW',
      place: 'PC01'
    },
    {
      id: 2,
      title: 'Bad Mouse',
      description: 'Mickey Mouse ill',
      status: 'NEW',
      place: 'PC03'
    },
    {
      id: 3,
      title: 'Jim Raynor angry',
      description: 'Cannot run Stracraft on 386 arch computer',
      status: 'DOING',
      place: 'PC66'
    },
    {
      id: 4,
      title: 'No power',
      description: 'NO power in PC42',
      status: 'DONE',
      place: 'PC42'
    },
  ];

  constructor() { }

  public getAll(): Array<Issue> {
    return this.issues;
  }

  public get(id: number): Issue | undefined  {
    return this.issues.find((i: Issue) => i.id === id);
  }
}
