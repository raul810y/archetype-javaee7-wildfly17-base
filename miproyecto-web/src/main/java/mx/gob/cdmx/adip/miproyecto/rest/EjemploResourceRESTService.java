package mx.gob.cdmx.adip.miproyecto.rest;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/ejemplo")
@RequestScoped
public class EjemploResourceRESTService {
  
    @GET
    @Path("/{dato}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.TEXT_PLAIN)
    public Response compararHuella(@PathParam("dato") final String dato) {
        if(dato.compareTo("") == 0) {
        	return Response.status(Response.Status.NOT_FOUND).entity("{\"recibido\":\"null\"}").build();
        }else {
        	return Response.status(Response.Status.OK).entity("{\"recibido\":\""+dato+"\"}").build();
        }
    }
}
