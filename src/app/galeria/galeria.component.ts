import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  ngOnInit(): void {
    this.indexFotoAtual = 0;
    this.fotoAtual = this.fotos[0];
    this.statusPagina = `1 de ${this.fotos.length}`;
  }

  @Input() title: string;

  @Input() fotos: string[];

  fotoAtual: string;
  indexFotoAtual: number;
  statusPagina: string;

  primeiraFoto() {
    this.indexFotoAtual = 0;
    this.fotoAtual = this.fotos[this.indexFotoAtual];
    this.statusPagina = `${this.indexFotoAtual + 1} de ${this.fotos.length}`;
  }

  proximaFoto() {
    this.indexFotoAtual++;
    console.log(this.indexFotoAtual);
    this.fotoAtual = this.fotos[this.indexFotoAtual];
    this.statusPagina = `${this.indexFotoAtual + 1} de ${this.fotos.length}`;
  }

  anteriorFoto() {
    this.indexFotoAtual--;
    console.log(this.indexFotoAtual);
    this.fotoAtual = this.fotos[this.indexFotoAtual];
    this.statusPagina = `${this.indexFotoAtual + 1} de ${this.fotos.length}`;
  }

  ultimaFoto() {
    this.indexFotoAtual = this.fotos.length - 1;
    this.fotoAtual = this.fotos[this.indexFotoAtual];
    this.statusPagina = `${this.indexFotoAtual + 1} de ${this.fotos.length}`;
  }
}
