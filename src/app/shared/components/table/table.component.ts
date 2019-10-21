import { Component, OnInit } from '@angular/core';
import { SoftwareService } from 'src/app/shop/services/software.service';
import { Software } from 'src/app/shop/models/software.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  softwareData: Software[];
  headers: string[] = ['Name', 'Type', 'Description', 'Module Strength', 'Cost'];

  constructor(private softwareService: SoftwareService) { }

  ngOnInit() {
    this.softwareService.getAllData().subscribe(data => {
      this.softwareData = data;
    },
    (error) => {

    },
    () => {

    })
  }
}
