using Microsoft.EntityFrameworkCore;

namespace TryMvcReact
{
  public partial class TreatmentDbContext : DbContext
  {
    public virtual DbSet<Treatments> Treatments { get; set; }

    public TreatmentDbContext(DbContextOptions<TreatmentDbContext> options) : base(options)
    { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    { }
  }
}

