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
const theaterController = require("../controllers/Theater_controller")
const technologyController = require("../controllers/Technology_type_controller")

router.get("/", (req, res) => {
  res.render("home", { title: "home" });
});

router.get("/administrar", (req,res) => {
  res.render("administrar", { title: (req,res)});
});

/*----------------------PELICULAS------------------------------*/
router.get("/create-movie", (req, res) => {
  
  genreController.GetGenre((genre, err) => {
    if(err)
      res.json({
        success: false,
        msg: "Failed to obtain genre"
      });
    else {
      console.log(genre);

      res.render("create_movie", {genre});
    }
  });
});

router.get("/get-movies", (req,res)=>{
  movieController.Get((movie, err) => {
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

router.post("/createMovie" ,(req,res)=>{
  movieController.CreateMovie(req.body);
  res.redirect('/get-movies');
});
  
router.post("/updateMovie", (req, res) => {
  console.log(req.body);
    if(!!req.body.id){ 
      console.log(req.body.id);
      movieController.Update(req.body,req.body.id)
  };
  res.redirect('/get-movies');
});

router.post("/deleteMovie",(req,res)=>{
  movieController.Delete(req.body,req.body.titulo);
  res.redirect('/get-movies');
});

/*-------------------------------------------------------------*/
/*---------------------------THEATER--------------------------------*/

router.get("/create-theater", (req, res) => {
  res.render("create_theater", { title: "Agregar Sede"});
});

router.get("/get-theater", (req,res)=>{
  theaterController.Get((theater, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener peliculas"
      });
    else {
      res.render("get_theater", {theater});
    }
  });
});

router.get("/update-theater", (req,res)=>{
  theaterController.Get((theater, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener peliculas"
      });
    else {
      res.render("update_theater", {theater});
    }
  });
});

router.get('/delete-theater', (req,res)=>{
  theaterController.Get((theater, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener Theater"
      });
    else {
      res.render("delete_theater", {theater});
    }
  });
});

router.post("/createTheater" ,(req,res)=>{
  theaterController.Create(req.body);
  res.redirect('/get-theater');
});

router.post("/updateTheater", (req, res) => {
  console.log(req.body);
    if(!!req.body.Fiscal_name){ 
      console.log(req.body.Fiscal_name);
      theaterController.Update(req.body,req.body.Fiscal_name)
  };
  res.redirect('/get-theater');
});

router.post("/deleteTheater",(req,res)=>{
  theaterController.Delete(req.body,req.body.Fiscal_name);
  res.redirect('/get-theater');
});

/*-----------------------------------Technology_Type------------------------------------*/
router.get("/create-technology", (req, res) => {
  res.render("create_technology", { title: "Agregar technology"});
});

router.get("/get-technology", (req,res)=>{
  technologyController.Get((technology, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener peliculas"
      });
    else {
      res.render("get_technology", {technology});
    }
  });
});

router.get("/update-technology", (req,res)=>{
  technologyController.Get((technology, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener peliculas"
      });
    else {
      res.render("update_technology", {technology});
    }
  });
});

router.get('/delete-technology', (req,res)=>{
  technologyController.Get((technology, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener sede"
      });
    else {
      res.render("delete_technology", {technology});
    }
  });
});

router.post("/createTechnology" ,(req,res)=>{
  technologyController.Create(req.body);
  res.redirect('/get-technology');
});

router.post("/updateTechnology", (req, res) => {
  console.log(req.body);
    if(!!req.body.Description){ 
      console.log(req.body.Description);
      technologyController.Update(req.body,req.body.Description)
  };
  res.redirect('/get-technology');
});

router.post("/deleteTechnology",(req,res)=>{
  technologyController.Delete(req.body,req.body.Description);
  res.redirect('/get-technology');
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