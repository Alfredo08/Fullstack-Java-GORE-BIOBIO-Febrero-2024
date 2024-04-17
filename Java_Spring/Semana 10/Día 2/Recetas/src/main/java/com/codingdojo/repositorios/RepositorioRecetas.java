package com.codingdojo.repositorios;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.modelos.Receta;

@Repository
public interface RepositorioRecetas extends CrudRepository<Receta, Long> {
	List<Receta> findAll();

}
