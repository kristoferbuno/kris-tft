import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemCombinatorService {

  constructor(
    private http: HttpClient
  ) { }

  getItemJson() {
    return this.http.get('assets/json/itempairs.json');
  }
}
