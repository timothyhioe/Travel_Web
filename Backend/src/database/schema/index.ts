// !Import all database schemas - import * as xyz from is necessary
import * as diaryEntryToTag from './diary-entry-to-tag.schema.js';
import * as diaryEntry from './diary-entry.schema.js';
import * as tag from './tag.schema.js';
import * as user from './user.schema.js';

export const databaseSchema = {
  ...diaryEntry,
  ...tag,
  ...user,
  ...diaryEntryToTag,
};
