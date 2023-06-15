import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WeatherService } from '../weatherService';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  /**
   *
   */
  constructor(private dialog:MatDialogRef<DeleteComponent>) {

  }
 close(state:boolean){
  this.dialog.close(state);
 }

}
