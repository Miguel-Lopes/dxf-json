import DxfArrayScanner, { type ScannerGroup } from '../../DxfArrayScanner';
import { DimensionEntity } from './types';
export default class DimensionParser {
    static ForEntityName: string;
    parseEntity(scanner: DxfArrayScanner, curr: ScannerGroup): DimensionEntity;
}
