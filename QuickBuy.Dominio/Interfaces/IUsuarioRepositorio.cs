using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Dominio.Interfaces
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario>
    {
        Usuario Obter(string email, string senha);
        Usuario Obter(string email);
    }
}
