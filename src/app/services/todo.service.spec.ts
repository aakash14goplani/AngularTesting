import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { ServicesComponent } from './services.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { from } from 'rxjs';

describe('TodoService', () => {
    let component: ServicesComponent;
    let fixture: ComponentFixture<ServicesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ServicesComponent ],
            imports: [ HttpClientTestingModule ],
            // providers: [ TodoService ]
        });
        fixture = TestBed.createComponent(ServicesComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should load todos from server using observables', fakeAsync(() => {
        const service = TestBed.get(TodoService);
        // fixture.debugElement.injector.get(TodoService);
        // console.log('service: ', service);
        spyOn(service, 'getTodos').and.callFake(() => {
            return from([ [1, 2, 3] ]);
          });
        component.ngOnInit();
        // fixture.detectChanges();
        tick();
        console.log('component.todos.length: ', component.todos.length);
        expect(component.todos.length).toBe(0); // <= failng :(
        console.log('expect was called');
    }));
});
