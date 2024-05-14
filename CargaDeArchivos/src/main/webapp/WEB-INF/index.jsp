<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title> Cargado de imagenes </title>
	</head>
	<body>
		<h1> Lista de imagenes </h1>
		<c:forEach var="imagen" items="${listaImagenes}">
			<li> 
				<img src="/imagenes/${imagen.nombre}" />
			</li>
		</c:forEach>
		<a href="/imagen/nueva"> Agregar imagen </a>
	</body>
</html>