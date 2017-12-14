using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Services;

namespace WebApi.Models
{
    
        // The category for the library
        public class Category
        {
           public string Isbn { get; set; }

           public Store Store { get; set; }
        
           public long Id { get; set; }

        //books in categories 
        private List<Book> books = new List<Book>();

            public Category(string Isbn, Store store)
            {
                this.Isbn = Isbn;
               
                this.Store = store;
             
                this.Id = CategoryService.Instance.GenerateId();
        }

            public List<Book> Book
            {
                get
                {
                    return books;
                }
            }

            public Book FindBook(long id)
            {
                Book foundBook = null;

                foreach (Book book in books)
                {
                    if (book.Id == id)
                    {
                        foundBook = book;
                        break;
                    }
                }

                return foundBook;
            }

            public void AddBook(Book book)
            {
                books.Add(book);
            }

            public bool RemoveBook(long id)
            {
                Book bookToRemove = FindBook(id);
                bool success = false;

                if (bookToRemove != null)
                {
                    books.Remove(bookToRemove);
                    success = true;
                }

                return success;
            }
        }
    }