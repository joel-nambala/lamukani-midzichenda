using Microsoft.AspNetCore.Mvc;

namespace LamukaniWelfareAssociation.Controllers
{
    public class InformationController : Controller
    {
        public IActionResult SupportMilitary()
        {
            return View();
        }
        public IActionResult FamilySupport()
        {
            return View();
        }
        public IActionResult SponsorOrphanChild()
        {
            return View();
        }
        public IActionResult ChildProtection()
        {
            return View();
        }
    }
}
