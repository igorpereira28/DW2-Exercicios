const UsuarioDao = require('../model/DAO/usuarioDAO')

module.exports = {

    adicionar(req, res) {
        res.render('usuario/cadastrarUsuario')
    },

    async listar(req, res) {
        try {
            const oUsuarios = await new UsuarioDao().listarTodos()
            return res.json(oUsuarios).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    },
    
    async adicionar(req, res) {
        const oUsuario = req.body
        try {
            const sUsuario = await new UsuarioDao().adicionar(oUsuario)
            return res.json(sUsuario).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    },

    async listarUsuario(req, res) {
        const oId = req.params.id
        try {
            const oUsuario = await new UsuarioDao().listarUsuario(oId)
            return res.json(oUsuario).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    },

    async deletar(req, res) {
        const oId = req.params.id
        try {
            const oUsuario = await new UsuarioDao().deletar(oId)
            return res.json(oUsuario).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    },

    async atualizar(req, res) {
        const oUsuario = req.body
        // const oId = req.params.id
        try {
            const sUsuario = await new UsuarioDao().atualizar(oUsuario)
            return res.json(sUsuario).status(200)
        } catch (error) {
            return res.json(error).status(404)
        }
    }
}