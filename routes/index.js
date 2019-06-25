const express = require("express");
const router = express.Router();
//CONTROLADORES DE LA PELICULA
const movieController = require("../controllers/Movie_controller");
const genreController = require("../controllers/Genre_controller");
const censorshipController = require("../controllers/Censorship_level_controller");
//CONTROLADORES DE LA SALA Y SILLAS
const roomController = require("../controllers/Room_controller");
const roomTypeController = require("../controllers/Room_type_controller");
const technologyController = require("../controllers/Technology_type_controller");
const aisleController = require("../controllers/Aisle_controller");
const entranceController = require("../controllers/Entrance_controller");
const exitController = require("../controllers/Exit_entrance");
const seatController = require("../controllers/Seat_controller");
//CONTROLADORES DE COMIDA Y COMBOS
const comboController = require("../controllers/Combo_controller");
const dishController = require("../controllers/Dish_controller");
const dishTypeController = require("../controllers/Dish_type_controller");
//CONTROLADORES MICELANEOS
const occupiedSeatsController = require("../controllers/Occupied_seats_controller");
const roomInMaintenanceController = require("../controllers/Room_in_maintenance_controller");
//CONTROLADORES DE SEDE, REPERTORIO Y FUNCIONES
const theaterController = require("../controllers/Theater_controller");
const screeningController = require("../controllers/Screening_controller");
const repertoryController = require("../controllers/Movie_repertory_controller");
//CONTROLADORES DE IDIOMAS Y SUBTITULOS
const subtitleController = require("../controllers/Subtitle_controller");
const languageController = require("../controllers/Language_controller");

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

router.get("/comida", (req,res) => {
  res.render("comida", { title: (req,res)});
});

router.get("/lenguaje", (req,res) => {
  res.render("lenguaje", { title: (req,res)});
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

router.get("/update-movie", (req,res)=>{
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

        res.render("update_movie", {movie, genre});

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
      movieController.UpdateMovie(req.body, req.body.id);
    };
  res.redirect('/get-movies');
});

router.post("/deleteMovie", (req,res) => {
  movieController.DeleteMovie(req.body);
  res.redirect('/get-movies');
});

router.post("/getMoviesByGenreId", (req,res) => {
  let genre;
  let movie;

  genreController.GetGenres((gGenre) => {
    genre = gGenre;
  });
  
  movieController.GetMoviesByGenre(req.body,(gMovie,err) => {
    movie = gMovie;
  });
  res.render('get_movies', {genre, movie});
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
    techType = gTechType;
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
  roomController.CreateRoom(req.body);
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

router.get("/update-genre",(req,res) => {
  genreController.GetGenres((genre,err) => {
    res.render("update_genre", {genre});
  });
});

router.get("/delete-genre",(req,res) => {
  genreController.GetGenres((genre,err) => {
    res.render("delete_genre", {genre});
  });
});
/*-----------------POST-------------------*/
router.post("/createGenre",(req,res) => {
  genreController.CreateGenre(req.body);
  res.redirect("/get-genres");
});

router.post('/deleteGenre', (req,res) => {
  genreController.DeleteGenre(req.body);
  res.redirect('/get-genres');
});

router.post('/updateGenre', (req,res) => {
  genreController.UpdateGenre(req.body);
  res.redirect('/get-genres');
});
/*--------------------------------------------------COMIDA------------------------------------*/
  /*-----------------GET-------------------*/
router.get("/create-dish", (req, res) => {
  dishTypeController.GetDishTypes((dishType, err) => {
    res.render("create_dish", {dishType});
  });
});

router.get("/get-dishes", (req,res)=>{
  dishController.GetDishes((dish, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain theaters"
      });
    else {
      res.render("get_dishes", {dish});
    }
  });
});

router.get("/update-dish", (req,res)=>{
  dishController.GetDishes((dish, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain theaters"
      });
    else {
      res.render("update_dish", {dish});
    }
  });
});

router.get('/delete-dish', (req,res)=>{
  dishController.GetDishes((dish, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain theaters"
      });
    else {
      res.render("delete_dish", {dish});
    }
  });
});
/*-----------------POST-------------------*/
router.post("/createDish" ,(req,res)=>{
  dishController.CreateDish(req.body);
  res.redirect('/get-dishes');
});

router.post("/updateDish", (req, res) => {
  console.log(req.body);
    if(!!req.body.id){ 
      console.log(req.body.id);
      dishController.UpdateDish(req.body,req.body.id)
  };
  res.redirect('/get-dishes');
});

router.post("/deleteDish",(req,res)=>{
  dishController.DeleteDish(req.body);
  res.redirect('/get-dishes');
});
/*----------------------------------------------------------------------*/
/*--------------------------------------------------DISH TYPE------------------------------------*/
  /*-----------------GET-------------------*/
router.get("/create-dish-type", (req, res) => {
  res.render("create_dish_type");
});

router.get("/get-dish-types", (req,res)=>{
  dishTypeController.GetDishTypes((dishType, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to obtain dish types"
      });
    else {
      res.render("get_dish_types", {dishType});
    }
  });
});

// router.get("/update-dish", (req,res)=>{
//   dishController.GetDishes((dish, err) => {
//     if (err)
//       res.json({
//         success: false,
//         msg: "Failed to obtain theaters"
//       });
//     else {
//       res.render("update_dish", {dish});
//     }
//   });
// // });

