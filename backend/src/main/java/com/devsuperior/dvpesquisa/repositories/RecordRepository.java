package com.devsuperior.dvpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dvpesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}
