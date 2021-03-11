var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vistoriaRouter = require('./routes/vistoria');
var reservaEquipamentosRouter = require('./routes/reservaEquipamentos');
var usuariosRouter = require('./routes/usuarios');
var reservaSalasRouter = require('./routes/reservaSalas');
var equipamentosRouter = require('./routes/equipamentos');
var laboratoriosInformaticaRouter = require('./routes/laboratoriosInformatica');
var incidentesRouter = require('./routes/incidentes');
var questoesRouter = require('./routes/questoes')

var app = express();

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
app.use('/vistoria', vistoriaRouter);
app.use('/reservaEquipamentos', reservaEquipamentosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/reservaSalas', reservaSalasRouter);
app.use('/equipamentos', equipamentosRouter);
app.use('/laboratoriosinformatica', laboratoriosInformaticaRouter);
app.use('/incidentes', incidentesRouter);
app.use('/questoes', questoesRouter);

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