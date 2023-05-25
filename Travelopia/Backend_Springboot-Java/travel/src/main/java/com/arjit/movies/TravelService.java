package com.arjit.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;


@Service
public class TravelService {
    Travel person=new Travel();
    // data access method in service
    @Autowired
    private TravelRepository travelRepository;
@GetMapping("/submit")
    public List<Travel> allTravel() {
    return travelRepository.findAll();
    }
    public Travel inTravel(Travel person){
        return travelRepository.save(person);
    }

//    to find movie by objectId


}
