using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TryMvcReact.Controllers
{

  [ApiController]
  [Route("[controller]")]
  public class CovidController : ControllerBase
  {
    TreatmentDbContext _context;

    public CovidController(TreatmentDbContext context) => _context = context;

    [HttpGet("situacion-actual")]
    public IEnumerable<SituacionActual> Get()
    {
      string pais = "República Dominicana";
      List<SituacionActual> situacionActual = _context.SituacionActual
        .FromSqlInterpolated($"ObtenerSituacionActual {pais}")
        .ToListAsync()
        .Result;
        
      return situacionActual;
    }

    // [HttpPost]
    // public async Task<ActionResult<Treatments>> PostTreatment(Treatments treatment)
    // {a
    //   Console.WriteLine(treatment);
    //   treatment.RegistrationDate = DateTime.Now;
    //   _context.Treatments.Add(treatment);
    //   await _context.SaveChangesAsync();

    //   return CreatedAtRoute(nameof(Treatments), new { id = treatment.Id }, treatment);
    // }

  }
}

