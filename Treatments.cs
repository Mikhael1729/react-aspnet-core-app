using System;

namespace TryMvcReact
{
  public class Treatments
  {
    public int Id { get; set; }
    public string IdCard { get; set; }
    public string Medicine { get; set; }
    public int Quantity { get; set; }
    public string Nurse { get; set; }
    public string Doctor { get; set; }
    public DateTime RegistrationDate { get; set; }

    public override string ToString() =>
      $"{Id}\t{IdCard}\tMedicine\t{Quantity}\t{Nurse}\t{Doctor}\t{RegistrationDate.ToString()}";
  }
}

