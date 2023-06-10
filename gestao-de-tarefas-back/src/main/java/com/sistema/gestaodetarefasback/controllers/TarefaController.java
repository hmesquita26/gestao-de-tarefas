package com.sistema.gestaodetarefasback.controllers;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sistema.gestaodetarefasback.domain.Tarefa;
import com.sistema.gestaodetarefasback.domain.dto.TarefaDTO;
import com.sistema.gestaodetarefasback.domain.enums.Estado;
import com.sistema.gestaodetarefasback.services.TarefaService;

@RestController
@RequestMapping(value = "/tarefas")
public class TarefaController {
	
	@Autowired
	private TarefaService service;
	
	@GetMapping("/{id}")
	public ResponseEntity<TarefaDTO> listarTarefa(@PathVariable Integer id) {
		Tarefa tarefa = service.findById(id);
		return ResponseEntity.ok().body(new TarefaDTO(tarefa));
	}
	
	@GetMapping
	public ResponseEntity<List<TarefaDTO>> listarTarefas(){
		List<Tarefa> listaTarefas = service.findAll();
		List<TarefaDTO> listaDTO = listaTarefas.stream().map(obj -> new TarefaDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listaDTO);
	}	
	
	@PostMapping
	public ResponseEntity<TarefaDTO> cadastrar(@Valid @RequestBody TarefaDTO tarefaDTO) {
		Tarefa tarefa = service.cadastrar(tarefaDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(tarefa.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<TarefaDTO> atualizar(@PathVariable Integer id, @Valid @RequestBody TarefaDTO tarefaDTO) {
		Tarefa tarefa = service.atualizar(id, tarefaDTO);		
		return ResponseEntity.ok(new TarefaDTO(tarefa));
	}
	
}
