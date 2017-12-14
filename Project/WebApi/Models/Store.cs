using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace WebApi.Models
{
    //store user 
    public class Store 
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public List<Category>  Categories { get; set; }
        public List<Book> Books { get; set; }



    }
}