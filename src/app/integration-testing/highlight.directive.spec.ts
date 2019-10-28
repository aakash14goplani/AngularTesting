import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <p appHighlight [bgColor]="cyan">First</p>
    <p appHighlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    });

    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  xit('it should highlight first para with cyan', () => {
    const debugElementRef = fixture.debugElement.queryAll(By.css('p'))[0];
    /* console.log('p1: ', fixture.debugElement.queryAll(By.css('p'))[0].nativeElement,
    'p2: ', fixture.debugElement.queryAll(By.css('p'))[1].nativeElement); */
    expect(debugElementRef.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('it should highlight second para with default color', () => {
    const debugElementRef = fixture.debugElement.queryAll(By.css('p'))[1];
    const directive = debugElementRef.injector.get(HighlightDirective);
    expect(debugElementRef.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
