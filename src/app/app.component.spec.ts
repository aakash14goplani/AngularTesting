import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'jasmine-test-basics'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('jasmine-test-basics');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to jasmine-test-basics!');
  });

  it('should have a router outlet', () => {
    const debugElementRef = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElementRef).not.toBeNull();
  });

  it('should have a link to todos page', () => {
    const debugElementRef = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    // const index = debugElementRef.findIndex(element => element.properties.href === '/todos');
    const index = debugElementRef.findIndex(element => {
      // console.log('element:', element);
      // console.log('href:', element.attributes.routerLink);
      return element.attributes.routerLink === 'todos';
    });
    // console.log('index:', index);
    expect(index).toBeGreaterThan(-1);
  });
});
