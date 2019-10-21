import { SoftwareType } from '../enums/software-type.enum';
import { ModuleStrength } from '../enums/module-strength.enum';

export class Software {
    name: string;
    type: SoftwareType;
    moduleStrength: ModuleStrength;
    description: string;
    cost: number;
}