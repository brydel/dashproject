/*
  Warnings:

  - You are about to drop the column `endDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `createdAT` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `createdAT` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `createdAT` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Made the column `address` on table `Parent` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Made the column `address` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodType` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Made the column `address` on table `Teacher` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Parent" DROP COLUMN "createdAT",
DROP COLUMN "lastName",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "address" SET NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "createdAT",
DROP COLUMN "lastName",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "img" TEXT,
ALTER COLUMN "address" SET NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "createdAT",
DROP COLUMN "lastName",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "bloodType" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "img" TEXT,
ADD COLUMN     "sex" "UserSex" NOT NULL,
ALTER COLUMN "address" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
