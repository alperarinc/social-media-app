package com.socialmedia.ws.user;

import lombok.Data;
import lombok.Generated;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity /*user objesinin veritabanında karşılığının oluşturulması için kullanıyor*/

public class User {

	@Id
	@GeneratedValue

	private long id;/*primary key için oluşturuldu*/

	private String username;

	private String displayName;

	private String password;






}
