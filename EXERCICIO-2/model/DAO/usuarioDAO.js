//onde a classe fara tudo
//m de model
const mUsuario = require('../usuario')

module.exports = class UsuarioDao {
    constructor() {

    }

    listarTodos() {
        try {
            //o para objetos
            const oUsuarios = mUsuario.findAll()
            return oUsuarios
        } catch (error) {
            return error
        }
    };

    adicionar(usuario) {
        try {
            const oUsuario = mUsuario.create({
                nome: usuario.nome,
                sobrenome: usuario.sobrenome,
                idade: usuario.idade
            })
            return oUsuario
        } catch (error) {
            return error
        }
    };

    listarUsuario(id) {
        try {
            const oUsuario = mProduto.findByPk(id)
            return oUsuario
        } catch (error) {
            return error
        }
    };
    
    deletar(id) {
        try {
            const oUsuario = mUsuario.destroy({
                where: {
                    id: id
                }
            })
            return oUsuario
        } catch (error) {
            return error
        }
    };

    atualizar(usuario) {
        mUsuario.update({
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            idade: usuario.idade
        }, 
        {
            where: {
                id: usuario.id
            }
        })
        .then((success) => {
            return success
        })
        .catch((error) => {
            return error
        })

    }
}