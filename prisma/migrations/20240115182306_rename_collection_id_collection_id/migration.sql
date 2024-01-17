/*
  Warnings:

  - You are about to drop the column `collectionId` on the `Book` table. All the data in the column will be lost.
  - Added the required column `collection_id` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_collectionId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "collectionId",
ADD COLUMN     "collection_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
