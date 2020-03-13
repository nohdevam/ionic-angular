import { Component, OnInit } from '@angular/core';
import { Recettes } from './recettes.model';
import { RecettesService } from './recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  recettes : Recettes[]
 
  constructor(private recetteService: RecettesService) { }

  ngOnInit() {
  
  }
ionViewWillEnter(){
  console.log("ionViewWillEnter");
  this.recettes = this.recetteService.getAllRecettes();

}
ionViewDidEnter(){
  console.log("ionViewDidEnter");

}
ionViewWillLeave(){
  console.log("ionViewWillLeave");

}
ionViewDidLeave(){
  console.log("ionViewDidLeave");

}	
}
