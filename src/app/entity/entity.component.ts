
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.css'
})
export class EntityComponent implements OnInit{
  entityData: any;
  url: string = '/assets/entity.json';

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
  }
};

