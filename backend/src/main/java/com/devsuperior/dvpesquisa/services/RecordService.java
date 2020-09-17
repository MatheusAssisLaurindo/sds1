 package com.devsuperior.dvpesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dvpesquisa.dto.RecordDTO;
import com.devsuperior.dvpesquisa.dto.RecordInsertDTO;
import com.devsuperior.dvpesquisa.entities.Game;
import com.devsuperior.dvpesquisa.entities.Record;
import com.devsuperior.dvpesquisa.repositories.GameRepository;
import com.devsuperior.dvpesquisa.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = repository.save(entity);
		return new RecordDTO(entity);
	}
 
}
