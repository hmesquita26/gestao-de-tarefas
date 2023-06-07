package com.sistema.gestaodetarefasback.domain.enums;

import lombok.Getter;

@Getter
public enum Estado {
	
	NAO_INICIADA(0, "NAO_INICIADA"), EM_PROGRESSO(1, "EM_PROGRESSO"), FINALIZADA(2, "FINALIZADA"), ARQUIVADA(3, "ARQUIVADA");
	
	private Integer codigo;
	private String descricao;
	
	private Estado(Integer codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}
	
	public static Estado toEnum(Integer codigo) {
		if (codigo == null)
			return null;
		
		for (Estado estado: Estado.values()) {
			if (codigo.equals(estado.getCodigo()))
				return estado;
		}
		
		throw new IllegalArgumentException("Estado inválido");
	}

}
