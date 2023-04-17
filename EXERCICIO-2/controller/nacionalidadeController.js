const NacionalidadeDao = require('../model/DAO/nacionalidadeDAO')

module.exports = {
    async listar(req, res) {
        try {
            const oNacionalidade = await new NacionalidadeDao().listarTodos()
            return res.json(oNacionalidade).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    },
    
    async adicionar(req, res) {
        const oNacionalidade = req.body
        try {
            const sNacionalidade = await new NacionalidadeDao().adicionar(oNacionalidade)
            return res.json(sNacionalidade).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    },

    async listarNacionalidade(req, res) {
        const oId = req.params.id
        try {
            const oNacionalidade = await new NacionalidadeDao().listarNacionalidade(oId)
            return res.json(oNacionalidade).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    },

    async deletar(req, res) {
        const oId = req.params.id
        try {
            const oNacionalidade = await new NacionalidadeDao().deletar(oId)
            return res.json(oNacionalidade).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    },

    async atualizar(req, res) {
        const oNacionalidade = req.body
        // const oId = req.params.id
        try {
            const sNacionalidade = await new NacionalidadeDao().atualizar(oNacionalidade)
            return res.json(sNacionalidade).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    }
}