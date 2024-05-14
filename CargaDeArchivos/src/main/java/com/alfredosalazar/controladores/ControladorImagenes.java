package com.alfredosalazar.controladores;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.alfredosalazar.modelos.Imagen;
import com.alfredosalazar.servicios.ServicioImagenes;

@Controller
public class ControladorImagenes {
	@Autowired
	private final ServicioImagenes servicioImagenes;
	
	public ControladorImagenes(ServicioImagenes servicioImagenes) {
		this.servicioImagenes = servicioImagenes;
	}
	
	@GetMapping("/imagenes")
	public String desplegarListaImagenes(Model modelo) {
		List<Imagen> listaImagenes = this.servicioImagenes.obtenerTodas();
		modelo.addAttribute("listaImagenes", listaImagenes);
		
		return "index.jsp";
	}
	
	@GetMapping("/imagen/nueva")
	public String formularioImagen() {
		return "formularioImagen.jsp";
	}
	
	@PostMapping("/cargar/imagen")
	public String procesaNuevaImagen(@RequestParam("imagen") MultipartFile archivo) throws IOException{
		if(archivo.isEmpty()) {
			return "redirect:/imagenes";
		}
		String nombreImagen = new Date().toString() + "_" + archivo.getOriginalFilename();
		String rutaBase = "/Users/alfredosalazar/Desktop/imagenes/";
		String rutaCompleta = rutaBase + nombreImagen;
		
		Imagen nuevaImagen = new Imagen(rutaCompleta, nombreImagen);
		this.servicioImagenes.guardar(nuevaImagen);
		
		archivo.transferTo(new File(rutaCompleta));
		
		return "redirect:/imagenes";
	}
	
}
