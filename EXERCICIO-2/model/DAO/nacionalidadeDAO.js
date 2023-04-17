//onde a classe fara tudo
//m de model
const mNacionalidade = require('../nacionalidade')

module.exports = class NacionalidadeDao {
    constructor() {

    }

    listarTodos() {
        try {
            //o para objetos
            const oNacionalidade = mNacionalidade.findAll()
            return oNacionalidade
        } catch (error) {
            return error
        }
    };

    adicionar(nacionalidade) {
        try {
            const oNacionalidade = mNacionalidade.create({
                pais: nacionalidade.pais,
                nacionalidade: nacionalidade.nacionalidade,
                continente: nacionalidade.continente
            })
            return oNacionalidade
        } catch (error) {
            return error
        }
    };

    listarNacionalidade(id) {
        try {
            const oNacionalidade = mNacionalidade.findByPk(id)
            return oNacionalidade
        } catch (error) {
            return error
        }
    };
    
    deletar(id) {
        try {
            const oNacionalidade = mNacionalidade.destroy({
                where: {
                    id: id
                }
            })
            return oNacionalidade
        } catch (error) {
            return error
        }
    };

    atualizar(nacionalidade) {
        mNacionalidade.update({
            pais: nacionalidade.pais,
            nacionalidade: nacionalidade.nacionalidade,
            continente: nacionalidade.continente
        }, 
        {
            where: {
                id: nacionalidade.id
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