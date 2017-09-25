import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  textoescrito(s) {
    const texto = ($('#elementoescrito').val());
    this.router.navigate(['buscador/', texto]);
  }
}
