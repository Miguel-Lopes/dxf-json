import type { CommonDxfEntity } from '../shared';
import type { Point3D } from '../../../types';
export interface WipeoutEntity extends CommonDxfEntity {
    type: 'WIPEOUT';
    subclassMarker: 'AcDbWipeout';
    displayOptions: number;
    imageSize: {
        x: number;
        y: number;
    };
    imagePosition: Point3D;
}
