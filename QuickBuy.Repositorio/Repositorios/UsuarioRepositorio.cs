using System.Linq;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.Interfaces;

namespace QuickBuy.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }

        public Usuario Obter(string email, string senha)
        {
            return QuickBuyContexto.Usuarios.FirstOrDefault(m=>m.Email.Equals(email) && m.Senha.Equals(senha));
        }

        public Usuario Obter(string email)
        {
            return QuickBuyContexto.Usuarios.FirstOrDefault(m => m.Email.Equals(email));
        }
    }
}
