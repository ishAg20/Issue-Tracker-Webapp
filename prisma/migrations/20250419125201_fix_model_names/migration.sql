-- DropIndex
DROP INDEX `Issue_assignedToUserId_fkey` ON `issue`;

-- AlterTable
ALTER TABLE `account` MODIFY `refresh_token` TEXT NULL,
    MODIFY `access_token` TEXT NULL,
    MODIFY `id_token` TEXT NULL;
