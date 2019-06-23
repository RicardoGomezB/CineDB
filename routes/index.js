const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth_controller");
const userController = require("../controllers/User_controller");
const movieController = require("../controllers/Movie_controller");
const aisleController = require("../controllers/Aisle_controller");
const screeningController = require("../controllers/Screening_controller");
const comboController = require("../controllers/Combo_controller");
const occupiedSeats = require("../controllers/Occupied_seats_controller");
const seatController = require("../controllers/Seat_controller");
const roomInMaintenanceController = require("../controllers/Room_in_maintenance_controller");
const genreController = require("../controllers/Genre_controller");

router.get("/", (req, res) => {
  res.render("home", { title: "home" });
});


/*----------------------PELICULAS------------------------------*/
router.get("/add-movie", (req, res) => {
  
  genreController.GetGenre((genre, err) => {
    if(err)
      res.json({
        success: false,
        msg: "Failed to obtain genre"
      });
    else {
      console.log(genre);

      res.render("add_Movie", {genre});
    }
  });
});

router.post("/createMovie" ,(req,res)=>{
  movieController.CreateMovie(req.body);
  res.redirect('/get-movies');
});

router.get("/get-movies", (req,res)=>{
  movieController.GetMovie((movie, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener peliculas"
      });
    else {
      res.render("get_movies", {movie});
    }
  });
});

router.get("/update-movie", (req,res)=>{
  movieController.GetMovie((movie, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener peliculas"
      });
    else {
      res.render("update_movie", {movie});
    }
  });
});

router.post("/updateMovie", (req, res) => {
  console.log(req.body);
    if(!!req.body.TITLE){ 
      console.log(req.body.TITLE);
      movieController.UpdateMovie(req.body,req.body.TITLE);
  }
  res.redirect('/get-movies');
});

router.get('/delete-movie', (req,res)=>{
  movieController.GetMovie((movie, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener peliculas"
      });
    else {
      res.render("delete_movie", {movie});
    }
  });
});

router.post("/delete-movie",(req,res)=>{
  movieController.DeleteMovie(req.body,req.body.titulo);
  res.redirect('/get-movies');
});
/*-------------------------------------------------------------*/

router.get("signin", (req, res) => {
  res.render("auth/signin", { title: "Iniciar Sesion" });
});
router.post("signin", authController.signin);
router.get("signup", (req, res) => {
  res.render("auth/signup", { title: "Registrarse" });
});
router.post("signup", userController.signup, authController.signin);

module.exports = router;
