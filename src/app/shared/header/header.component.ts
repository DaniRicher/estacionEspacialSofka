import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  finalizarApp() {
    Swal.fire({
      title: '¿Seguro que desea terminar la aplicación?',
      showCancelButton: true,
    }).then((result) => {

      if ( result.isConfirmed ) {
        localStorage.clear();;
      } 
    })
  }

}
