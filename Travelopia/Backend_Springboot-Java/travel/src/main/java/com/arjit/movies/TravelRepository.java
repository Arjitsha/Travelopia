package com.arjit.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import javax.naming.Name;
import java.util.List;
import java.util.Optional;

//this Mongo repository will always take ObjectId as the reference
@Repository
public interface TravelRepository extends MongoRepository<Travel, String> {



}
