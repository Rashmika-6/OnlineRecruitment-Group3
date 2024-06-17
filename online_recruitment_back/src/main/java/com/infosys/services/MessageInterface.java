package com.infosys.services;


import com.infosys.entities.Message1;

import java.util.List;

public interface MessageInterface {
    Message1 addMessage(Message1 message);
    public List<Message1> getMessagesBySenderEmail(String senderEmail) ;
    public List<Message1> getMessagesByReceiverEmail(String receiverEmail);
    
} 
    
