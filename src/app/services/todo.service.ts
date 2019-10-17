import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  randomArray: any[] = [];

  public add(todo): Observable<any[]> {
    return this.http
    .post<{name: string}>('https://angular-practice-166c4.firebaseio.com/posts.json', todo)
    .pipe(map(responseData => {
      this.randomArray.push(responseData);
      return this.randomArray;
    }));
  }

  public getTodos(): Observable<any[]> {
    return this.http
    .get<{name: string}>('https://angular-practice-166c4.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      this.randomArray.push(responseData);
      return this.randomArray;
    }));
  }

  public delete(id): Observable<any[]> {
    return this.http
    .delete<{name: string}>('https://angular-practice-166c4.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      this.randomArray.push(responseData);
      return this.randomArray;
    }));
  }
}
