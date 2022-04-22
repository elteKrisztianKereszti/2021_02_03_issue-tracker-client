import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-glink',
  templateUrl: './glink.component.html',
  styleUrls: ['./glink.component.css']
})
export class GlinkComponent implements OnInit {
  @Input() query: string = '';
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onLinkClick(e: any) {
    e.preventDefault();
    this.clicked.emit(this.query.toUpperCase());
  }

  customFunc() {

  }
}
