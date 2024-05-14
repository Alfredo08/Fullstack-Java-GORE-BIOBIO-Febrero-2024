package com.alfredosalazar.repositorios;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.alfredosalazar.modelos.Imagen;

@Repository
public interface RepositorioImagenes extends CrudRepository<Imagen, Long> {
	List<Imagen> findAll();
}
