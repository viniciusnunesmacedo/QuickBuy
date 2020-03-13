using QuickBuy.Dominio.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntidade> : IBaseRepositorio<TEntidade> where TEntidade : class
    {

        protected readonly QuickBuyContexto QuickBuyContexto;

        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            QuickBuyContexto = quickBuyContexto;
        }

        public void Adicionar(TEntidade entidade)
        {
            QuickBuyContexto.Set<TEntidade>().Add(entidade);
            QuickBuyContexto.SaveChanges();
        }

        public void Atualizar(TEntidade entidade)
        {
            QuickBuyContexto.Set<TEntidade>().Update(entidade);
            QuickBuyContexto.SaveChanges();
        }

        public TEntidade ObterPorId(int id)
        {
            return QuickBuyContexto.Set<TEntidade>().Find(id);
        }

        public IEnumerable<TEntidade> ObterTodos()
        {
            return QuickBuyContexto.Set<TEntidade>().ToList();
        }

        public void Remover(TEntidade entidade)
        {
            QuickBuyContexto.Set<TEntidade>().Remove(entidade);
            QuickBuyContexto.SaveChanges();
        }

        public void Dispose()
        {
            QuickBuyContexto.Dispose();
        }
    }
}
