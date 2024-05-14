<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title> Formulario Imagen</title>
	</head>
	<body>
		<h1> Nueva imagen </h1>
		<form action="/cargar/imagen" method="POST" enctype="multipart/form-data">
        	<div>
	        	<label for="imagen">
	        		Imagen nueva:
	        	</label>
	        	<input type="file" name="imagen" id="imagen">
        	</div>
        	<button type="submit"> Cargar </button>
    	</form>
	</body>
</html>