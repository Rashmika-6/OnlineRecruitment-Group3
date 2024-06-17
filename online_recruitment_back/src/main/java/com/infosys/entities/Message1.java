package com.infosys.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Message1 {
	public int getMessageId() {
		return messageId;
	}

	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}

	public String getSenderEmail() {
		return senderEmail;
	}

	public void setSenderEmail(String senderEmail) {
		this.senderEmail = senderEmail;
	}

	public String getReceiverEmail() {
		return receiverEmail;
	}

	public void setReceiverEmail(String receiverEmail) {
		this.receiverEmail = receiverEmail;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int messageId;
	private String senderEmail;

    private String receiverEmail;

    @Column(columnDefinition = "TEXT")
    private String message;

    private Date date;

	public Message1() {
		super();
	}

	public Message1(int messageId, String senderEmail, String receiverEmail, String message, Date date) {
		super();
		this.messageId = messageId;
		this.senderEmail = senderEmail;
		this.receiverEmail = receiverEmail;
		this.message = message;
		this.date = date;
	}

	@Override
	public String toString() {
		return "Message1 [messageId=" + messageId + ", senderEmail=" + senderEmail + ", receiverEmail=" + receiverEmail
				+ ", message=" + message + ", date=" + date + "]";
	}
}
