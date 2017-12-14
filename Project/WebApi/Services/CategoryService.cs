using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Services
{
    public class CategoryService
    {
        private static CategoryService theInstance = null;

        private CategoryService() { }

        public static CategoryService Instance
        {
            get
            {
                if (theInstance == null)
                {
                    theInstance = new CategoryService();
                }
                return theInstance;
            }
        }

        public long GenerateId()
        {
            long id = DatabaseService.Instance.CurrentCategoryId;
            DatabaseService.Instance.CurrentCategoryId = DatabaseService.Instance.CurrentCategoryId + 1;
            return id;
        }

        // find the ctegory you are interest in 
        public Category FindCategoryByIsbn(Store str, string isbn)
        {
            Category foundCate = null;

            foreach (Category cate in str.Categories)
            {
                if (cate.Isbn == isbn)
                {
                    foundCate = cate;
                }
            }

            return foundCate;
        }
    }
}