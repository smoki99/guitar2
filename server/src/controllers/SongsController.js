const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const song = await Song.findAll({
        limit: 10
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured tryping to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured tryping to fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      console.log('starting post')
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured tryping to create the song'
      })
    }
  },
  async save (req, res) {
    try {
      console.log('starting post')
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured tryping to create the song'
      })
    }
  }
}
