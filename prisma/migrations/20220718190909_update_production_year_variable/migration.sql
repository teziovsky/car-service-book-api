/*
  Warnings:

  - You are about to drop the column `production_year` on the `cars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "production_year",
ADD COLUMN     "productionYear" TEXT;
