package com.infosys.repositories;

import java.util.List;
// import com.infosys.entities.Message;
import com.infosys.entities.Message1;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MessageRepository extends JpaRepository<Message1, Integer> {

    List<Message1> findBySenderEmail(String senderEmail);
    List<Message1> findByReceiverEmail(String receiverEmail);
}
    

