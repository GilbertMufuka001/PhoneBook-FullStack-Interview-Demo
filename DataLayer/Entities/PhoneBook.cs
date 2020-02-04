using System;
using System.ComponentModel.DataAnnotations;


namespace PhoneApp.DataLayer.Entities
{
    public class PhoneBook
    {

        public PhoneBook()
        {}

        [Key]
        public int? id { get; set; }

        public string name { get; set; }

        public string picUrl { get; set; }

        public bool isDeleted { get; set; }

    }
}
