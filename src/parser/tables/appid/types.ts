import type { CommonDxfTableEntry } from '../types';

export interface AppIdTableEntry extends CommonDxfTableEntry {
    subclassMarker: 'AcDbRegAppTableRecord';
    name: string;
    standardFlag: number;
}
