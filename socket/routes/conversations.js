const express = require('express');
const Convorouter = express.Router();
const Conversations = require('../model/conversations');
// const { findById } = require('../models/users');

Convorouter.post("/", async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        // Check if the conversation already exists
        const existingConversation = await Conversations.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (existingConversation) {
            return res.status(200).json(existingConversation);
        }

        const conversation = new Conversations({
            members: [senderId, receiverId]
        });

        const newConversation = await conversation.save();
        return res.status(201).json(newConversation);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

Convorouter.get('/:id/:o_id', async (req, res) => {
    try {
        const conversation = await Conversations.find({
            members: { $all: [req.params.id, req.params.o_id] }
        })
        return res.status(201).json(conversation);
    } catch (error) {
        return res.status(401).json({ message: error });
    }
});

Convorouter.get('/:id', async (req, res) => {
    try {
        const conversation = await Conversations.find({
            members: { $in: [req.params.id] }
        })
        return res.status(201).json(conversation);
    } catch (error) {
        return res.status(401).json({ message: error });
    }
});

module.exports = Convorouter;