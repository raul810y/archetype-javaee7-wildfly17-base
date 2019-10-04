package mx.gob.cdmx.adip.miproyecto.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public abstract class JpaDao<K, F> {

//	@PersistenceContext(unitName = "miproyectoPU")
	protected EntityManager entityManager;
	
	abstract void persist(F dto);

	abstract void remove(F dto);

	abstract F findById(K id);
	
}
