import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: Country[];
    constructor(private countriesService: CountriesService ) { }

    ngOnInit(): void {
        this.countriesService.getCountries().subscribe(countries => {
            this.countries = countries;
        })
    }
}
