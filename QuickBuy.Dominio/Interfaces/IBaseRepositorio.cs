using System;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Interfaces
{
    public interface IBaseRepositorio<TEntidade> : IDisposable where TEntidade : class
    {
        void Adicionar(TEntidade entidade);
        TEntidade ObterPorId(int id);
        IEnumerable<TEntidade> ObterTodos();
        void Atualizar(TEntidade entidade);
        void Excluir(TEntidade entidade);
    }
}
