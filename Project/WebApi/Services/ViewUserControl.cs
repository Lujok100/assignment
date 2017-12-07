using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApi.Models;


namespace WebApi.Controllers
{
    public class ViewUserControl
    {
        private List<UserEntity> _user;
        

        public static implicit operator System.Web.Mvc.ViewUserControl(ViewUserControl v)
        {
            throw new NotImplementedException();

        }

        public ViewUserControl()
        {
            _user = (List<UserEntity>)HttpContext.Current.Application["UserEntity"];
        }


        public List<UserEntity> Get()
        {
            return _user;
        }


        public UserEntity Get(int id)
        {
            return _user.FirstOrDefault(u => u.Id == id);
        }


        public int Add(UserEntity user)
        {
            int id = _user.Max(u => u.Id);
            user.Id = id + 1;
            _user.Add(user);
            return id;
        }

        public UserEntity FindUserByUsername(UserEntity user)
        {
            return _user.Find(u => u.UserName == user.UserName);
        }

        public UserEntity FindUserByCredentials(UserEntity user)
        {
            return _user.Find(u => u.UserName == user.UserName && u.Password == user.Password);
        }

        public void update(UserEntity user)
        {
            var User = _user.FirstOrDefault(us => us.Id == user.Id);
            User = user;
        }


        public void Remove(int id)
        {
            var user = _user.FirstOrDefault(us => us.Id == id);
            if(user != null)
            {
                _user.Remove(user);
            }
        }
    }
}