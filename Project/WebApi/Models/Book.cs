using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    // The books that are diferent categories 
    public class Book
    {
        public long Id { get; set; }
        public string title { get; set; }
        public string author { get; set; }
        public string review { get; set; }
        public string isbn { get; set; }

        private List<Book> cateBooks = new List<Book>();

        public List<Book> GetCateBooks()
        {
            return cateBooks;
        }

        public Book GetCateBook(long id)
        {
            Book foundCateBook = null;

            foreach (Book cateBook in cateBooks)
            {
                if (cateBook.Id == id)
                {
                    foundCateBook = cateBook;
                    break;
                }
            }

            return foundCateBook;
        }

        public void AddCateBook(Book cateBook)
        {
            cateBooks.Add(cateBook);
        }

        public bool RemoveBook(long id)
        {
            Book cateBookToRemove = null;
            bool success = false;

            foreach (Book cateBook in cateBooks)
            {
                if (cateBook.Id == id)
                {
                    cateBookToRemove = cateBook;
                    break;
                }
            }
            if (cateBookToRemove != null)
            {
                cateBooks.Remove(cateBookToRemove);
                success = true;
            }

            return success;
        }
    }
}