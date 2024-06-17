package com.infosys.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sender;
    private Long receiverId;
    private String message;
	public Message() {
		super();
	}
	public Message(Long id, String sender, Long receiverId, String message) {
		super();
		this.id = id;
		this.sender = sender;
		this.receiverId = receiverId;
		this.message = message;
	}
	@Override
	public String toString() {
		return "Message [id=" + id + ", sender=" + sender + ", receiverId=" + receiverId + ", message=" + message + "]";
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public Long getReceiverId() {
		return receiverId;
	}
	public void setReceiverId(Long receiverId) {
		this.receiverId = receiverId;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

}
