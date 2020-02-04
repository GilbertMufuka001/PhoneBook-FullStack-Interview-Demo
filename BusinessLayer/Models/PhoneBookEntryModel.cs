using System;
using System.ComponentModel.DataAnnotations;

namespace PhoneApp.BusinessLayer.Models
{
    public class PhoneBookEntryModel : ModelBase
    {
        public PhoneBookEntryModel()
        { }

        public int? id { get; set; }
        public int? phoneBookId { get; set; }
        public string picUrl { get; set; }
        public string picFullUrl {get; set; }

        [Required(ErrorMessage = "PhoneBookEntry {0} is required")]
        public string name { get; set; }
        public string surname { get; set; }

        [Required(ErrorMessage = "PhoneBookEntry {0} is required")]
        public string phoneNumber { get; set; }

        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string emailAddress { get; set; }
    }
}
