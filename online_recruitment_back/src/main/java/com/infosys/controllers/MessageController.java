package com.infosys.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.infosys.entities.Message1;
import com.infosys.services.MessageService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
     MessageService service;

    @PostMapping("/add")
    public Message1 addMessage(@RequestBody Message1 message) {
        return service.addMessage(message);
    }

    @GetMapping("/sender/{senderEmail}")
    public List<Message1> getMessagesBySenderEmail(@PathVariable("senderEmail") String senderEmail) {
        return service.getMessagesBySenderEmail(senderEmail);
    }

    @GetMapping("/receiver/{receiverEmail}")
    public List<Message1> getMessagesByReceiverEmail(@PathVariable("receiverEmail") String receiverEmail) {
        return service.getMessagesByReceiverEmail(receiverEmail);
    }
    
}
