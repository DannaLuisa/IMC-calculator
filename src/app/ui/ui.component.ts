import { Component, OnInit } from '@angular/core';
import { edad } from '../edad/edad';
import { genero } from '../genero/genero';
import { imc } from '../imc/imc';
import { rango } from '../rango/rango';
import { ImcsModel } from '../models/imcs.model';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit { 

  imcs:ImcsModel = new ImcsModel();  

  arrImcs = [];

  genero = 0;
  sexo = '';
  altura;
  edad;
  peso;
  rango ='';
  imc = 0;
  tipoEdad = '';

  myDate = new Date();
    
  constructor(private auth: AuthService, private router: Router) {
    this.getImc();
  }

  ngOnInit(): void {
  }

  calcular(){
    this.insertar();
    this.gen();
    this.estado();
    this.getImc();
    this.limpiar();
  }

  insertar(){
    let resul = null;
    resul = imc(this.altura, this.peso);
    this.imc = resul;
    this.imcs.idUser = Number(localStorage.getItem('ident'));
    this.imcs.resultado = String(this.imc.toFixed(1));
    this.imcs.fecha = `${this.myDate.getDate()}/${this.myDate.getMonth()+1}/${this.myDate.getFullYear()} ${this.myDate.getHours()}:${this.myDate.getMinutes()}`;
    this.auth.insertImc(this.imcs).subscribe( resp =>{
      resp;
    });
  }

  limpiar(){
    this.genero = 0;
    this.altura;
    this.edad;
    this.peso;

  }

  estado(){
    let res = '';
    this.tipoEdad = edad(this.edad);
    res = rango(this.tipoEdad,this.imc, this.sexo);
    this.rango = res;
  }

  gen(){
    let res = '';
    res = genero(this.genero);
    this.sexo = res;
  }

  getImc(){
   this.auth.getImcs(localStorage.getItem('ident')).subscribe((imcRes: any)=>{
      this.arrImcs = imcRes;
   });
  }

  exit(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
