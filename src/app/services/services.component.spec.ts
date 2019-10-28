import { ServicesComponent } from './services.component';
import { TodoService } from './todo.service';
import { from, EMPTY, throwError } from 'rxjs';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let todoService: TodoService;

  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ServicesComponent ],
      providers: [ TodoService ]
    });
  }));

  beforeEach(() => {
    todoService = new TodoService(null);
    component = new ServicesComponent(todoService);
  });

  it('should initialize todo array', () => {
    const todoArray: any[] = [1, 2, 3];
    spyOn(todoService, 'getTodos').and.callFake(() => {
      return from([ todoArray ]);
    });

    component.ngOnInit();
    // console.log('todoArray.length: ', todoArray.length);
    expect(component.todos.length).toBeGreaterThan(todoArray.length - 1);
  });

  it('should call server to save changes when new todo item is added', () => {
    const spy = spyOn(todoService, 'add').and.callFake((todoItem) => {
      return EMPTY;
    });

    component.add();
    expect(spy).toHaveBeenCalled();
  });
  it('should add new todo item returned from server', () => {
    const todo: any = { id: 1 };
    /* spyOn(todoService, 'add').and.callFake((todoItem) => {
      return from( [todo] );
    }); */

    spyOn(todoService, 'add').and.returnValue(from( [todo] ));

    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });
  it('should set message property if server returns error when adding new todo', () => {
    const errorMessage = 'Error from server';
    spyOn(todoService, 'add').and.returnValue( throwError(errorMessage) );

    component.add();
    expect(component.message).toBe(errorMessage);
  });

  it('should call server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(todoService, 'delete').and.returnValue( EMPTY );

    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
  it('should NOT call server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(todoService, 'delete').and.returnValue( EMPTY );

    component.delete(1);
    expect(spy).not.toHaveBeenCalledWith(1);
  });
  // skip test execution
  xit('should skip this test', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(todoService, 'delete').and.returnValue( EMPTY );

    component.delete(1);
    expect(spy).not.toHaveBeenCalledWith(1);
  });

});
