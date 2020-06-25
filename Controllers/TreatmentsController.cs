using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TryMvcReact.Controllers
{

  [ApiController]
  [Route("[controller]")]
  public class TreatmentsController : ControllerBase
  {
    TreatmentDbContext _context;

    public TreatmentsController(TreatmentDbContext context) => _context = context;

    [HttpGet]
    public IEnumerable<Treatments> Get()
    {
      var treatmentList = _context.Treatments.ToListAsync().Result;
      return treatmentList;
    }

    [HttpPost]
    public async Task<ActionResult<Treatments>> PostTreatment(Treatments treatment)
    {
      Console.WriteLine(treatment);
      treatment.RegistrationDate = DateTime.Now;
      _context.Treatments.Add(treatment);
      await _context.SaveChangesAsync();

      return CreatedAtRoute(nameof(Treatments), new { id = treatment.Id }, treatment);
    }

  }
}

