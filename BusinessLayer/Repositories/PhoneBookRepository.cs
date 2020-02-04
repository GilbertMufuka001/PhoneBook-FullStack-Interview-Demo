using System;
using System.Linq;
using System.Collections.Generic;
using PhoneApp.DataLayer.Entities;
using PhoneApp.BusinessLayer.Mapper;
using PhoneApp.DataLayer.Containers;
using PhoneApp.BusinessLayer.Models;


namespace PhoneApp.BusinessLayer.Repositories
{
    public class PhoneBookRepository
    {
        PhoneBookContainer _container;

        public PhoneBookRepository()
        {
            _container = new PhoneBookContainer();
        }


        #region Get Methods

        public List<PhoneBookModel> GetPhoneBooks()
        {
            var entityList = _container.GetPhoneBooks();
            var modelList = entityList.ToModelList<PhoneBookModel>();
            if (modelList != null)
            {
                modelList.ForEach(x =>
                {
                    x.entries = GetPhoneBookEntries(x.id ?? 0);
                });

            }
            return modelList;
        }

        public PhoneBookModel GetPhoneBook(int id)
        {
            var entity = _container.GetPhoneBook(id);
            var model = entity.ToModel<PhoneBookModel>();
            if (model != null) model.entries = GetPhoneBookEntries(model.id ?? 0);
            return model;
        }

        public PhoneBookModel GetPhoneBookByName(string name)
        {
            var entity = _container.GetPhoneBook(name);
            var model = entity.ToModel<PhoneBookModel>();
            if (model != null) model.entries = GetPhoneBookEntries(model.id ?? 0);
            return model;
        }

        private List<PhoneBookEntryModel> GetPhoneBookEntries(int phoneBookId)
        {
            var entityList = _container.GetPhoneBookEntries(phoneBookId);
            return entityList.ToModelList<PhoneBookEntryModel>();
        }

        #endregion


        #region Delete Methods
        public int DeletePhoneBook(int phoneBookId)
        {
            return _container.DeletePhoneBook(phoneBookId);
        }

        public int DeletePhoneBookEntry(int phoneBookEntryId)
        {
            return _container.DeletePhoneBookEntry(phoneBookEntryId);
        }

        #endregion


        #region Post Methods
        public PhoneBookEntryModel SavePhoneBookEntry(PhoneBookEntryModel model)
        {
            var entity = _container.SavePhoneBookEntry(model.ToEntity<PhoneBookEntry>());
            return entity.ToModel<PhoneBookEntryModel>();
        }

        public PhoneBookModel SavePhoneBook(PhoneBookModel model)
        {

            if (model == null) return null;

            var entity = model.ToEntity<PhoneBook>();
            entity = _container.SavePhoneBook(entity);
            var newModel = entity.ToModel<PhoneBookModel>();
            newModel.entries = new List<PhoneBookEntryModel>();

            if (model.entries == null) model.entries = new List<PhoneBookEntryModel>();
            model.entries.ForEach(x =>
            {
                x.phoneBookId = newModel.id;
                newModel.entries.Add(SavePhoneBookEntry(x));
            });

            return newModel;
        }
        #endregion

    }
}
