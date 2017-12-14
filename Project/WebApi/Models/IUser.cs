using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Services;

namespace WebApi.Models
{
    
        // this  user can go through the site aand choose waht book their like 
        public abstract class IUser
        {
            public string UserName { get; set; }
            public string Password { get; set; }

            public string Email { get; set; }

            public long Id { get; set; }

            private List<Category> categories = new List<Category>();

            public IUser(string userName, string password, string email)
            {
                this.UserName = userName;
                this.Password = password;
                this.Email = email;
                this.Categories = new List<Category>();
                this.Id = UserService.Instance.GenerateId();
            }

            public List<Category> Categories
            {
                get
                {
                    return categories;
                }
                set
                {
                    categories = value;
                }
            }

            public Category FindCategory(long id)
            {
                Category foundCategory = null;

                foreach (Category category in categories)
                {
                    if (category.Id == id)
                    {
                        foundCategory = category;
                        break;
                    }
                }

                return foundCategory;
            }

            public void AddCategory(Category category)
            {
                if (!categories.Contains(category))
                {
                    categories.Add(category);
                }
            }

            public bool RemoveCategory(long id)
            {
                Category cateToRemove = FindCategory(id);
                bool success = false;

                if (cateToRemove != null)
                {
                    categories.Remove(cateToRemove);
                    success = true;
                }

                return success;
            }
        }
    }