import { Injectable } from '@angular/core';
import { SoftwareType } from '../enums/software-type.enum';
import { Software } from '../models/software.model';
import { ModuleStrength } from '../enums/module-strength.enum';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  softwareType = SoftwareType;
  moduleStrength = ModuleStrength;

  softwareData: Software[] = [
      {
        name: 'Z OS',
        type: this.softwareType.OS,
        description: 'This is a standard Operating System used all accrossed our Solar System.',
        moduleStrength: this.moduleStrength.VeryWeak,
        cost: 1000000
      },
      {
        name: 'Attack Module v0.54',
        type: this.softwareType.Attack,
        description: 'Most basic attack module for small vessel.',
        moduleStrength: this.moduleStrength.VeryWeak,
        cost: 30000
      },
      {
        name: 'Attack Module v0.76',
        type: this.softwareType.Attack,
        description: 'Basic attack module, with upgraded capabilities compared to v0.54.',
        moduleStrength: this.moduleStrength.Weak,
        cost: 50000
      },
      {
        name: 'Defense Field v0.81',
        type: this.softwareType.Defense,
        description: 'Basic Defensive field for small vessel. It was design to stop small meteorites and very small laser weapons.',
        moduleStrength: this.moduleStrength.VeryWeak,
        cost: 45000
      },
      {
        name: 'PowerPlant Software v0.9',
        type: this.softwareType.Power,
        description: 'Basic PowerPlant distribution software for small vessel',
        moduleStrength: this.moduleStrength.VeryWeak,
        cost: 20000
      }
    ];

  constructor() { }

  getAllData(): Observable<Software[]> {
    return of(this.softwareData);
  }
}

