miproyecto: Proyecto Base con Java EE 7 para Wildfly 17
==============================================================================================
Autor: Raúl Soto García

Tecnologías: EAR, JPA, CDI, JAX-RS, Richfaces, JSF

Ambiente de ejecución: WildFly

Código fuente: <https://github.com/raul810y/archetype-javaee7-wildfly17-base>


Objetivo del proyecto
-----------

Contar con un arquetipo de proyecto en Java EE 7 que pueda ser desplegado en JBoss Wildfly 17, con los módulos comunes de una aplicación web empresarial (web, ejb, ear)

Requerimientos del sistema
-------------------

Para la construcción del proyecto se requiere Java 8.0 (Java SDK 1.8) y Maven 3.1+.

La aplicación que produce este proyecto está diseñada para correr en JBoss WildFly 17.


Construir y desplegar la aplicación
-------------------------

NOTA: Los siguientes comandos asumen que se ha configurado Maven correctamente.

1. Asegurarse que se cuenta con Java 1.8 instalado y la variable JAVA_HOME asignada.
2. Abrir una línea de comandos y navegar al directorio raíz de este proyecto.
3. Ehecutar el siguiente comando para compilar y construir el proyecto:

        mvn clean install

4. Copiar el archivo que se genera: `target/miproyecto.ear` dentro de la carpeta "deployment" de wildfly.


Iniciar JBoss WildFly con un perfil Web
-------------------------

1. Después de compilar el proyecto con Java 1.8 y haber copiado el .EAR a la carpeta "deployment" de WildFly, se debe abrir una línea de comandos y ejecutar desde la carpeta /bin:

        Para Linux y MacOs:   JBOSS_HOME/bin/standalone.sh
        Para Windows: JBOSS_HOME\bin\standalone.bat

 

Ingresar a la aplicación y hacer uso de sus servicios
---------------------

La aplicación estará ejecutándose en la siguiente URL: <http://localhost:8080/miproyecto>.

Cuenta con un servicio REST de ejemplo:

<http://localhost:8080/miproyecto/rest/ejemplo/abcdefg>

