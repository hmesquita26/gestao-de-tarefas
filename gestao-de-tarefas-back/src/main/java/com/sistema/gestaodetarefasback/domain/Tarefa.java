package com.sistema.gestaodetarefasback.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.sistema.gestaodetarefasback.domain.enums.Estado;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Tarefa {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String titulo;
	private String descricao;
	private Estado estado; 

}
