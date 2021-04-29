﻿using HajosTeszt.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {
        HajostesztContext context = new HajostesztContext();
        [HttpGet]
        [Route("questions/all")]
        public ActionResult M1()
        {
            
            var kérdések = from x in context.Questions select x.QuestionText;

            return new JsonResult(kérdések);
        }

        [HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M1(int sorszám)
        {
            
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();
            if (kérdés == null)
            {
                return BadRequest("Nincs ilyen számú kérdés");
            }

            return new JsonResult(kérdés);
        }
        [HttpGet]
        [Route("questions/count")]
        public int M4() //Tetszőleges metódusnév
        {
            HajostesztContext context = new HajostesztContext();
            int kérdésekSzáma = context.Questions.Count();

            return kérdésekSzáma;
        }

    }
}
