const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth_controller");
const userController = require("../controllers/User_controller");
const movieController = require("../controllers/Movie_controller");

router.get("/", (req, res) => {
  res.render("home", { title: "home" });
});

router.get("/administrar", (req,res) => {
  res.render("administrar", { title: (req,res)});
});

/*----------------------PELICULAS------------------------------*/
router.get("/agregar-pelicula", (req, res) => {
  res.render("add_movie", { title: "Agregar Pelicula"});
});

router.post("/createMovie" ,(req,res)=>{
  movieController.CreateMovie(req.body);
  res.redirect('/get-peliculas');
});

router.get("/get-peliculas", (req,res)=>{
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

router.get("/modificar-pelicula", (req,res)=>{
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
      movieController.UpdateMovie(req.body,req.body.TITLE)
  };
  res.redirect('/get-peliculas');
});

router.get('/eliminar-pelicula', (req,res)=>{
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

router.post("/delete-pelicula",(req,res)=>{
  movieController.DeleteMovie(req.body,req.body.titulo);
  res.redirect('/get-peliculas');
});
/*-------------------------------------------------------------*/
/*---------------------------THEATER--------------------------------*/

router.get("signin", (req, res) => {
  res.render("auth/signin", { title: "Iniciar Sesion" });
});
router.post("signin", authController.signin);
router.get("signup", (req, res) => {
  res.render("auth/signup", { title: "Registrarse" });
});
router.post("signup", userController.signup, authController.signin);

module.exports = router;