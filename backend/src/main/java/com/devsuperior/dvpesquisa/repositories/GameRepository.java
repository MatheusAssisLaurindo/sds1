package com.devsuperior.dvpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dvpesquisa.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
