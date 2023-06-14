package com.sistema.gestaodetarefasback.services;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.gestaodetarefasback.domain.Tarefa;
import com.sistema.gestaodetarefasback.domain.dto.TarefaDTO;
import com.sistema.gestaodetarefasback.domain.enums.Estado;
import com.sistema.gestaodetarefasback.repository.TarefaRepository;
import com.sistema.gestaodetarefasback.services.exceptions.BusinessException;
import com.sistema.gestaodetarefasback.services.exceptions.ObjectNotFoundException;

@Service
public class TarefaService {

	@Autowired
	private TarefaRepository tarefaRepository;
	
	public Tarefa findById(Integer id) {
		Optional<Tarefa> tarefa = tarefaRepository.findById(id);
		return tarefa.orElseThrow(() -> new ObjectNotFoundException("Tarefa não encontrada!"));
	}
	
	public List<Tarefa> findAll() {
		return tarefaRepository.findAll();
	}
	
	public List<Tarefa> findByTarefasNaoIniciadas() {
		Optional<List<Tarefa>> tarefaOp = tarefaRepository.findByEstado(Estado.NAO_INICIADA); 
		return tarefaOp.orElse(null);
	}
	
	public List<Tarefa> findByTarefasEmProgresso() {
		Optional<List<Tarefa>> tarefaOp = tarefaRepository.findByEstado(Estado.EM_PROGRESSO); 
		return tarefaOp.orElse(null);
	}
	
	public List<Tarefa> findByTarefasFinalizadas() {
		Optional<List<Tarefa>> tarefaOp = tarefaRepository.findByEstado(Estado.FINALIZADA); 
		return tarefaOp.orElse(null);
	}
	
	public List<Tarefa> findByTarefasArquivadas() {
		Optional<List<Tarefa>> tarefaOp = tarefaRepository.findByEstado(Estado.ARQUIVADA); 
		return tarefaOp.orElse(null);
	}
	
	public Tarefa cadastrar(TarefaDTO tarefaDTO) {
		tarefaDTO.setId(null);
		tarefaDTO.setEstado(Estado.NAO_INICIADA);
		if (tarefaDTO.getDescricao() == null)
			tarefaDTO.setDescricao("");
		Tarefa tarefa = new Tarefa(tarefaDTO);
		return tarefaRepository.save(tarefa);
	}
	
	public Tarefa atualizar(Integer id, @Valid TarefaDTO tarefaDTO) {
		tarefaDTO.setId(id);
		Tarefa tarefa = findById(id);
		
		if (tarefa.getEstado() == Estado.FINALIZADA || tarefa.getEstado() == Estado.ARQUIVADA)
			throw new BusinessException("Não é possível alterar a tarefa!");
		
		if (tarefaDTO.getEstado().getCodigo() != tarefa.getEstado().getCodigo())
			tarefaDTO = alterarEstado(tarefaDTO, tarefa);
		Tarefa novaAtualizada = new Tarefa(tarefaDTO);
		return tarefaRepository.save(novaAtualizada);
	}
	
	public Tarefa arquivar(Integer id) {
		Optional<Tarefa> tarefaOp = tarefaRepository.findById(id);
		
		if (tarefaOp.isPresent()) {
			Tarefa tarefa = tarefaOp.get();
			tarefa.setEstado(Estado.ARQUIVADA);
			return tarefaRepository.save(tarefa);
		}		
		throw new BusinessException("Não foi possível arquivar a tarefa!");
	}
	
	private TarefaDTO alterarEstado(TarefaDTO tarefaDTO, Tarefa tarefa) {
		if (tarefaDTO.getEstado() == Estado.FINALIZADA && tarefa.podeSerFinalizado())
			tarefaDTO.setEstado(Estado.FINALIZADA);
		else if (tarefaDTO.getEstado() == Estado.EM_PROGRESSO && tarefa.podeIrParaProgresso())
			tarefaDTO.setEstado(Estado.EM_PROGRESSO);
		else if (tarefaDTO.getEstado() == Estado.NAO_INICIADA && tarefa.podeIrParaNaoIniciada())
			tarefaDTO.setEstado(Estado.NAO_INICIADA);
		return tarefaDTO;
	}
}
