package com.alfredosalazar.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alfredosalazar.modelos.Imagen;
import com.alfredosalazar.repositorios.RepositorioImagenes;

@Service
public class ServicioImagenes {
	@Autowired
	private final RepositorioImagenes repositorioImagenes;
	
	public ServicioImagenes(RepositorioImagenes repositorioImagenes) {
		this.repositorioImagenes = repositorioImagenes;
	}
	
	public List<Imagen> obtenerTodas(){
		return this.repositorioImagenes.findAll();
	}
	
	public Imagen guardar(Imagen nuevaImagen) {
		return this.repositorioImagenes.save(nuevaImagen);
	}
}
