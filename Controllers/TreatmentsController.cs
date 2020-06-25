using System.Collections.Generic;
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
  }
}

