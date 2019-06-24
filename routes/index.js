const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth_controller");
const userController = require("../controllers/User_controller");
const movieController = require("../controllers/Movie_controller");
const aisleController = require("../controllers/Aisle_controller");
const entranceController = require("../controllers/Entrance_controller");
const exitController = require("../controllers/Exit_entrance");
const screeningController = require("../controllers/Screening_controller");
const comboController = require("../controllers/Combo_controller");
const occupiedSeats = require("../controllers/Occupied_seats_controller");
const seatController = require("../controllers/Seat_controller");
const roomInMaintenanceController = require("../controllers/Room_in_maintenance_controller");
const genreController = require("../controllers/Genre_controller");
const theaterController = require("../controllers/Theater_controller");
const technologyController = require("../controllers/Technology_type_controller");
const roomController = require("../controllers/Room_controller");
const roomTypeController = require("../controllers/Room_type_controller");

router.get("/", (req, res) => {
  res.render("home", { title: "home" });
});

router.get("/administrar", (req,res) => {
  res.render("administrar", { title: (req,res)});
});

router.get("/pelicula", (req,res) => {
  res.render("pelicula", { title: (req,res)});
});

router.get("/genre", (req,res) => {
  res.render("genre", { title: (req,res)});
});

router.get("/sede", (req,res) => {
  res.render("sede", { title: (req,res)});
});

router.get("/sala", (req,res) => {
  res.render("sala", { title: (req,res)});
});

/*----------------------MOVIES------------------------------*/
/*-----------------GET-------------------*/
router.get("/create-movie", (req, res) => {
  
  genreController.GetGenres((genre, err) => {
    if(err)
      res.json({
        success: false,
        msg: "Failed to obtain genres"
      });
    else {

      res.render("create_movie", {genre});

    }
  });
});

router.get("/get-movies", (req,res)=>{
  let genre;

  genreController.GetGenres((gGenre) => {
    genre = gGenre;
  });

  movieController.GetMovies((movie, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain movies"
      });
      else {

        res.render("get_movies", {movie, genre});

      }
  });
});

router.get("/delete-movie", (req,res)=>{
  movieController.GetMovies((movie, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain movies"
      });
      else {

        res.render("delete_movie", {movie});

      }
  });
});
/*-----------------POST-------------------*/
router.post("/createMovie" ,(req,res)=>{
  movieController.CreateMovie(req.body);
  res.redirect('/get-movies');
});
  
router.post("/updateMovie", (req,res) => {
  console.log(req.body);
    if(!!req.body.id){ 
      console.log(req.body.id);
      movieController.UpdateMovie(req.body,req.body.id)
    };
  res.redirect('/get-movies');
});

router.post("/deleteMovie", (req,res) => {
  movieController.DeleteMovie(req.body,req.body.titulo);
  res.redirect('/get-movies');
});

router.post("/getMoviesByGenreId", (req,res) => {
  let movies;
  movieController.GetMoviesByGenre(req.body,(gMovies,err) => {
    movies = gMovies;
  });
  res.render('get_movies', {movies});
});

/*---------------------------THEATER--------------------------------*/
/*-----------------GET-------------------*/
router.get("/create-theater", (req, res) => {
  res.render("create_theater", {title: "Agregar Sede"});
});

router.get("/get-theaters", (req,res)=>{
  theaterController.GetTheaters((theater, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain theaters"
      });
    else {
      res.render("get_theaters", {theater});
    }
  });
});

router.get("/update-theater", (req,res)=>{
  theaterController.GetTheaters((theater, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain theaters"
      });
    else {
      res.render("update_theater", {theater});
    }
  });
});

router.get('/delete-theater', (req,res)=>{
  theaterController.GetTheaters((theater, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain theaters"
      });
    else {
      res.render("delete_theater", {theater});
    }
  });
});
/*-----------------POST-------------------*/
router.post("/createTheater" ,(req,res)=>{
  theaterController.CreateTheater(req.body);
  res.redirect('/get-theaters');
});

router.post("/updateTheater", (req, res) => {
  console.log(req.body);
    if(!!req.body.id){ 
      console.log(req.body.id);
      theaterController.UpdateTheater(req.body,req.body.id)
  };
  res.redirect('/get-theaters');
});

router.post("/deleteTheater",(req,res)=>{
  theaterController.DeleteTheater(req.body,req.body.id);
  res.redirect('/get-theaters');
});

/*-----------------------------------Technology_Type------------------------------------*/
/*-----------------GET-------------------*/
router.get("/create-technology", (req, res) => {
  res.render("create_technology", { title: "Agregar technology"});
});

router.get("/get-technology", (req,res)=>{
  technologyController.GetTechnologyTypes((technology, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain technology types"
      });
    else {
      res.render("get_technology", {technology});
    }
  });
});

router.get("/update-technology", (req,res)=>{
  technologyController.GetTechnologyTypes((technology, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain technology types"
      });
    else {
      res.render("update_technology", {technology});
    }
  });
});

router.get('/delete-technology', (req,res)=>{
  technologyController.GetTechnologyTypes((technology, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain technology types"
      });
    else {
      res.render("delete_technology", {technology});
    }
  });
});
/*-----------------POST-------------------*/
router.post("/createTechnology" ,(req,res)=>{
  technologyController.CreateTechnologyType(req.body);
  res.redirect('/get-technology');
});

