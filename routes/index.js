const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth_controller");
const userController = require("../controllers/User_controller");
const movieController = require("../controllers/Movie_controller");
const theaterController = require("../controllers/Theater_controller")
const technologyController = require("../controllers/Technology_type_controller")

router.get("/", (req, res) => {
  res.render("home", { title: "home" });
});

router.get("/administrar", (req,res) => {
  res.render("administrar", { title: (req,res)});
});

/*----------------------PELICULAS------------------------------*/
router.get("/agregar-pelicula", (req, res) => {
  res.render("add_Movie", { title: "Agregar Pelicula"});
});

router.post("/createMovie" ,(req,res)=>{
  movieController.Create(req.body);
  res.redirect('/get-peliculas');
});

router.get("/get-peliculas", (req,res)=>{
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

router.get("/modificar-pelicula", (req,res)=>{
  movieController.Get((movie, err) => {
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
    if(!!req.body.id){ 
      console.log(req.body.id);
      movieController.Update(req.body,req.body.id)
  };
  res.redirect('/get-peliculas');
});

router.get('/eliminar-pelicula', (req,res)=>{
  movieController.Get((movie, err) => {
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

router.post("/delete-pelicula",(req,res)=>{
  movieController.Delete(req.body,req.body.titulo);
  res.redirect('/get-peliculas');
});
/*-------------------------------------------------------------*/
/*---------------------------THEATER--------------------------------*/

router.get("/agregar-theater", (req, res) => {
  res.render("add_theater", { title: "Agregar Sede"});
});

router.post("/createTheater" ,(req,res)=>{
  theaterController.Create(req.body);
  res.redirect('/get-theater');
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

router.get("/modificar-theater", (req,res)=>{
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

router.post("/updatetheater", (req, res) => {
  console.log(req.body);
    if(!!req.body.Fiscal_name){ 
      console.log(req.body.Fiscal_name);
      theaterController.Update(req.body,req.body.Fiscal_name)
  };
  res.redirect('/get-theater');
});

router.get('/eliminar-theater', (req,res)=>{
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

router.post("/delete-theater",(req,res)=>{
  theaterController.Delete(req.body,req.body.Fiscal_name);
  res.redirect('/get-theater');
});

/*-----------------------------------Technology_Type------------------------------------*/
router.get("/agregar-technology", (req, res) => {
  res.render("add_technology", { title: "Agregar technology"});
});

router.post("/createtechnology" ,(req,res)=>{
  technologyController.Create(req.body);
  res.redirect('/get-technology');
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

router.get("/modificar-technology", (req,res)=>{
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

router.post("/updatetechnology", (req, res) => {
  console.log(req.body);
    if(!!req.body.Description){ 
      console.log(req.body.Description);
      technologyController.Update(req.body,req.body.Description)
  };
  res.redirect('/get-technology');
});

router.get('/eliminar-technology', (req,res)=>{
  technologyController.Get((technology, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Fallo en obtener Theater"
      });
    else {
      res.render("delete_technology", {technology});
    }
  });
});

router.post("/delete-technology",(req,res)=>{
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