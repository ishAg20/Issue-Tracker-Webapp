-- AlterTable
ALTER TABLE `account` MODIFY `refresh_token` VARCHAR(191) NULL,
    MODIFY `access_token` VARCHAR(191) NULL,
    MODIFY `id_token` VARCHAR(191) NULL;
