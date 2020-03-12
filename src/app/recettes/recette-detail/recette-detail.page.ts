import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecettesService } from '../recettes.service';
import { Recettes } from '../recettes.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {

  chargementRecette : Recettes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetteService: RecettesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recetteId')) {
        return;
      }
      const recetteId = paramMap.get('recetteId');
      this.chargementRecette = this.recetteService.getRecette(recetteId);

    }
    ) 

  }
  suppressionRecette(){
    this.alertCtrl.create({
      message: 'Voulez-vous supprimer cette recette ?',
      header: 'Etes-vous sur ?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
          console.log('annuler est clique')
          return
          ;
          }
        },
        {
          text: 'Valider',
          handler: () => {
          this.recetteService.suppressionRecette(this.chargementRecette.id);
          this.router.navigate(["/recettes"]);
          }
        }
      ]
}).then(alertElement => {
  alertElement.present();
});
  }

}
