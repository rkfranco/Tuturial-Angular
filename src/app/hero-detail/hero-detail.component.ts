import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero | undefined;
  
  constructor(
    private route: ActivatedRoute,
    // O ActivatedRoutecontém informações sobre a 
    // rota para esta instância do HeroDetailComponent.
    private heroService: HeroService,
    // O HeroService obtém dados de herói do 
    // servidor remoto e este componente os 
    // usará para obter o herói para exibição.
    private location: Location
    // O locationé um serviço Angular para 
    // interagir com o navegador.
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // A route.snapshoté uma imagem estática das informações da rota logo após a criação do componente.
    // O paramMapé um dicionário de valores de parâmetros de rota extraídos da URL. A "id"chave retorna o iddo herói para buscar.
    //Os parâmetros de rota são sempre strings. A função JavaScript Numberconverte a string em um número, que é o que um herói iddeve ser.
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(): void {
    if(this.hero){
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack()); 
      }
  }

  goBack(): void {
    this.location.back();
  }
}
