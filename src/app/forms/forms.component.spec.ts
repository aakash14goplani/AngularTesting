import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;

  beforeEach(async(() => {
    component = new FormsComponent();
  }));

  it('should create a form with two controls', () => {
    // console.log(component.form);
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make name control required', () => {
    expect(component.form.get('name').setValue('')).toBeFalsy();
  });
});
