import { Injectable } from '@angular/core';
import { Recettes } from './recettes.model';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  private recettes : Recettes [] = [
    {
      id : "recette_1",
      title : "Pancakes pour 2",
      imageUrl : "assets/icon/img1.jpeg",
      ingredients : ['2 oeufs' , 'Lait', 'Farine' ]
    },
    {
      id : "recette_2",
      title : "Pates aux crevettes",
      imageUrl : "assets/icon/img2.jpg",
      ingredients : ['Crevettes' , 'Champignons', 'Pates' ]
    },
    {
      id : "recette_3",
      title : "Tiep bou djeune",
      imageUrl : "assets/icon/img3.jpg",
      ingredients : ['Riz' , 'Carrote', 'Poisson', 'Choux', 'Huile' ]
 
    }

  ];

  getAllRecettes(){
    return [...this.recettes];
  }

  getRecette(recetteId : string){
    return {
      ...this.recettes.find(recette => {
        return recette.id == recetteId;
      })
    }
  }

  suppressionRecette(recetteId: string){
    this.recettes = this.recettes.filter( recette => {
      return recette.id !== recetteId;
    })  

  }
  constructor() { }
}

