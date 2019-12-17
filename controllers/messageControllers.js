const Message = require('../models/message');

// eslint-disable-next-line consistent-return
const createMsg = (req, res) => {
  const newMsg = new Message({
    message: req.body.message,
    author: req.body.author,
    reciever: req.body.receiver,
  });

  if (!newMsg.reciever) { return res.status(400).send({ message: 'Must specify a reciever' }); }

  newMsg.save((err) => {
    if (err) { return res.status(500).send({ message: 'Error', err }); }
    return res.status(200).send({ message: 'Message successfully sent' });
  });
};

module.exports = {
  createMsg,
};
