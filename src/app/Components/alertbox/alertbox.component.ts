import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.css']
})
export class AlertboxComponent implements OnInit {

  @Input() message: string="";
  @Input() type: string="";
  check: boolean= true;
  
  constructor() { }

  ngOnInit(): void {
    if(this.type == "error") this.check= false;
  }

}
