import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { usuarioModel } from '../models/usuario.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usuario: usuarioModel = new usuarioModel();


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor ...',
    });
    Swal.showLoading();

    this.auth.signup(this.usuario).subscribe(
      resp =>{
        Swal.close();
        this.router.navigateByUrl('/ui');
      },(error)=>{
        
        Swal.fire({
          icon: 'error',
          title: 'Al Autenticar',
          text: error.error.message,
        });
      }
    );

  }

}