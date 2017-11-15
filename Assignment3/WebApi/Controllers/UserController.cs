﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebApi.Models;


namespace WebApi.Controllers
{

    public class UserController : ApiController
    {

        private ViewUserControl _user;

        public UserController()
        {
            _user = new ViewUserControl();
        }


        //Creat usrer
        public void Post([FromBody]UserEntity user)
        {
            _user.Add(user);
        }

        //Get all users
        public IEnumerable<UserEntity> Get()
        {
            return _user.Get();
        }

        //api/user?username=username Find by UserName

        public UserEntity Get(string userName)
        {
            UserEntity user = new UserEntity();
            user.UserName = userName;
            return _user.FindUserByUsername(user);
        }



        //api/user?username=username&password=password
        public UserEntity Get(string userName, string password)
        {
            UserEntity user = new UserEntity();
            user.UserName = userName;
            user.Password = password;
            return _user.FindUserByCredentials(user);
        }

        //api/user/:userId by Id
        public UserEntity Get(int id)
        {
            var user = this._user.Get(id);
            if (user != null)
            {
                return user;
            }
            return null;

        }
        //api/user/:userId
        public void Put(int id, [FromBody]UserEntity user)
        {
            _user.update(user);
        }

        //Delete user
        public void Delete(int id)
        {
            _user.Remove(id);
        }

    }  
}

