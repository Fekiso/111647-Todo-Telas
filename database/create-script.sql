-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydbcompras
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema todotelas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema todotelas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `todotelas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `todotelas` ;

-- -----------------------------------------------------
-- Table `proveedores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `proveedores` ;

CREATE TABLE IF NOT EXISTS `proveedores` (
  `idProveedor` TINYINT NOT NULL AUTO_INCREMENT,
  `denominacion` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `correo` VARCHAR(255) NULL DEFAULT NULL,
  `telefono` BIGINT NOT NULL,
  `fechaAlta` DATETIME NOT NULL,
  `fechaBaja` DATETIME NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idProveedor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `locales`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `locales` ;

CREATE TABLE IF NOT EXISTS `locales` (
  `idLocal` TINYINT NOT NULL AUTO_INCREMENT,
  `local` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idLocal`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `roles` ;

CREATE TABLE IF NOT EXISTS `roles` (
  `idRol` TINYINT NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiposdocs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiposdocs` ;

CREATE TABLE IF NOT EXISTS `tiposdocs` (
  `idTipoDoc` TINYINT NOT NULL AUTO_INCREMENT,
  `tipoDoc` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idTipoDoc`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `personas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `personas` ;

CREATE TABLE IF NOT EXISTS `personas` (
  `idPersona` INT NOT NULL AUTO_INCREMENT,
  `nroDocumento` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `apellido` VARCHAR(255) NOT NULL,
  `correo` VARCHAR(255) NULL DEFAULT NULL,
  `telefono` BIGINT NOT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  `idTipoDoc` TINYINT NOT NULL,
  PRIMARY KEY (`idPersona`, `idTipoDoc`),
  INDEX `fk_personas_tiposdocs_idx` (`idTipoDoc` ASC) VISIBLE,
  CONSTRAINT `fk_personas_tiposdocs`
    FOREIGN KEY (`idTipoDoc`)
    REFERENCES `tiposdocs` (`idTipoDoc`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `estadosempleados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `estadosempleados` ;

CREATE TABLE IF NOT EXISTS `estadosempleados` (
  `idEstado` TINYINT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`idEstado`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `usuarios` ;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `legajo` TINYINT NOT NULL AUTO_INCREMENT,
  `pass` VARCHAR(255) NOT NULL,
  `fechaAlta` DATETIME NOT NULL,
  `fechaBaja` DATETIME NULL DEFAULT NULL,
  `idLocal` TINYINT NOT NULL,
  `idRol` TINYINT NOT NULL,
  `idPersona` INT NOT NULL,
  `idEstado` TINYINT NOT NULL,
  PRIMARY KEY (`legajo`, `idLocal`, `idRol`, `idPersona`, `idEstado`),
  INDEX `fk_usuarios_locales_idx` (`idLocal` ASC) VISIBLE,
  INDEX `fk_usuarios_roles_idx` (`idRol` ASC) VISIBLE,
  INDEX `fk_usuarios_personas_idx` (`idPersona` ASC) VISIBLE,
  INDEX `fk_usuarios_estadosempleados_idx` (`idEstado` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_locales1`
    FOREIGN KEY (`idLocal`)
    REFERENCES `locales` (`idLocal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_roles`
    FOREIGN KEY (`idRol`)
    REFERENCES `roles` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_personas`
    FOREIGN KEY (`idPersona`)
    REFERENCES `personas` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_estadosempleados`
    FOREIGN KEY (`idEstado`)
    REFERENCES `estadosempleados` (`idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `compras`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `compras` ;

CREATE TABLE IF NOT EXISTS `compras` (
  `idCompra` TINYINT NOT NULL AUTO_INCREMENT,
  `fechaAlta` DATETIME NOT NULL,
  `fechaBaja` DATETIME NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  `idProveedor` TINYINT NOT NULL,
  `legajo` TINYINT NOT NULL,
  PRIMARY KEY (`idCompra`, `idProveedor`, `legajo`),
  INDEX `fk_compras_proveedores_idx` (`idProveedor` ASC) VISIBLE,
  INDEX `fk_compras_usuarios_idx` (`legajo` ASC) VISIBLE,
  CONSTRAINT `fk_compras_proveedores`
    FOREIGN KEY (`idProveedor`)
    REFERENCES `proveedores` (`idProveedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_compras_usuarios`
    FOREIGN KEY (`legajo`)
    REFERENCES `usuarios` (`legajo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `descuentos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `descuentos` ;

CREATE TABLE IF NOT EXISTS `descuentos` (
  `idDescuento` TINYINT NOT NULL AUTO_INCREMENT,
  `descuento` VARCHAR(255) NOT NULL,
  `importe` TINYINT NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idDescuento`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tiposproductos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiposproductos` ;

CREATE TABLE IF NOT EXISTS `tiposproductos` (
  `idTipoProd` TINYINT NOT NULL AUTO_INCREMENT,
  `tipoProd` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idTipoProd`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `productos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `productos` ;

CREATE TABLE IF NOT EXISTS `productos` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `ancho` FLOAT NULL DEFAULT NULL,
  `alto` FLOAT NULL DEFAULT NULL,
  `precioXMts` FLOAT NOT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  `idTipoProd` TINYINT NOT NULL,
  PRIMARY KEY (`idProducto`, `idTipoProd`),
  INDEX `fk_productos_tiposproductos_idx` (`idTipoProd` ASC) VISIBLE,
  CONSTRAINT `fk_productos_tiposproductos`
    FOREIGN KEY (`idTipoProd`)
    REFERENCES `tiposproductos` (`idTipoProd`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `stocks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stocks` ;

CREATE TABLE IF NOT EXISTS `stocks` (
  `idProductoStock` TINYINT NOT NULL AUTO_INCREMENT,
  `largo` FLOAT NOT NULL,
  `idLocal` TINYINT NOT NULL,
  `idProducto` INT NOT NULL,
  PRIMARY KEY (`idProductoStock`, `idLocal`, `idProducto`),
  INDEX `fk_stocks_locales_idx` (`idLocal` ASC) VISIBLE,
  INDEX `fk_stocks_productos_idx` (`idProducto` ASC) VISIBLE,
  CONSTRAINT `fk_stocks_locales`
    FOREIGN KEY (`idLocal`)
    REFERENCES `locales` (`idLocal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_stocks_productos`
    FOREIGN KEY (`idProducto`)
    REFERENCES `productos` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `detallescompras`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `detallescompras` ;

CREATE TABLE IF NOT EXISTS `detallescompras` (
  `idDetalleCompra` TINYINT NOT NULL AUTO_INCREMENT,
  `nombreProducto` DATETIME NOT NULL,
  `largo` FLOAT NULL DEFAULT NULL,
  `precioXMts` FLOAT NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  `idCompra` TINYINT NOT NULL,
  `idProductoStock` TINYINT NOT NULL,
  PRIMARY KEY (`idDetalleCompra`, `idCompra`, `idProductoStock`),
  INDEX `fk_detallescompras_compras_idx` (`idCompra` ASC) VISIBLE,
  INDEX `fk_detallescompras_stocks_idx` (`idProductoStock` ASC) VISIBLE,
  CONSTRAINT `fk_detallescompras_compras`
    FOREIGN KEY (`idCompra`)
    REFERENCES `compras` (`idCompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detallescompras_stocks`
    FOREIGN KEY (`idProductoStock`)
    REFERENCES `stocks` (`idProductoStock`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `facturas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `facturas` ;

CREATE TABLE IF NOT EXISTS `facturas` (
  `idFactura` TINYINT NOT NULL AUTO_INCREMENT,
  `fechaAlta` DATETIME NOT NULL,
  `fechaBaja` DATETIME NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  `idDescuento` TINYINT NOT NULL,
  `idPersona` INT NOT NULL,
  `legajo` TINYINT NOT NULL,
  PRIMARY KEY (`idFactura`, `idDescuento`, `idPersona`, `legajo`),
  INDEX `fk_facturas_descuentos_idx` (`idDescuento` ASC) VISIBLE,
  INDEX `fk_facturas_personas_idx` (`idPersona` ASC) VISIBLE,
  INDEX `fk_facturas_usuarios_idx` (`legajo` ASC) VISIBLE,
  CONSTRAINT `fk_facturas_descuentos`
    FOREIGN KEY (`idDescuento`)
    REFERENCES `descuentos` (`idDescuento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_facturas_personas`
    FOREIGN KEY (`idPersona`)
    REFERENCES `personas` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_facturas_usuarios`
    FOREIGN KEY (`legajo`)
    REFERENCES `usuarios` (`legajo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `detallesfacturas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `detallesfacturas` ;

CREATE TABLE IF NOT EXISTS `detallesfacturas` (
  `idDetalleFactura` TINYINT NOT NULL AUTO_INCREMENT,
  `nombreProducto` DATETIME NOT NULL,
  `largo` FLOAT NULL DEFAULT NULL,
  `precioXMts` FLOAT NULL DEFAULT NULL,
  `habilitado` TINYINT(1) NOT NULL,
  `idFactura` TINYINT NOT NULL,
  `idProductoStock` TINYINT NOT NULL,
  PRIMARY KEY (`idDetalleFactura`, `idFactura`, `idProductoStock`),
  INDEX `fk_detallesfacturas_facturas_idx` (`idFactura` ASC) VISIBLE,
  INDEX `fk_detallesfacturas_stocks_idx` (`idProductoStock` ASC) VISIBLE,
  CONSTRAINT `fk_detallesfacturas_facturas`
    FOREIGN KEY (`idFactura`)
    REFERENCES `facturas` (`idFactura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detallesfacturas_stocks`
    FOREIGN KEY (`idProductoStock`)
    REFERENCES `stocks` (`idProductoStock`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
