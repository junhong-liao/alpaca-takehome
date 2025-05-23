-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SessionNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rawText" TEXT NOT NULL,
    "generatedNote" TEXT,
    "title" TEXT NOT NULL DEFAULT 'Session Note',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_SessionNote" ("createdAt", "generatedNote", "id", "rawText") SELECT "createdAt", "generatedNote", "id", "rawText" FROM "SessionNote";
DROP TABLE "SessionNote";
ALTER TABLE "new_SessionNote" RENAME TO "SessionNote";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
