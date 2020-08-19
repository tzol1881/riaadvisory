import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInputFromJsonService {

  constructor(private http: HttpClient) { }
  getInputs(): Observable<any> {
    return this.http.get('../../assets/ria.json');
  }

  getInputTest(): Observable<any>{
    return this.http.get('../../assets/test.json');
  }
}
