import { Injectable } from '@angular/core';
import { Recettes } from './recettes.model';
import { Produits } from '../produits/produits.model';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  oeuf: Produits = {
    nom: "Oeuf",
    quantite: "3",
  }
  lait: Produits = {
    nom: "Lait",
    quantite: "50CL",
  }
  farine: Produits = {
    nom: "Farine",
    quantite: "300g",
  }
  crevettes: Produits = {
    nom: "Crevettes",
    quantite: "500g",
  }
  champignons: Produits = {
    nom: "Champignons",
    quantite: "200g",
  }
  pates: Produits = {
    nom: "Pâtes",
    quantite: "500g",
  }
  riz: Produits = {
    nom: "Riz",
    quantite: "1kg",
  }
  carrotes: Produits = {
    nom: "Carrotes",
    quantite: "400g",
  }
  poisson: Produits = {
    nom: "Poisson",
    quantite: "1kg",
  }
  choux: Produits = {
    nom: "Choux",
    quantite: "300g",
  }

  private recettes: Recettes[] = [
    {
      id: 'recette_1',
      title: 'Pancakes',
      imageUrl:
        'assets/icon/img1.jpeg',
      // ingredients: ['2 eufs', 'Lait', 'Farine'],
      ingredients: [this.oeuf, this.lait, this.farine],
      desc: "Battre grossièrement l'oeuf et le sucre dans un saladier. Y rajouter le beurre fondu ou l'huile. Mélanger à part la farine et la levure"
    },
    {
      id: 'recette_2',
      title: 'Pâtes aux crevettes',
      imageUrl:
        'assets/icon/img2.jpg',
      //ingredients: ['Crevettes', 'Champignons ', 'Pâtes'],
      ingredients: [this.crevettes, this.champignons, this.pates],
      desc: "Quand les oignons sont bien dorés, ajoutez-y les crevettes, faites revenir 5 min puis ajoutez les tomates coupées en dés."
    },
    {
      id: 'recette_3',
      title: 'Tiep Bou Dieun',
      imageUrl:
        'assets/icon/img3.jpg',
      ingredients: [this.riz, this.carrotes, this.poisson,this.choux],
      desc: "Rectifiez l’assaisonnement de la sauce avec les légumes si nécessaire. Ajoutez les morceaux de poisson, ainsi que le guedjef et le yété. Laissez mijoter le tout 15 min. "
    }
  ];


  constructor() { }

  getAllRecettes() {
    return [...this.recettes];
  }

  getRecette(recetteId: string) {
    return {
      ...this.recettes.find(recette => {
        return recette.id === recetteId;
      })
    };
  }

  supprimerRecette(recetteId: string) {
    this.recettes = this.recettes.filter(recette => {
      return recette.id !== recetteId;
    });
  }
}