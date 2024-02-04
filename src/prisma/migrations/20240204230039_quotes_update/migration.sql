/*
  Warnings:

  - You are about to alter the column `quoteeId` on the `oldQuote` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `quoteeId` on the `Quote` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_oldQuote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quoteId" INTEGER NOT NULL,
    "quoteeId" INTEGER NOT NULL,
    "quote" TEXT NOT NULL
);
INSERT INTO "new_oldQuote" ("id", "quote", "quoteId", "quoteeId") SELECT "id", "quote", "quoteId", "quoteeId" FROM "oldQuote";
DROP TABLE "oldQuote";
ALTER TABLE "new_oldQuote" RENAME TO "oldQuote";
CREATE TABLE "new_Quote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quoteeId" INTEGER NOT NULL,
    "quote" TEXT NOT NULL
);
INSERT INTO "new_Quote" ("id", "quote", "quoteeId") SELECT "id", "quote", "quoteeId" FROM "Quote";
DROP TABLE "Quote";
ALTER TABLE "new_Quote" RENAME TO "Quote";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
