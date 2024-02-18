import { Buffer } from 'node:buffer';
import CreativeContent from './creative_content.json' assert { type: 'json' };
import Itemstates from './itemstates.json' assert { type: 'json' };

const CREATIVE_CONTENT = Buffer.from(CreativeContent as number[]);
const ITEM_STATES = Buffer.from(Itemstates as number[]);

export { CREATIVE_CONTENT, ITEM_STATES };
