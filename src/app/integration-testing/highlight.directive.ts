import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  defaultColor =  'yellow';
  @Input() bgColor: string;

  constructor(private el: ElementRef) {  }

  ngOnInit() {
    // console.log('ts: ', this.bgColor, ' for ', this.el.nativeElement);
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }
}
