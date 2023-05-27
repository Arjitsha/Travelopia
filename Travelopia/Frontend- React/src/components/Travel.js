import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Travel() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[dest,setDest]=useState('')
    const[num,setNum]=useState('')
    const[travel,setTravel]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const travel={name,email,dest,num}
    console.log(travel)
    fetch("http://localhost:8080/api/v1/travels/post",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(travel)

  }).then(()=>{
    console.log("New traveller added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/api/v1/travels/submit")
  .then(res=>res.json())
  .then((result)=>{
    setTravel(result);
  }
)
},[])
  return (
    <div>

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Traveller</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label=" Name" variant="outlined" required fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Email Adress" variant="outlined" type="Email" required fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
       <TextField id="outlined-basic" label="Destination" variant="outlined" required fullWidth
      value={dest}
      onChange={(e)=>setDest(e.target.value)}
      />
       <TextField id="outlined-basic" label="Number of travellers" variant="outlined" type="number" required fullWidth
      value={num}
      onChange={(e)=>setNum(e.target.value)}
      />
      
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Travellers</h1>

    <Paper elevation={3} style={paperStyle}>

      {travel.map(travel=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={travel.id}>
         
         Name: {travel.name}<br/>
         Email: {travel.email}<br></br>
         Destination: {travel.dest}<br/>
         Number of travellers: {travel.num}<br></br>
       
         

        </Paper>
      ))
}


    </Paper>



    </Container>
    </div>
  );
}
