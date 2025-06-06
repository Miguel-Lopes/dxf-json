import {
    createParser,
    DXFParserSnippet,
    Identity,
} from '../../shared/parserGenerator';
import { CommonTableEntryParserSnippets } from '../shared';

const AppIdTableParserSnippets: DXFParserSnippet[] = [
    {
        code: 70,
        name: 'standardFlag',
        parser: Identity,
    },
    {
        code: 2,
        name: 'name',
        parser: Identity,
    },
    {
        code: 100,
        name: 'subclassMarker',
        parser: Identity,
    },
    ...CommonTableEntryParserSnippets,
];

export const parseAppIdTable = createParser(AppIdTableParserSnippets);
