import type { CommonDxfEntity } from '../shared';
import type { Point3D } from '../../../types';
export interface Ole2FrameEntity extends CommonDxfEntity {
    type: 'OLE2FRAME';
    subclassMarker: 'AcDbOle2Frame';
    oleVersion: number;
    oleType: number;
    tileMode: number;
    binaryDataSize: number;
    upperLeft: Point3D;
    lowerRight: Point3D;
    binaryData: string[];
    oleClassName: string;
}
