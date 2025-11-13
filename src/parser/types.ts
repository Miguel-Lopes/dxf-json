import type { DxfHeader } from '../types/dxfHeader';
import type { DxfBlock } from './blocks/types';
import type { CommonDxfEntity } from './entities/shared';
import type { CommonDXFObject } from './objects';
import type { BlockRecordTableEntry, DimStylesTableEntry, LayerTableEntry, LTypeTableEntry, StyleTableEntry, DxfTable, VPortTableEntry } from './tables';
import { AppIdTableEntry } from './tables/appid'; //TODO find why cant import directly from ./tables

export interface ParsedDxf {
    header: DxfHeader;
    blocks: Record<string, DxfBlock>;
    entities: CommonDxfEntity[];
    tables: {
        BLOCK_RECORD?: DxfTable<BlockRecordTableEntry>;
        DIMSTYLE?: DxfTable<DimStylesTableEntry>;
        STYLE?: DxfTable<StyleTableEntry>;
        LAYER?: DxfTable<LayerTableEntry>;
        LTYPE?: DxfTable<LTypeTableEntry>;
        VPORT?: DxfTable<VPortTableEntry>;
        APPID?: DxfTable<AppIdTableEntry>;
    };
    objects: {
        byName: Record<string, CommonDXFObject[]>;
        byTree?: CommonDXFObject;
    };
}
