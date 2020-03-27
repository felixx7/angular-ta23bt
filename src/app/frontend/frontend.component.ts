import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})

export class FrontendComponent implements OnInit {

  news = [
    { "id": "cellNamec", "itemName": "Cell Name", "category": "Cell" },
    { "id": "siteIdc", "itemName": "Site ID", "category": "Cell" },
    { "id": "cgic", "itemName": "CGI", "category": "Cell" }
  ];  

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }



}
