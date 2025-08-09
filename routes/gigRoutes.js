const express = require('express');
const Gig = require('../models/Gig');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Create gig (Client only)
router.post('/', protect, async (req, res) => {
  if (req.user.role !== 'client')
    return res.status(403).json({ message: 'Only clients can post gigs' });

  const gig = await Gig.create({ ...req.body, client: req.user.id });
  res.json(gig);
});

// Get all gigs
router.get('/', async (req, res) => {
  const gigs = await Gig.find().populate('client', 'name email');
  res.json(gigs);
});

// Update gig
router.put('/:id', protect, async (req, res) => {
  const gig = await Gig.findById(req.params.id);
  if (!gig) return res.status(404).json({ message: 'Gig not found' });
  if (gig.client.toString() !== req.user.id)
    return res.status(403).json({ message: 'Not your gig' });

  const updated = await Gig.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete gig
router.delete('/:id', protect, async (req, res) => {
  const gig = await Gig.findById(req.params.id);
  if (!gig) return res.status(404).json({ message: 'Gig not found' });
  if (gig.client.toString() !== req.user.id)
    return res.status(403).json({ message: 'Not your gig' });

  await gig.deleteOne();
  res.json({ message: 'Gig deleted' });
});

module.exports = router;
