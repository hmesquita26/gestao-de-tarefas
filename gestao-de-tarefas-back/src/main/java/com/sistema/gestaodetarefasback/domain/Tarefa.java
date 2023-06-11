package com.sistema.gestaodetarefasback.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.sistema.gestaodetarefasback.domain.dto.TarefaDTO;
import com.sistema.gestaodetarefasback.domain.enums.Estado;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Tarefa implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank(message = "O título da tarefa não pode estar em branco")
	@Size(max = 80, message = "O título da tarefa deve ter no máximo 80 caracteres")
	private String titulo;
	
	private String descricao;
	
	@Enumerated
	private Estado estado; 
	
	public Tarefa() {
		this.estado = Estado.NAO_INICIADA;
	}
	
	public Tarefa(String titulo, String descricao) {
		this.titulo = titulo;
		this.descricao = descricao;
		this.estado = Estado.NAO_INICIADA;
	}
	
	public Tarefa(TarefaDTO tarefaDTO) {
		this.id = tarefaDTO.getId();
		this.titulo = tarefaDTO.getTitulo();
		this.descricao = tarefaDTO.getDescricao();
		this.estado = tarefaDTO.getEstado();
	}
	
	public boolean podeSerFinalizado() {
		return this.estado == Estado.NAO_INICIADA || this.estado == Estado.EM_PROGRESSO;
	}
	
	public boolean podeIrParaProgresso() {
		return this.estado == Estado.NAO_INICIADA;
	}
	
	public boolean podeIrParaNaoIniciada() {
		return this.estado == Estado.EM_PROGRESSO;
	}
	
	public boolean podeSerArquivado() {
		return this.estado == Estado.NAO_INICIADA 
			|| this.estado == Estado.EM_PROGRESSO 
			|| this.estado == Estado.FINALIZADA;
	}

}
