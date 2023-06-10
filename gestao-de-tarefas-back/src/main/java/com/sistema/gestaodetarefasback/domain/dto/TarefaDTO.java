package com.sistema.gestaodetarefasback.domain.dto;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

import com.sistema.gestaodetarefasback.domain.Tarefa;
import com.sistema.gestaodetarefasback.domain.enums.Estado;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class TarefaDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	
	@NotNull(message = "O campo Título é obrigatório")
	private String titulo;
	
	private String descricao;
	private Estado estado; 
	
	public TarefaDTO(Tarefa tarefa) {
		super();
		this.id = tarefa.getId();
		this.titulo = tarefa.getTitulo();
		this.descricao = tarefa.getDescricao();
		this.estado = tarefa.getEstado();
	}
	
}
