using Microsoft.EntityFrameworkCore;
using CovidReport.Models;

namespace CovidReport
{
  public partial class CovidDbContext : DbContext
  {
    public virtual DbSet<DetalleSituacion> DetallesSituacion { get; set; }
    public virtual DbSet<SituacionActual> SituacionActual { get; set; }

    public CovidDbContext(DbContextOptions<CovidDbContext> options) : base(options)
    { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    { }
  }
}

