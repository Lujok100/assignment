using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Member :IUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public Member(string userName, string password, string email, string firstName, string lastName) : base(userName, password, email)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }
    }
}