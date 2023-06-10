package com.sistema.gestaodetarefasback.controllers.exceptions;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class FieldMessage implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String filedName;
	private String message;
}
