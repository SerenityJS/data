import { Buffer } from 'node:buffer';
import BiomeDefinitionList from './biome_definition_list.json';
import CanonicalBlockStates from './canonical_block_states.json';

const CANONICAL_BLOCK_STATES = Buffer.from(CanonicalBlockStates as number[]);
const BIOME_DEFINITION_LIST = Buffer.from(BiomeDefinitionList as number[]);

export { CANONICAL_BLOCK_STATES, BIOME_DEFINITION_LIST };
