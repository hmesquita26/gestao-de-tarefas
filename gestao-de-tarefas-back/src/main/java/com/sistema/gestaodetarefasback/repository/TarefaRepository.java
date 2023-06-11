package com.sistema.gestaodetarefasback.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.gestaodetarefasback.domain.Tarefa;
import com.sistema.gestaodetarefasback.domain.enums.Estado;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Integer>{
	
	Optional<List<Tarefa>> findByEstado(Estado estado);

}
