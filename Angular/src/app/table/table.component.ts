import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';
import { WeatherService } from '../weatherService';
import { IWeatherForecast } from '../Models/WeatherForecast';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  displayedColumns: string[] = ['id', 'temperatureC', 'temperatureF', 'date', 'summary', 'options'];
  dataSource: IWeatherForecast[] = [];


  constructor(private weatherService: WeatherService, public dialog: MatDialog) {
    this.loadData();
  }

  dialogRef: MatDialogRef<any> | undefined;
  openDialogCreate() {
    this.dialogRef = this.dialog.open(AddComponent, { width: '20%' });

  }

  openDialogEdit(id: number, tempC: number, summary: string): void {
    this.dialogRef = this.dialog.open(EditComponent, { width: '20%', data: { id: id, tempC: tempC, summary: summary } });

  }

  deleteElement(weather: IWeatherForecast) {
    this.weatherService.deleteWeather(weather).subscribe((_) => {
      this.loadData();
    });
  }

  openDialogDelete(weather: IWeatherForecast) {
    this.dialogRef = this.dialog.open(DeleteComponent, { data: { weather: weather } });
    this.dialogRef.afterClosed().subscribe(response => {


      if (response) {
        this.deleteElement(weather);
      }
    });
  }



  loadData() {
    this.weatherService.getWeather().subscribe((temps) => {
      this.dataSource = temps;
    });
  }


}
