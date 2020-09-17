package com.devsuperior.dvpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dvpesquisa.entities.Record;
@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

}
