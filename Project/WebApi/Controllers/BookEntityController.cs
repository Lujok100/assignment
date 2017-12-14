using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class BookEntityController : ApiController
    {
        //api/user?username=username Find by UserName

      public string Get()
        {
            return "test";
        }
        public string GetSummaryByIsbn( string Isbn)
        {
            
             //create api url using isbn string 
            string apiUrl = "http://api.nytimes.com/svc/books/v3/reviews.json?isbn=" + Isbn + "&api-key=cf100e2018394ea68e9d91f1b40cf94f";
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(apiUrl);

            request.Method = "Get";
            request.KeepAlive = true;
            request.ContentType = "application/json";
            request.Accept = "application/json";
            // request.Headers.Add("Content-Type", "application/json");
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            string myResponse = "";
            using (System.IO.StreamReader sr = new System.IO.StreamReader(response.GetResponseStream()))
            {
                myResponse = sr.ReadToEnd();
            }
            return myResponse;
        }

    }

    

   
}
