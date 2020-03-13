import { Produits } from '../produits/produits.model';

export interface Recettes {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: Produits[];
    desc: string;

}