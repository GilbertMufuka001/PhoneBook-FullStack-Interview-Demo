using System;
using System.Data.SQLite;

namespace PhoneApp.DataLayer.Containers
{

    /// <summary>
    /// My own implementation of SQL Lite Container
    /// </summary>
    public class SqlLiteContainer
    {
        public static string DbFile
        {
            get { return Environment.CurrentDirectory + "\\PhonebookDb.sqlite"; }
        }

        public static SQLiteConnection SQLiteDbConnection()
        {
            return new SQLiteConnection("Data Source=" + DbFile);
        }
    }
}
