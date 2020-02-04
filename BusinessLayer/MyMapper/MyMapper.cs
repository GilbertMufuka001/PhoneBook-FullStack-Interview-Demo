using System;
using PhoneApp.BusinessLayer.Models;
using System.Reflection;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PhoneApp.BusinessLayer.Mapper
{
    /// <summary>
    /// My own implementation of a fast mapper - G.S.Mufuka.
    /// </summary>
    public static class MyMapper
    {
        private static bool CopyValues(object source, object dest)
        {
            if ((source == null) || (dest == null)) return false;
            PropertyInfo[] sourceProperties = source.GetType().GetProperties();
            PropertyInfo[] destProperties = dest.GetType().GetProperties();
            Parallel.ForEach(sourceProperties, sProp =>
            {
                var destProp = (PropertyInfo)destProperties.FirstOrDefault(prop => prop.Name == sProp.Name);
                if (destProp != null)
                {
                    destProp.SetValue(dest, sProp.GetValue(source, null));
                }
            });
            return true;
        } 

        public static T ToEntity<T>(this object model) where T : new()
        {
            var newEntity = new T();
            if (model != null) CopyValues(model, newEntity);
            return newEntity;
        }

        public static T ToModel<T>(this object entity) where T : ModelBase, new()
        {
            var newModel = new T();
            if (entity != null) CopyValues(entity, newModel);
            return newModel;
        }

        public static List<T> ToModelList<T>(this IEnumerable<dynamic> entityList) where T : ModelBase, new()
        {
            var modelList = new List<T>();
            if (entityList == null) return modelList;
            foreach(object entity in entityList)
            {
                var newModel = entity.ToModel<T>();
                modelList.Add((T)newModel);
            }
            return modelList;
        }

    }
}
