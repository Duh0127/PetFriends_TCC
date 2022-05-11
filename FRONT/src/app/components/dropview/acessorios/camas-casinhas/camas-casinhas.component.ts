import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-camas-casinhas',
  templateUrl: './camas-casinhas.component.html',
  styleUrls: ['./camas-casinhas.component.css']
})
export class CamasCasinhasComponent implements OnInit {

  constructor( 
      private router: Router
  ) { }

  ngOnInit(): void {
  }

}
