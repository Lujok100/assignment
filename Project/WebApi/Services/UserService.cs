using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Services
{
    public class UserService
    {
        private static UserService theInstance = null;

        private UserService() { }

        public static UserService Instance
        {
            get
            {
                if (theInstance == null)
                {
                    theInstance = new UserService();
                }
                return theInstance;
            }
        }

        // Gets the current user id from the Database and indexes it by 1
        public long GenerateId()
        {
            long id = DatabaseService.Instance.CurrentUserId;
            DatabaseService.Instance.CurrentUserId = DatabaseService.Instance.CurrentUserId + 1;
            return id;
        }

        public void AddIUser(IUser user)
        {
            DatabaseService.Instance.Users.Add(user);
        }

        public bool RemoveUser(long id)
        {
            IUser userToRemove = FindIUserById(id);
            bool success = false;

            if (userToRemove != null)
            {
                DatabaseService.Instance.Users.Remove(userToRemove);
                success = true;
            }

            return success;
        }

        public IUser FindIUserById(long id)
        {
            IUser foundIUser = null;

            foreach (IUser user in DatabaseService.Instance.Users)
            {
                if (user.Id == id)
                {
                    foundIUser = user;
                }
            }

            return foundIUser;
        }

        public IUser FindUserByIUserName(string userName)
        {
            IUser foundIUser = null;

            foreach (IUser user in DatabaseService.Instance.Users)
            {
                if (user.UserName == userName)
                {
                    foundIUser = user;
                }
            }

            return foundIUser;
        }

      
        public Store FindStoreByIsbn(string isbn)
        {
            Store foundStr = null;

            foreach (Store Liststore in  DatabaseService.Instance.Stores)
            {
               foreach(Book Typebook in Liststore.Books)
                {
                   
                    if (Typebook.isbn == isbn)
                    {
                        foundStr = Liststore;
                    }
                }
            }

            return foundStr;
        }
    }
}