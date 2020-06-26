using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CovidReport.Models;

namespace CovidReport.Controllers
{

  [ApiController]
  [Route("[controller]")]
  public class CovidController : ControllerBase
  {
    CovidDbContext _context;

    public CovidController(CovidDbContext context) => _context = context;

    [HttpGet("situacion-actual")]
    public IEnumerable<SituacionActual> GetSituacionActual()
    {
      string pais = "República Dominicana";
      List<SituacionActual> situacionActual = _context.SituacionActual
        .FromSqlInterpolated($"ObtenerSituacionActual {pais}")
        .ToListAsync()
        .Result;
        
      return situacionActual;
    }


    [HttpGet("detalles-situacion")]
    public IEnumerable<DetalleSituacion> GetDetalleSituacion()
    {
      string pais = "República Dominicana";
      List<DetalleSituacion> situacionActual = _context.DetallesSituacion
        .FromSqlInterpolated($"ObtenerDetallesCasosPorPais {pais}")
        .ToListAsync()
        .Result;
        
      return situacionActual;
    }
  }
}

