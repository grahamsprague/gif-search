import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search_value: string;
  constructor(private data: DataServiceService) {}

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(this.search_value);
    this.data.changeMessageSearch(this.search_value);
  }

}
