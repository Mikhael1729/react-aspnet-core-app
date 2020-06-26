namespace CovidReport.Models
{
  public class SituacionActual
  {
    public int Id { get; set; }
    public string Pais { get; set; }
    public int Confirmados { get; set; }
    public int Fallecidos { get; set; }
    public int Recuperados { get; set; }
    public int Descartados { get; set; }

    public SituacionActual(
      string pais = "",
      int confirmados = 0,
      int fallecidos = 0,
      int recuperados = 0,
      int descartados = 0
    )
    {
      Pais = pais;
      Confirmados = confirmados;
      Fallecidos = fallecidos;
      Recuperados = recuperados;
      Descartados = descartados;
    }

    public override string ToString() =>
      $"Pais: {Pais}\t" +
      $" Confirmados: {Confirmados}\t" +
      $" Fallecidos: {Fallecidos}\t" +
      $" Recuperados: {Recuperados}\t" +
      $" Descartados: {Descartados}\t";


    // public static SituacionActual FromSqlDataReader(SqlDataReader reader)
		// {
		// 	try
		// 	{
		// 		var newSituacionActual = new SituacionActual( 
    //       pais: (string) reader["Pais"],
    //       confirmados: (int) reader["Confirmados"],
    //       fallecidos: (int) reader["Fallecidos"],
    //       recuperados: (int) reader["Recuperados"],
    //       descartados: (int) reader["Descartados"]
		// 		);

		// 		return newSituacionActual;
		// 	}
		// 	catch(Exception e)
		// 	{
    //     Console.WriteLine(e);
		// 		return new SituacionActual();
		// 	}
		// }
  }
}
