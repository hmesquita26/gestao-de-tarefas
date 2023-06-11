package com.sistema.gestaodetarefasback.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sistema.gestaodetarefasback.domain.Tarefa;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Integer>{
	
	@Query("select t from tarefa t where t.estado = 0")
	Optional<List<Tarefa>> findByTarefasNaoIniciadas();
	
	@Query("select t from tarefa t where t.estado = 1")
	Optional<List<Tarefa>> findByTarefasEmProgresso();
	
	@Query("select t from tarefa t where t.estado = 2")
	Optional<List<Tarefa>> findByTarefasFinalizadas();
	
	@Query("select t from tarefa t where t.estado = 3")
	Optional<List<Tarefa>> findByTarefasArquivadas();
}
