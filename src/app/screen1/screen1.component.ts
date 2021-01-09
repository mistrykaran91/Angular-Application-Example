import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  pageTitle = "Product Edit";
  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(): void {
    this.productForm = this.formBuilder.group({
      airframe: [],
      apu: [],
      dom: [],
      regCurrent: [],
      regFuture: [],
      type: [],
      msn: [],
      manualEff: [],
      wvCurrent: [],
      wvHistFuture: [],
      apuType: [],
      apuPN: [],
      apuSN: [],
      engineType: [],
      engine1: [],
      rating1: [],
      engine2: [],
      rating2: []
    });
  }

}
