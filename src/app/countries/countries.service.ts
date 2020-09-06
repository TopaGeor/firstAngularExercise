import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class CountriesService {

constructor(private http: HttpClient) { }

    getCountries(): Observable<Country[]>{
        return (this
            .http
            .get<Country[]>('https://restcountries.eu/rest/v2/')
            .pipe(
                map(data => {
                    return data.map(country => {
                        return {
                            name: country.name,
                            flag: country.flag,
                            capital: country.capital,
                            region: country.region
                        };
                    });
                })
            )
        )
    }
}
