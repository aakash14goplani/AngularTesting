import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {}
}

class ActivatedRouterStub {
  // params: Observable<any> = EMPTY;
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouterStub }
      ]
    });

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should redirect users to user page when saved', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.save();
    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should redirect users to page not found when invalid id is passed', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const route: ActivatedRouterStub = TestBed.get(ActivatedRoute);
    route.push({id: 0});
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
