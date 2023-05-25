package com.arjit.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController

//this is the API for everything and if we give API's in Getmapping and Postmapping then those API will add on to this one
@RequestMapping("/api/v1/travels")



public class TravelController {

    Travel person=new Travel();
    @Autowired
    private TravelService travelService;

  @PostMapping("/post")
  public Travel postTravel(@RequestBody Travel person){
      return  travelService.inTravel(person);
  }
    @GetMapping("/submit")
    public List<Travel> getTravel() {
        return  travelService.allTravel();


    }


}



