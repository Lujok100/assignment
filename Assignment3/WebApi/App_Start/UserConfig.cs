using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.App_Start
{
    public class UserConfig
    {
        public static List<UserEntity> BuildUserEntity()
        {
          List<UserEntity> userEntities = new List<UserEntity>();

            userEntities.Add(new UserEntity { Id = 123, UserName = "alice", Password = "alice", FirstName = "Alice", LastName = "Wonder" });
            userEntities.Add(new UserEntity { Id = 234, UserName = "bob", Password = "bob", FirstName = "Bob", LastName = "Marley" });
            userEntities.Add(new UserEntity { Id = 345, UserName = "charly", Password = "charly", FirstName = "Charly", LastName = "Garcia" });
            userEntities.Add(new UserEntity { Id = 456, UserName = "jannunzi", Password = "jannunzi", FirstName = "Jose", LastName = "Annunzi" });
            return userEntities;
        }
    }
}