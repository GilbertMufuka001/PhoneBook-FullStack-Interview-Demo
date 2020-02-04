using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PhoneApp.BusinessLayer.Models
{
    public class PhoneBookModel : ModelBase
    {
        public PhoneBookModel()
        {
            entries = new List<PhoneBookEntryModel>();
        }

        public int? id { get; set; }
        public string picUrl { get; set; }

        [Required (ErrorMessage = "PhoneBook {0} is required")]
        public string name { get; set; }

        public List<PhoneBookEntryModel> entries { get; set; }
    }
}
