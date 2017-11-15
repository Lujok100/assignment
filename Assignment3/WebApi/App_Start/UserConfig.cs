using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.App_Start
{
    public class UserConfig
    {
        private List<UserEntity> userEntity = new List<UserEntity>();

        public UserConfig()
        {
            Add(new UserEntity { Id = 123, UserName = "alice", Password = "alice", FirstName = "Alice", LastName = "Wonder" });
            Add(new UserEntity { Id = 234, UserName = "bob", Password = "bob", FirstName = "Bob", LastName = "Marley" });
            Add(new UserEntity { Id = 345, UserName = "charly", Password = "charly", FirstName = "Charly", LastName = "Garcia" });
            Add(new UserEntity { Id = 456, UserName = "jannunzi", Password = "jannunzi", FirstName = "Jose", LastName = "Annunzi" });
        }

        public void Add(UserEntity userEntity)
        {
            throw new NotImplementedException();
        }
    }
}