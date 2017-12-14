using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Customer : Member
    {
        public Customer(string userName, string password, string email, string firstName, string lastName) : base(userName, password, email, firstName, lastName) { }
    }
}