router.post("/updateTechnology", (req, res) => {
  console.log(req.body);
    if(!!req.body.id){ 
      console.log(req.body.id);
      technologyController.UpdateTechnologyType(req.body,req.body.id)
  };
  res.redirect('/get-technology');
});

router.post("/deleteTechnology",(req,res)=>{
  technologyController.DeleteTechnologyType(req.body,req.body.id);
  res.redirect('/get-technology');
});

/*-----------------------------------ROOMS------------------------------------*/
/*-----------------GET-------------------*/
//create
router.get("/create-room", (req, res) => {
  let roomType;
  let techType;
  let aisle;
  let entrance;
  let exit;

  aisleController.GetAisles((gAisle, err) => {
    aisle = gAisle;
  });

  aisleController.GetAisles((gAisle, err) => {
    aisle = gAisle;
  });

  entranceController.GetEntrances((gEntrance, err) => {
    entrance = gEntrance;
  });

  exitController.GetExits((gExit, err) => {
    exit = gExit;
  });
  
  technologyController.GetTechnologyTypes((gTechType, err) => {
    roomType = gTechType;
  });
  
  roomTypeController.GetRoomTypes((gRoomType, err) => {
    roomType = gRoomType;
  });
  
  theaterController.GetTheaters((theater, err) =>{
    if(err)
      res.json({
        success: false,
        msg: "Failed to obtain theaters"
      });
    else{
      res.render("create_room", {roomType, techType, theater, entrance, exit, aisle});
    }
  });
});
//get
router.get("/get-room", (req,res)=>{
  roomController.GetRooms((room, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain rooms"
      });
    else {
      res.render("get_rooms", {room});
    }
  });
});
//update
router.get("/update-room", (req,res)=>{
  let roomType;
  let techType;

  technologyController.GetTechnologyTypes((gTechType, err) => {
    roomType = gTechType;
  });
  
  roomTypeController.GetRoomTypes((gRoomType, err) => {
    roomType = gRoomType;
  });

  roomController.GetRooms((room, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain rooms"
      });
    else {
      res.render("update_room", {room, roomType, techType});
    }
  });
});
//delete
router.get('/delete-room', (req,res)=>{
  roomController.GetRooms((room, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain rooms"
      });
    else {
      res.render("delete_room", {room});
    }
  });
});

/*-----------------POST-------------------*/
//create
router.post("/createRoom" ,(req,res)=>{
  roomController.roomController(req.body);
  res.redirect('/get-rooms');
});
//update
router.post("/updateRoom", (req, res) => {
  console.log(req.body);
    if(!!req.body.id){ 
      console.log(req.body.id);
      roomController.UpdateRoom(req.body,req.body.id)
  };
  res.redirect('/get-rooms');
});
//delete
router.post("/deleteRoom",(req,res)=>{
  roomController.DeleteRoom(req.body,req.body.id);
  res.redirect('/get-rooms');
});

/*-----------------------------------ROOM TYPES------------------------------------*/
/*-----------------GET-------------------*/
//create
router.get("/create-roomType", (req, res) => {
  roomTypeController.GetRoomTypes((roomType, err) => {
    res.render("create_roomType", {roomType});
  });
});
//update
router.get("/update-roomType", (req,res)=>{
  roomTypeController.GetRooms((roomType, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain room types"
      });
    else {
      res.render("update_roomType", {roomType});
    }
  });
});
//delete
router.get('/delete-roomType', (req,res)=>{
  roomTypeController.GetRoomTypes((roomType, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain room types"
      });
    else {
      res.render("delete_roomType", {roomType});
    }
  });
});

/*-----------------POST-------------------*/
//create
router.post("/createRoomType" ,(req,res)=>{
  roomTypeController.CreateRoomType(req.body);
  res.redirect('/create-roomType');
});
//update
router.post("/updateRoomType", (req, res) => {
  console.log(req.body);
    if(!!req.body.id){ 
      console.log(req.body.id);
      roomTypeController.UpdateRoomType(req.body,req.body.id)
  };
  res.redirect('/update-roomType');
});
//delete
router.post("/deleteRoomType",(req,res)=>{
  roomController.DeleteRoom(req.body,req.body.id);
  res.redirect('/update-roomType');
});
//getters
router.post("/getRoomsByTheaterId",(req,res)=>{
  roomController.GetRoomsByTheaterId((theater,err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain theaters"
      });
    else {
      res.render("get_theaters", {theater});
    }
  });
});

/*---------------------------GENRE--------------------------------*/
/*-----------------GET-------------------*/
router.get("/get-genres",(req,res) => {
  genreController.GetGenres((genre, err)=> {
    res.render("get_genres", {genre});
  })
});
router.get("/create-genre",(req,res) => {
    res.render("create_genre");
});
/*-----------------POST-------------------*/
router.post("/createGenre",(req,res) => {
  genreController.CreateGenre(req.body);
  res.redirect("/get-genres");
});

/*----------------------------------------------------------------------*/
router.get("signin", (req, res) => {
  res.render("auth/signin", { title: "Iniciar Sesion" });
});
router.post("signin", authController.signin);
router.get("signup", (req, res) => {
  res.render("auth/signup", { title: "Registrarse" });
});
router.post("signup", userController.signup, authController.signin);

module.exports = router;