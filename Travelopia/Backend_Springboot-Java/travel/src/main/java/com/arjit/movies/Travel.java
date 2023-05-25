package com.arjit.movies;

import java.util.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

//document is used to represent each document in mongodb compass
@Document(collection = "travel")
// to get all setters and getters and to string methods
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Travel {
//to indicate that Object Id is the main id of each document in mongodb compass
    @Id
    private String name;
    private String email;
    private String dest;
    private String num;
    private String curr;
//    private List<String>genre;





}
