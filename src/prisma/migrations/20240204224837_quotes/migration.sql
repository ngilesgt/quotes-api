-- CreateTable
CREATE TABLE "Quotee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Quote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quoteeId" TEXT NOT NULL,
    "quote" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "oldQuote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quoteId" INTEGER NOT NULL,
    "quoteeId" TEXT NOT NULL,
    "quote" TEXT NOT NULL
);
