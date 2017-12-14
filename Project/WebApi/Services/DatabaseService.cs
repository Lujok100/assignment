using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Services
{
    public class DatabaseService
    {
        private static DatabaseService theInstance = null;

        private static long currentUserId;

        private static long currentCategoryId;
        private static List<IUser> users = new List<IUser>();
        public List<Store> Stores = new List<Store>();

        private DatabaseService() { }

        public static DatabaseService Instance
        {
            get
            {
                if (theInstance == null)
                {
                    theInstance = new DatabaseService();
                }
                return theInstance;
            }
        }

        public long CurrentUserId
        {
            get
            {
                return currentUserId;
            }
            set
            {
                currentUserId = value;
            }
        }

        public long CurrentCategoryId
        {
            get
            {
                return currentCategoryId;
            }
            set
            {
                currentCategoryId = value;
            }
        }

        public List<IUser> Users
        {
            get
            {
                return users;
            }
            set
            {
                users = value;
            }
        }
    }
}