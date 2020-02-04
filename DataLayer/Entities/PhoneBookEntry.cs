using System;
using System.ComponentModel.DataAnnotations;

namespace PhoneApp.DataLayer.Entities
{
    public class PhoneBookEntry
    {
        public PhoneBookEntry()
        { }

        [Key]
        public int? id { get; set; }
        public int? phoneBookId { get; set; }
        public string picUrl { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string phoneNumber { get; set; }
        public string emailAddress { get; set; }
        public bool isDeleted { get; set; }
    }
}
