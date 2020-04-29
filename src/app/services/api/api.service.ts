import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public countries: any;

  constructor(
    private http: HttpClient
  ) { }

  async getCountries() {
    this.countries = await this.http.get('https://restcountries.eu/rest/v2/all?fields=name').toPromise();
    // console.log('getCountries', this.countries);
  }

}
