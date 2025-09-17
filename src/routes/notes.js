const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  try {
    const notes = await prisma.note.findMany({
      where: { author_id: 1 }
    })
    res.json(notes)
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "Error" })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const notes = await prisma.note.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })
    res.json(notes)
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "Error" })
  }
})


router.post('/', async (req, res) => {
  try {
    const newNote = await prisma.note.create({
      data: {

        author_id: 1,
        note: req.body.text
      }
    })
    res.json({ msg: "New note created", newNote: newNote })
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "Error" })
  }

})
router.patch('/:id', async (req, res) => {
  try {
    const updatedNote = await prisma.note.update({
      where: { id: Number(req.params.id) },
      data: { note: req.body.note },
    });
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error updating note' });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const deleteNote = await prisma.note.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(deleteNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error deleting note' });
  }
});

module.exports = router