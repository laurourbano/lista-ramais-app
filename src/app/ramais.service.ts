import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RamaisService {
  private jsonUrl = 'assets/ramais.json'; // Caminho para o arquivo JSON

  constructor(private http: HttpClient) {}

  getRamais(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
