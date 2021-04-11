var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var materiaisRouter = require('./routes/materiais');
var cursosRouter = require('./routes/cursos');
var disciplinasRouter = require('./routes/disciplinas');
var entregasRouter = require('./routes/entregas');
var vistoriasRouter = require('./routes/vistorias');
var reservasEquipamentoRouter = require('./routes/reservasEquipamento');
var usuariosRouter = require('./routes/usuarios');
var professoresRouter = require ('./routes/professores');
var coordenadoresRouter = require ('./routes/coordenadores')
var reservaSalasRouter = require('./routes/reservasSala');
var equipamentosRouter = require('./routes/equipamentos');
var laboratoriosInformaticaRouter = require('./routes/laboratoriosInformatica');
var incidentesRouter = require('./routes/incidentes');
var questoesRouter = require('./routes/questoes');
var salasRouter = require('./routes/salas');
var salasEspeciaisRouter = require('./routes/salasEspeciais');
var softwaresRouter = require('./routes/softwares');
var tiposEquipamentoRouter = require('./routes/tiposEquipamento');
var materiaisRouter = require('./routes/materiais');

var app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/materiais', materiaisRouter);
app.use('/cursos', cursosRouter);
app.use('/disciplinas', disciplinasRouter);
app.use('/entregas', entregasRouter);
app.use('/vistorias', vistoriasRouter);
app.use('/reservasequipamento', reservasEquipamentoRouter);
app.use('/usuarios', usuariosRouter);
app.use('/professores', professoresRouter);
app.use('/coordenadores', coordenadoresRouter);
app.use('/reservassala', reservaSalasRouter);
app.use('/equipamentos', equipamentosRouter);
app.use('/laboratoriosinformatica', laboratoriosInformaticaRouter);
app.use('/incidentes', incidentesRouter);
app.use('/questoes', questoesRouter);
app.use('/salas',salasRouter);
app.use('/salasEspeciais', salasEspeciaisRouter);
app.use('/softwares', softwaresRouter);
app.use('/tiposequipamento', tiposEquipamentoRouter);
app.use('/materiais', materiaisRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;