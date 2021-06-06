const Koa = require('koa');
const app = new Koa();

const Router = require('@koa/router');
const router = new Router();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//const cors = require('koa-cors');
//app.use(cors());

const config = require('./config.js');
const routes = require('./scripts/routes.js');

/**
 * Метод get для корневого элемента "/". Вызывается routes.get_main.
 * @function routes.get_main
 */
router.get("/", routes.get_main);

router.get("/doc", routes.get_docJournal);

//router.get("/dic", routes.get_dicJournal);

router.get("/dicConstuctor", routes.get_dicConstuctor);
router.get('/dicConstuctor/:id', routes.get_dicConstuctor_id);

//router.post("/api", routes.post);

//router.delete("/api", routes.delete);

//router.get("/migrateDB", routes.migrateDB); 

//router.get("/visualization", routes.visualization);

app.use(router.routes())

app.listen(config.main_port);