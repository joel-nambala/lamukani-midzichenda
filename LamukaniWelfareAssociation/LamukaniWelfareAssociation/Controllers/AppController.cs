using Microsoft.AspNetCore.Mvc;

namespace LamukaniWelfareAssociation.Controllers
{
  public class AppController : Controller
  {

    public IActionResult Features()
    {
      return View();
    }
    public IActionResult Campaign()
    {
      return View();
    }
    public IActionResult News()
    {
      return View();
    }
    public IActionResult Contact()
    {
      return View();
    }

    public IActionResult Donate()
    {
      return View();
    }
  }
}
