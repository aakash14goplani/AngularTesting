import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingIntegrationComponent } from './voting-integration.component';
import { By } from '@angular/platform-browser';

describe('VotingIntegrationComponent', () => {
  let component: VotingIntegrationComponent;
  let fixture: ComponentFixture<VotingIntegrationComponent>;

  beforeEach(() => {
    component = new VotingIntegrationComponent();
    TestBed.configureTestingModule({
      declarations: [ VotingIntegrationComponent ]
    });
    fixture = TestBed.createComponent(VotingIntegrationComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const debugElementRef = fixture.debugElement.query(By.css('.vote-count'));
    /* let debugElementRef[] = fixture.debugElement.queryAll(By.css('.vote-count'));
    let debugElementRef = fixture.debugElement.query(By.directive(VotingIntegrationComponent i.e. directive-name )); /*
    expect(component).toBeTruthy(); */

    const element: HTMLElement = debugElementRef.nativeElement;
    expect(element.innerText).toBe('21');
  });

  it('it should highlight upvoted button if I upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const debugElementRef = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(debugElementRef.classes.highlighted).toBeTruthy();
  });

  it('it should increase total vote count if I upvoted', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);
    expect(component.totalVotes).toBe(1);
  });
});
