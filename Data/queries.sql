-- Create a new database called 'ADONetDB'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'L3ActivityDb'
)
CREATE DATABASE L3ActivityDb
GO

USE L3ActivityDb

-- Tables.
CREATE TABLE SituacionActual
(
    Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Pais NVARCHAR(250),
    Confirmados INT NOT NULL,
    Fallecidos INT NOT NULL,
    Recuperados INT NOT NULL,
    Descartados INT NOT NULL
)
GO

CREATE TABLE DetalleCasos
(
    Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    Pais NVARCHAR(250),
    Usuario NVARCHAR(250) NOT NULL,
    Fecha DATETIME DEFAULT(GETDATE()) NOT NULL,
    NuevosConfirmados INT NOT NULL,
    NuevosFallecidos INT NOT NULL,
    NuevosRecuperados INT NOT NULL,
    NuevosDescartados INT NOT NULL
)
GO

-- Store Procedures.
CREATE PROCEDURE ActualizarSituacionActual
    @Pais NVARCHAR(250),
    @Confirmados INT,
    @Fallecidos INT,
    @Recuperados INT,
    @Descartados INT
AS 
    IF (NOT EXISTS(SELECT * FROM SituacionActual WHERE Pais = @Pais))
        INSERT INTO SituacionActual(Pais, Confirmados, Fallecidos, Recuperados, Descartados) 
            VALUES(@Pais, @Confirmados, @Fallecidos, @Recuperados, @Descartados); 
    ELSE
        UPDATE SituacionActual
            SET
                Confirmados = Confirmados + @Confirmados, 
                Fallecidos = Fallecidos + @Fallecidos, 
                Recuperados = Recuperados + @Recuperados, 
                Descartados = Descartados + @Descartados
            WHERE
                Pais = @Pais;
GO

CREATE PROCEDURE AgregarDetalleCasos
    @Pais NVARCHAR(250),
    @Usuario NVARCHAR(250),
    @NuevosConfirmados INT,
    @NuevosFallecidos INT,
    @NuevosRecuperados INT,
    @NuevosDescartados INT
AS
    INSERT INTO DetalleCasos(Pais, Usuario, NuevosConfirmados, NuevosFallecidos, NuevosRecuperados, NuevosDescartados)
        VALUES(@Pais, @Usuario, @NuevosConfirmados, @NuevosFallecidos, @NuevosRecuperados, @NuevosDescartados);
GO

CREATE PROCEDURE ObtenerDetallesCasosPorPais
    @Pais NVARCHAR(250)
AS 
    SELECT
        d.Pais,
        d.Usuario,
        d.Fecha,
        d.NuevosConfirmados,
        d.NuevosFallecidos,
        d.NuevosRecuperados,
        d.NuevosDescartados
    FROM DetalleCasos AS d 
        INNER JOIN SituacionActual AS s ON d.Pais = s.Pais
        WHERE d.Pais = @Pais;
GO

CREATE PROCEDURE ObtenerSituacionActual
    @Pais NVARCHAR(250)
AS
    SELECT * FROM SituacionActual WHERE Pais = Pais;
GO

-- Show all store procedures.
SELECT * 
  FROM L3ActivityDb.INFORMATION_SCHEMA.ROUTINES
 WHERE ROUTINE_TYPE = 'PROCEDURE'


-- Insert first register in SituacionActual
EXECUTE ActualizarSituacionActual 'República Dominicana', 0, 0, 0, 0
SELECT * FROM SituacionActual

-- Test second.
EXECUTE ObtenerDetallesCasosPorPais 'República Dominicana'

SELECT * FROM SituacionActual
SELECT * FROM DetalleCasos
