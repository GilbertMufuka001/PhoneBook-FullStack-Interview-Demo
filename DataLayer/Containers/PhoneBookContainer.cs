using System;
using Dapper;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using PhoneApp.DataLayer.Entities;

namespace PhoneApp.DataLayer.Containers
{
    public class PhoneBookContainer : SqlLiteContainer
    {

        public PhoneBookContainer()
        {
            if (!File.Exists(DbFile))
            {
                CreateDatabase();
                SeedDatabase();
            }
        }


        #region Get Methods

        public List<PhoneBook> GetPhoneBooks()
        {
            if (!File.Exists(DbFile)) return new List<PhoneBook>();

            using (var cnn = SQLiteDbConnection())
            {
                cnn.Open();
                List<PhoneBook> result = cnn.Query<PhoneBook>(
                    @"SELECT * FROM PhoneBook
                    WHERE (IsDeleted=0)").ToList();
                return result;
            }
        }

        public PhoneBook GetPhoneBook(int id)
        {
            if (!File.Exists(DbFile)) return null;

            using (var cnn = SQLiteDbConnection())
            {
                cnn.Open();
                PhoneBook result = cnn.Query<PhoneBook>(
                    @"SELECT * FROM PhoneBook
                    WHERE (IsDeleted=0) AND (id=@id)", new { id }).FirstOrDefault();
                return result;
            }
        }

        public PhoneBook GetPhoneBook(string name)
        {
            if (!File.Exists(DbFile)) return null;

            using (var cnn = SQLiteDbConnection())
            {
                cnn.Open();
                PhoneBook result = cnn.Query<PhoneBook>(
                    @"SELECT * FROM PhoneBook
                    WHERE (isDeleted=0) AND (name=@name)", new { name }).FirstOrDefault();
                return result;
            }
        }

        public PhoneBookEntry GetPhoneBookEntry(int id)
        {
            if (!File.Exists(DbFile)) return null;

            using (var cnn = SQLiteDbConnection())
            {
                cnn.Open();
                PhoneBookEntry result = cnn.Query<PhoneBookEntry>(
                    @"SELECT * FROM PhoneBookEntry
                    WHERE (IsDeleted=0) And (Id=@Id)", new { id }).FirstOrDefault();
                return result;
            }
        }

        public List<PhoneBookEntry> GetPhoneBookEntries(int phoneBookId)
        {
            if (!File.Exists(DbFile)) return null;

            using (var cnn = SQLiteDbConnection())
            {
                cnn.Open();
                List<PhoneBookEntry> result = cnn.Query<PhoneBookEntry>(
                    @"SELECT * FROM PhoneBookEntry
                    WHERE (isDeleted=0) And (phoneBookId=@phoneBookId)", new { phoneBookId }).ToList();
                return result;
            }
        }
        #endregion


        #region Delete Methods

        public int DeletePhoneBook(int entityId)
        {
            using (var cnn = SQLiteDbConnection())
            {
                cnn.Open();
                var sql = $@"UPDATE PhoneBook SET isDeleted=1, WHERE (id={entityId})";
                return cnn.Execute(sql);
            }
        }

        public int DeletePhoneBookEntry(int entityId)
        {
            using (var cnn = SQLiteDbConnection())
            {
                cnn.Open();
                var sql = $@"UPDATE PhoneBookEntry SET isDeleted=1 WHERE (id={entityId})";
                return cnn.Execute(sql);
            }
        } 

        #endregion


        #region Save Methods

        public PhoneBook SavePhoneBook(PhoneBook entity)
        {
            if (!File.Exists(DbFile))
            {
                CreateDatabase();
            }

            var isNew = false;
            if (entity == null) return null;
            if ((entity.id ?? 0) == 0) isNew = true;

            if (isNew)
            {
                using (var cnn = SQLiteDbConnection())
                {
                    cnn.Open();
                    entity.id = cnn.Query<int>(
                        @"INSERT INTO PhoneBook (name, picUrl, isDeleted) VALUES ( @name, @picUrl, 0); 
                    SELECT last_insert_rowid()", entity).First();
                }
            }
            else
            {
                using (var cnn = SQLiteDbConnection())
                {
                    cnn.Open();
                    var id = cnn.Query<int>(
                        @"UPDATE PhoneBook SET name=@name, picUrl=@picUrl, isDeleted=@isDeleted WHERE (id=@id); 
                    Select last_insert_rowid()", entity).First();
                }
            }
            return entity;
        }

        public PhoneBookEntry SavePhoneBookEntry(PhoneBookEntry entity)
        {
            if (!File.Exists(DbFile))
            {
                CreateDatabase();
            }

            var isNew = false;
            if (entity == null) return null;
            if ((entity.id ?? 0) == 0) isNew = true;

            if (isNew)
            {
                using (var cnn = SQLiteDbConnection())
                {
                    cnn.Open();
                    entity.id = cnn.Query<int>(@"INSERT INTO PhoneBookEntry(name,surname,phoneBookId,phoneNumber,emailAddress,picUrl,isDeleted) VALUES ( @name,@surname,@phoneBookId,@phoneNumber,@emailAddress,@picUrl,0); 
                    SELECT last_insert_rowid()", entity).First();
                }
            }
            else
            {
                using (var cnn = SQLiteDbConnection())
                {
                    cnn.Open();
                    var id = cnn.Query<int>(
                        @"UPDATE PhoneBookEntry SET name=@name,surname=@surname,phoneNumber=@phoneNumber,emailAddress=@emailAddress,picUrl=@picUrl,isDeleted=@isDeleted WHERE (id=@id); 
                    SELECT last_insert_rowid()", entity).First();
                }
            }

            return entity;
        }

        #endregion


        #region Helper Methods
        private static void CreateDatabase()
        {
            using (var cnn = SQLiteDbConnection())
            {
                cnn.Open();
                cnn.Execute(
                    @"create table PhoneBook
                      (
                         id             integer primary key AUTOINCREMENT,
                         name           varchar(100) null,
                         picUrl         varchar(200) null,
                         isDeleted      bit not null default (0)
                      )");

                cnn.Execute(
                      @"create table PhoneBookEntry
                      (
                         id             integer primary key AUTOINCREMENT,
                         phoneBookId    integer null REFERENCES PhoneBook(id),
                         picUrl         varchar(200) null,
                         name           varchar(100) null,                         
                         surname        varchar(100) null,
                         phoneNumber    varchar(20) null,                         
                         emailAddress   varchar(80) null,                         
                         isDeleted      bit not null default (0)
                      )");
            }
        }

        private static void SeedDatabase()
        {
            using (var cnn = SQLiteDbConnection())
            {
                int entityId = 0;
                cnn.Open();

                //=====================================================Phone list 1
                var entryInsertSql = @"INSERT INTO PhoneBookEntry  (name,surname,phoneBookId,phoneNumber,emailAddress,picUrl) VALUES ( @name,@surname,@phoneBookId,@phoneNumber,@emailAddress, @picUrl); SELECT last_insert_rowid()";
                var pbEntity0 = new PhoneBook() { name = "My Family Contacts", picUrl = "boks.png" };
                var pbId = cnn.Query<int>(@"INSERT INTO PhoneBook (name, picUrl) VALUES ( @name, @picUrl); Select last_insert_rowid()", pbEntity0).First();
                var pbEntEntity1 = new PhoneBookEntry() { name = "Nyasha", surname = "Mufuka", phoneBookId = pbId, phoneNumber = "082 233 6333", emailAddress = "nnyash453@yahoo.com", picUrl = "pic7.png" };
                var pbEntEntity2 = new PhoneBookEntry() { name = "Kudzai", surname = "Mufuka", phoneBookId = pbId, phoneNumber = "061 111 2222", emailAddress = "kudza001@gmail.com", picUrl = "pic8.png" };
                var pbEntEntity3 = new PhoneBookEntry() { name = "Joseph", surname = "Mumbire", phoneBookId = pbId, phoneNumber = "062 323 2333", emailAddress = "joseSpecial@gmail.com", picUrl = "pic10.png" };
                var pbEntEntity4 = new PhoneBookEntry() { name = "Anna", surname = "Mhere", phoneBookId = pbId, phoneNumber = "071 089 6323", emailAddress = "mapanga2@yahoo.com", picUrl = "pic9.png" };
                var pbEntEntity5 = new PhoneBookEntry() { name = "Ceasar", surname = "Mavhondo", phoneBookId = pbId, phoneNumber = "011 236 5656", emailAddress = "ceasar22@gmail.com", picUrl = "pic11.png" };
                var pbEntEntity6 = new PhoneBookEntry() { name = "Aggripa", surname = "Magwaza", phoneBookId = pbId, phoneNumber = "079 636 2365", emailAddress = "nkomoAgrippa@gmail.com", picUrl = "pic12.png" };
                var pbEntEntity7 = new PhoneBookEntry() { name = "My", surname = "Mtn Number", phoneBookId = pbId, phoneNumber = "064 067 3166", emailAddress = "gilbert.s.mufuka@gmail.com", picUrl = "gilbert.png" };
                entityId = cnn.Query<int>(entryInsertSql, pbEntEntity1).First();
                entityId = cnn.Query<int>(entryInsertSql, pbEntEntity2).First();
                entityId = cnn.Query<int>(entryInsertSql, pbEntEntity3).First();
                entityId = cnn.Query<int>(entryInsertSql, pbEntEntity4).First();
                entityId = cnn.Query<int>(entryInsertSql, pbEntEntity5).First();
                entityId = cnn.Query<int>(entryInsertSql, pbEntEntity6).First();
                entityId = cnn.Query<int>(entryInsertSql, pbEntEntity7).First();

                //=====================================================Phone list 2
                var pbEntity1 = new PhoneBook() { name = "My Springbok Contacts", picUrl = "boks.png" };
                var pbId1 = cnn.Query<int>(@"INSERT INTO PhoneBook (name, picUrl) VALUES ( @name, @picUrl); Select last_insert_rowid()", pbEntity1).First();
                var pbEntryEntity1 = new PhoneBookEntry() { name = "Siya", surname = "Kolisi", phoneBookId = pbId1, phoneNumber = "0710235665", emailAddress = "siya123@yahoo.com", picUrl = "pic4.png" };
                var pbEntryEntity2 = new PhoneBookEntry() { name = "Faf", surname = "deKlerk", phoneBookId = pbId1, phoneNumber = "0830445666", emailAddress = "faf123@gmail.com", picUrl = "pic5.png" };
                var pbEntryEntity3 = new PhoneBookEntry() { name = "Tendayi", surname = "Mtawarira", phoneBookId = pbId1, phoneNumber = "0617771234", emailAddress = "beast001@gmail.com", picUrl = "pic1.png" };
                entityId = cnn.Query<int>(entryInsertSql, pbEntryEntity1).First();
                entityId = cnn.Query<int>(entryInsertSql, pbEntryEntity2).First();
                entityId = cnn.Query<int>(entryInsertSql, pbEntryEntity3).First();
            }
        }

        #endregion

    }
}
