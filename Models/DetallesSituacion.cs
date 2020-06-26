using System;
using System.ComponentModel.DataAnnotations;

namespace CovidReport.Models
{
  public class DetalleSituacion
  {
    [Key]
    public string Usuario { get; set; }
    public string Pais { get; set; }
    public DateTime Fecha { get; set; }
    public int NuevosConfirmados { get; set; }
    public int NuevosFallecidos { get; set; }
    public int NuevosRecuperados { get; set; }
    public int NuevosDescartados { get; set; }

    public DetalleSituacion(
      string pais = "",
      string usuario = "",
      DateTime fecha = new DateTime(),
      int nuevosConfirmados = 0,
      int nuevosFallecidos = 0,
      int nuevosRecuperados = 0,
      int nuevosDescartados = 0
    )
    {
      Pais = pais;
      Usuario = usuario;
      Fecha = fecha;
      NuevosConfirmados = nuevosConfirmados;
      NuevosFallecidos = nuevosFallecidos;
      NuevosRecuperados = nuevosRecuperados;
      NuevosDescartados = nuevosDescartados;
    }

    public override string ToString() =>
      $"Pais: {Pais}\t" +
      $"Usuario: {Usuario}" +
      $"Fecha: {Fecha}" +
      $"Nuevos Confirmados: {NuevosConfirmados}\t" +
      $"Nuevos Fallecidos: {NuevosFallecidos}\t" +
      $"Nuevos Recuperados: {NuevosRecuperados}\t" +
      $"Nuevos Descartados: {NuevosDescartados}\t";


    // public static DetalleSituacion FromSqlDataReader(SqlDataReader reader)
		// {
		// 	try
		// 	{
		// 		var newDetalleSituacion = new DetalleSituacion( 
    //       pais: (string) reader["Pais"],
    //       usuario: (string) reader["Usuario"],
    //       fecha: (DateTime) Convert.ToDateTime(reader["Fecha"]),
    //       nuevosConfirmados: (int) reader["NuevosConfirmados"],
    //       nuevosFallecidos: (int) reader["NuevosFallecidos"],
    //       nuevosRecuperados: (int) reader["NuevosRecuperados"],
    //       nuevosDescartados: (int) reader["NuevosDescartados"]
		// 		);

		// 		return newDetalleSituacion;
		// 	}
		// 	catch(Exception e)
		// 	{
    //     Console.WriteLine(e);
		// 		return new DetalleSituacion();
		// 	}
		// }
  }
}