// router.get('/delete-dish', (req,res)=>{
//   dishController.GetDishes((dish, err) => {
//     if (err)
//       res.json({
//         success: false,
//         msg: "Failed to obtain theaters"
//       });
//     else {
//       res.render("delete_dish", {dish});
//     }
//   });
// });
/*-----------------POST-------------------*/
router.post("/createDishType",(req,res)=>{
  dishTypeController.CreateDishType(req.body);
  res.redirect('/get-dish-types');
});

// router.post("/updateDish", (req, res) => {
//   console.log(req.body);
//     if(!!req.body.id){ 
//       console.log(req.body.id);
//       dishController.UpdateDish(req.body,req.body.id)
//   };
//   res.redirect('/get-dishes');
// });

router.post("/deleteDishType",(req,res)=>{
  dishTypeController.DeleteDishType(req.body);
  res.redirect('/get-dish-types');
});
/*----------------------------------------------------------------------*/

/*---------------------------SUBTITLES--------------------------------*/
/*-----------------GET-------------------*/
router.get("/get-subtitles",(req,res) => {
  let movie;

  movieController.GetMovies((gMovie, err) => {
    movie = gMovie;
  });

  subtitleController.GetSubtitles((subtitle, err)=> {
    res.render("get_subtitles", {subtitle, movie});
  })
});

/*-----------------POST-------------------*/
router.post("/getSubtitlesByMovieId",(req,res) => {

  subtitleController.GetSubtitlesByMovieId(req.body, (subtitle ,err) => {
    res.render("get_subtitles", {subtitle});
  })
});


/*---------------------------REPERTORY--------------------------------*/
/*-----------------GET-------------------*/
router.get("/create-repertory", (req,res) => {
  let movie;
  let theater;
  let subtitle;
  let language;
  
    movieController.GetMovies((gMovie, err) => {
      movie = gMovie;
    });
  
    theaterController.GetTheaters((gTheater, err) => {
      theater = gTheater;
    });
  
    subtitleController.GetSubtitles((gSubtitle, err) => {
      subtitle = gSubtitle;
    });
  
    languageController.GetLanguages((gLanguage, err) => {
      language = gLanguage;
    });
  
    censorshipController.GetCensorshipLevels((censorship, err) => {
       res.render("create_repertory", {movie, theater, subtitle, language, censorship});
    });
});

router.get("/get-rooms", (req, res) => {
  roomController.GetRooms((room, err) => {
    res.render("get_rooms", {room});
  });
});

router.get("/update-room", (req, res) => {
  roomController.UpdateRoom(req.body);
  res.redirect("/get-rooms");
});
/*-----------------POST-------------------*/
router.post("/createRoom", (req, res) => {
  roomController.CreateRoom(req.body);
  res.redirect("/get-rooms");
});

router.post("/updateRoom", (req, res) => {
  roomController.UpdateRoom(req.body);
  res.redirect("/get-rooms");
});

/*--------------------------------------------------TECH TYPE-----------------------------------*/
  /*-----------------GET-------------------*/
  router.get("/create-technology-type", (req, res) => {
    res.render("create_technology");
  });
  
  router.get("/get-technology-types", (req,res)=>{
    technologyController.GetTechnologyTypes((techType, err) => {
      if (err)
        res.json({
          success: false,
          msg: "Failed to obtain tech types"
        });
      else {
        res.render("get_technology", {techType});
      }
    });
  });
  /*-----------------POST-------------------*/
  router.post("/createTechnologyType",(req,res)=>{
    technologyController.CreateTechnologyType(req.body);
    res.redirect('/get-technology-types');
  });
  
  router.post("/deleteTechnologyType",(req,res)=>{
    technologyController.DeleteTechnologyType(req.body);
    res.redirect('/get-technology-types');
  });
  /*----------------------------------------------------------------------*/

/*--------------------------------------------------ROOM TYPE-----------------------------------*/
  /*-----------------GET-------------------*/
  router.get("/create-room-type", (req, res) => {
    res.render("create_room_type");
  });
  
  router.get("/get-room-types", (req,res)=>{
    roomTypeController.GetRoomTypes((roomType, err) => {
      if (err)
        res.json({
          success: false,
          msg: "Failed to obtain room types"
        });
      else {
        res.render("get_room_types", {roomType});
      }
    });
  });
  /*-----------------POST-------------------*/
  router.post("/createRoomType",(req,res)=>{
    roomTypeController.CreateRoomType(req.body);
    res.redirect('/get-room-types');
  });
  
  router.post("/deleteRoomType",(req,res)=>{
    roomTypeController.DeleteRoomType(req.body);
    res.redirect('/get-room-types');
  });
  /*----------------------------------------------------------------------*/

  /*--------------------------------------------------LANGUAGE-----------------------------------*/
  /*-----------------GET-------------------*/
  router.get("/create-language", (req, res) => {
    res.render("create_language");
  });
  
  router.get("/get-languages", (req,res)=>{
    languageController.GetLanguages((language, err) => {
      if (err)
        res.json({
          success: false,
          msg: "Failed to obtain languages"
        });
      else {
        res.render("get_languages", {language});
      }
    });
  });
  /*-----------------POST-------------------*/
  router.post("/createLanguage",(req,res)=>{
    languageController.CreateLanguage(req.body);
    res.redirect('/get-languages');
  });
  
  router.post("/deleteLanguage",(req,res)=>{
    languageController.DeleteLanguage(req.body);
    res.redirect('/get-languages');
  });
  /*----------------------------------------------------------------------*/
module.exports = router;