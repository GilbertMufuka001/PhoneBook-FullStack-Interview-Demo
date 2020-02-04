using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhoneApp.BusinessLayer.Models;
using PhoneApp.BusinessLayer.Repositories;

namespace ServiceLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhonebookController : ControllerBase
    {
        private PhoneBookRepository _repo;

        public PhonebookController()
        {
            _repo = new PhoneBookRepository();
        }

        //===================================== GET ACTIONS  ==========================================//
        // GET: api/Phonebook
        [EnableCors]
        [HttpGet]
        public IEnumerable<PhoneBookModel> Get()
        {
            var result =  _repo.GetPhoneBooks();
            return result;
        }


        // GET: api/Phonebook/id/5
        [HttpGet("id/{id}", Name = "GetById")]
        public PhoneBookModel GetById(int id)
        {
            return _repo.GetPhoneBook(id);
        }


        // GET: api/Phonebook/listname/myFriends
        [HttpGet("listname/{name}", Name = "GetByName")]
        public PhoneBookModel GetByName(string name)
        {
            return _repo.GetPhoneBookByName(name);
        }


        //===================================== POST ACTIONS  ==========================================//
        // POST: api/Phonebook
        [EnableCors]
        [HttpPost]
        public PhoneBookModel Save([FromBody] PhoneBookModel model)
        {
            return _repo.SavePhoneBook(model);
        }


        // POST: api/Phonebook/entry
        [EnableCors]
        [HttpPost("entry", Name = "SaveEntry")]
        public PhoneBookEntryModel SaveEntry([FromBody] PhoneBookEntryModel model)
        {
            return _repo.SavePhoneBookEntry(model);
        }


        //==================================== DELETE ACTIONS  =========================================//
        //DELETE: api/Phonebook/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return _repo.DeletePhoneBook(id);
        }


        //DELETE: api/Phonebook/entry/5
        [EnableCors]
        [HttpDelete("remove/{id}", Name = "DeleteEntry")]
        public int DeleteEntry(int id)
        {
            return _repo.DeletePhoneBookEntry(id);
        }


    }
}
