-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bbdd_Portolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bbdd_Portolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bbdd_Portolio` DEFAULT CHARACTER SET utf8 ;
USE `bbdd_Portolio` ;

-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`Persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`Persona` (
  `idPersona` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `edad` INT(2) NOT NULL,
  `urlFoto` VARCHAR(100) NOT NULL,
  `nombrePuesto` VARCHAR(45) NOT NULL,
  `domicilio` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idPersona`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`Proyecto` (
  `idProyecto` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(100) NULL,
  `linkGitHub` VARCHAR(45) NOT NULL,
  `linkWebProyecto` VARCHAR(45) NULL,
  `Persona_idPersona` INT NOT NULL,
  PRIMARY KEY (`idProyecto`, `Persona_idPersona`),
  INDEX `fk_Proyecto_Persona_idx` (`Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_Proyecto_Persona`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `bbdd_Portolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`FotosProyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`FotosProyecto` (
  `urlFoto` VARCHAR(100) NOT NULL,
  `Proyecto_idProyecto` INT NOT NULL,
  `Proyecto_Persona_idPersona` INT NOT NULL,
  PRIMARY KEY (`urlFoto`, `Proyecto_idProyecto`, `Proyecto_Persona_idPersona`),
  INDEX `fk_FotosProyecto_Proyecto1_idx` (`Proyecto_idProyecto` ASC, `Proyecto_Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_FotosProyecto_Proyecto1`
    FOREIGN KEY (`Proyecto_idProyecto` , `Proyecto_Persona_idPersona`)
    REFERENCES `bbdd_Portolio`.`Proyecto` (`idProyecto` , `Persona_idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`TipoEducacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`TipoEducacion` (
  `nombreTipoEducacion` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`nombreTipoEducacion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`Educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`Educacion` (
  `idEducacion` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `anioStart` VARCHAR(4) NOT NULL,
  `enioEnd` VARCHAR(4) NULL,
  `Persona_idPersona` INT NOT NULL,
  `TipoEducacion_nombreTipoEducacion` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idEducacion`, `Persona_idPersona`, `TipoEducacion_nombreTipoEducacion`),
  INDEX `fk_Educacion_Persona1_idx` (`Persona_idPersona` ASC) VISIBLE,
  INDEX `fk_Educacion_TipoEducacion1_idx` (`TipoEducacion_nombreTipoEducacion` ASC) VISIBLE,
  CONSTRAINT `fk_Educacion_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `bbdd_Portolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Educacion_TipoEducacion1`
    FOREIGN KEY (`TipoEducacion_nombreTipoEducacion`)
    REFERENCES `bbdd_Portolio`.`TipoEducacion` (`nombreTipoEducacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`HardSkill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`HardSkill` (
  `idHardSkill` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `porcentaje` INT(3) NOT NULL,
  `urlFoto` VARCHAR(100) NOT NULL,
  `Persona_idPersona` INT NOT NULL,
  PRIMARY KEY (`idHardSkill`, `Persona_idPersona`),
  INDEX `fk_HardSkill_Persona1_idx` (`Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_HardSkill_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `bbdd_Portolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`SoftSkill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`SoftSkill` (
  `idSoftSkill` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `porcentaje` INT(3) NOT NULL,
  `Persona_idPersona` INT NOT NULL,
  PRIMARY KEY (`idSoftSkill`, `Persona_idPersona`),
  INDEX `fk_SoftSkill_Persona1_idx` (`Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_SoftSkill_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `bbdd_Portolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`TipoExperiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`TipoExperiencia` (
  `nombreTipoExperiencia` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`nombreTipoExperiencia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`Experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`Experiencia` (
  `idExperiencia` INT NOT NULL,
  `titulo` VARCHAR(45) NULL,
  `anioStart` VARCHAR(4) NULL,
  `anioEnd` VARCHAR(4) NULL,
  `descripcion` VARCHAR(150) NULL,
  `TipoExperiencia_nombreTipoExperiencia` VARCHAR(20) NOT NULL,
  `Persona_idPersona` INT NOT NULL,
  PRIMARY KEY (`idExperiencia`, `TipoExperiencia_nombreTipoExperiencia`, `Persona_idPersona`),
  INDEX `fk_Experiencia_TipoExperiencia1_idx` (`TipoExperiencia_nombreTipoExperiencia` ASC) VISIBLE,
  INDEX `fk_Experiencia_Persona1_idx` (`Persona_idPersona` ASC) VISIBLE,
  CONSTRAINT `fk_Experiencia_TipoExperiencia1`
    FOREIGN KEY (`TipoExperiencia_nombreTipoExperiencia`)
    REFERENCES `bbdd_Portolio`.`TipoExperiencia` (`nombreTipoExperiencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Experiencia_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `bbdd_Portolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbdd_Portolio`.`TegnologiasUtilizadas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbdd_Portolio`.`TegnologiasUtilizadas` (
  `nombreTegnologia` VARCHAR(20) NOT NULL,
  `Experiencia_idExperiencia` INT NOT NULL,
  PRIMARY KEY (`nombreTegnologia`, `Experiencia_idExperiencia`),
  INDEX `fk_TegnologiasUtilizadas_Experiencia1_idx` (`Experiencia_idExperiencia` ASC) VISIBLE,
  CONSTRAINT `fk_TegnologiasUtilizadas_Experiencia1`
    FOREIGN KEY (`Experiencia_idExperiencia`)
    REFERENCES `bbdd_Portolio`.`Experiencia` (`idExperiencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
