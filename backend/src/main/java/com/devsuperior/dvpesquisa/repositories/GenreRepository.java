package com.devsuperior.dvpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dvpesquisa.entities.Genre;
@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

}
