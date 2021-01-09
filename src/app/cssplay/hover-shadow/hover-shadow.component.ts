import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-shadow',
  templateUrl: './hover-shadow.component.html',
  styleUrls: ['./hover-shadow.component.scss']
})
export class HoverShadowComponent implements OnInit {

  currentValue = '';
  defaultValue = 5;
  passwordType: string = 'password';
  constructor() {
  }

  ngOnInit() {
    const input = document.querySelector('#emailTest') as HTMLInputElement;
    const password = document.querySelector('#password') as HTMLInputElement;
    const showPassword = document.querySelector('#showPassword') as HTMLInputElement;

    this.setEyebrow();
    this.setEyeLeftPixel(0);

    password.addEventListener('focus', (e) => {
      this.closeEyes()
    });

    password.addEventListener('blur', (e) => {
      this.openEyes()
    });

    showPassword.addEventListener('change', (e: any) => {

      this.passwordType = e.target.checked ? 'text' : 'password';

      if (e.target.checked) {

        const eyeList = document.querySelectorAll('.eye');
        eyeList.forEach((e: HTMLElement, index: number) => {
          if (index === 1) {
            e.classList.add('close-eyes');
          } else {
            e.classList.remove('close-eyes');
          }
        });
      } else {
        this.closeEyes();
      }
    });

    input.addEventListener('blur', () => {
      const eyeList = document.querySelectorAll('.eye');
      eyeList.forEach((e: HTMLElement) => {
        e.style.setProperty('left', `${this.defaultValue}px`);
      });
    });

    input.addEventListener('focus', (e: any) => {
      debugger;
      this.openEyes();
      const eyeList = document.querySelectorAll('.eye');
      eyeList.forEach((eye: HTMLElement, index: number) => {
        const input = document.querySelector('#emailTest') as HTMLInputElement;
        if (input.value.length === 0) {
          eye.style.setProperty('left', `0px`);
        }
      });

    });

    input.addEventListener('keyup', (e) => {
      const newValue = input.value;

      const length = newValue.length - this.currentValue.length;
      if (length !== 0) {
        this.setEyeLeftPixel(length);
        this.currentValue = input.value;
      }

    });
  }

  closeEyes() {
    const eyeList = document.querySelectorAll('.eye');
    eyeList.forEach((e: HTMLElement, index: number) => {
      e.classList.add('close-eyes');
    });
  }

  setEyebrow() {
    const eyebrowList = document.querySelectorAll('.eye-brow');
    eyebrowList.forEach((e: HTMLElement, index: number) => {

      if (index === 0) {
        e.style.setProperty('border-radius', `110px 55px 0px 0px`);
      } else {
        e.style.setProperty('border-radius', `55px 110px 0px 0px`);
      }
    });
  }

  openEyes() {
    const eyeList = document.querySelectorAll('.eye');
    eyeList.forEach((e: HTMLElement) => {
      e.style.setProperty('height', `11px`);
    });
  }

  setEyeLeftPixel(length: number) {
    const eyeList = document.querySelectorAll('.eye');
    eyeList.forEach((e: HTMLElement) => {
      const input = document.querySelector('#emailTest') as HTMLInputElement;
      if (input.value.length === 0) {
        e.style.setProperty('left', `${this.defaultValue}px`);
        return;
      }

      let leftProperty = 0;
      const threshold = Math.floor(input.value.length / 2);
      if (length > 0) {
        leftProperty = leftProperty + threshold;
      } else if (length < 0) {
        const currentLeftProperty = +e.style.getPropertyValue('left').replace('px', '');
        leftProperty = Math.abs(currentLeftProperty) - 0.5;
      }
      e.style.setProperty('left', `${leftProperty}px`);
    })
  }
}
