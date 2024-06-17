package com.infosys.services;

// import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.entities.Message1;
import com.infosys.repositories.MessageRepository;

@Service
public class MessageService implements MessageInterface {
    @Autowired
    private MessageRepository messageRepository;

    @Override
    public Message1 addMessage(Message1 message) {
  
        return messageRepository.save(message);
    }
    @Override
    public List<Message1> getMessagesBySenderEmail(String senderEmail) {
        return messageRepository.findBySenderEmail(senderEmail);
    }
    @Override
    public List<Message1> getMessagesByReceiverEmail(String receiverEmail) {
        return messageRepository.findByReceiverEmail(receiverEmail);
    }
    
}
