import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {
@Input() value="";
  constructor() { }

  ngOnInit() {
  }

}
