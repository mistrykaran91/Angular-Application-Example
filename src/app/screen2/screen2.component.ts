import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
  @ViewChild(MatAccordion, { static: false }) accordion: MatAccordion;
  constructor() { }

  ngOnInit() {
  }

}
