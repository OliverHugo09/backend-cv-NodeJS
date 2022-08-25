import express from "express";

// Controllers imports
import { userController } from '../controllers/user.controllers.js'
import { aboutmeController } from "../controllers/aboutme.controllers.js";
import { mediaController } from "../controllers/media.controllers.js";
import { freetimeController } from "../controllers/freetime.controllers.js";
import { skillController } from "../controllers/skill.controllers.js";
import { experienceController } from "../controllers/experience.controllers.js";
import { contactController } from "../controllers/contact.controllers.js";
import { mainController } from "../controllers/main.controllers.js";

// Token validate
import { validateToken } from "../middlewares/acessToken.middleware.js";

export class Routes {
    /**
     * @param app
     */
    initRoutes(app = express.application) {
        app.get('/', (req, res) => {
            res.send('hola mundo');
        });

        //Usuarios (Listar, Crear, Mostrar, Update, Delete)
        //app.route('/users', userController.find).get([validateToken.validateJWT], userController.find);
        app.route('/users', userController.create).post([validateToken.validateJWT], userController.create);
        app.get('/users', userController.find);
        app.post('/usersname', userController.finduser);
        app.route('/users/:id', userController.findByPk).get([validateToken.validateJWT], userController.findByPk);
        app.route('/users/:id', userController.update).put([validateToken.validateJWT], userController.update);
        app.route('/users/:id', userController.delete).delete([validateToken.validateJWT], userController.delete);

        app.post('/login', userController.login);

        //Aboutme (Listar, Crear, Mostrar, Update, Delete)
        //app.route('/aboutme', aboutmeController.find).get([validateToken.validateJWT], aboutmeController.find);
        app.get('/aboutme', aboutmeController.find);
        app.route('/aboutme', aboutmeController.create).post([validateToken.validateJWT], aboutmeController.create);
        app.route('/aboutme/:id', aboutmeController.findByPk).get([validateToken.validateJWT], aboutmeController.findByPk);
        app.route('/aboutme/:id', aboutmeController.update).put([validateToken.validateJWT], aboutmeController.update);
        app.route('/aboutme/:id', aboutmeController.delete).delete([validateToken.validateJWT], aboutmeController.delete);
        
        //Media (Listar, Crear, Mostrar, Update, Delete)
        //app.route('/media', mediaController.find).get([validateToken.validateJWT], mediaController.find);
        app.get('/media', mediaController.find);
        app.route('/media', mediaController.create).post([validateToken.validateJWT], mediaController.create);
        app.route('/media/:id', mediaController.findByPk).get([validateToken.validateJWT], mediaController.findByPk);
        app.route('/media/:id', mediaController.update).put([validateToken.validateJWT], mediaController.update);
        app.route('/media/:id', mediaController.delete).delete([validateToken.validateJWT], mediaController.delete);

        //Freetime (Listar, Crear, Mostrar, Update, Delete)
        //app.route('/freetime', freetimeController.find).get([validateToken.validateJWT], freetimeController.find);
        app.get('/freetime', freetimeController.find);
        app.route('/freetime', freetimeController.create).post([validateToken.validateJWT], freetimeController.create);
        app.route('/freetime/:id', freetimeController.findByPk).get([validateToken.validateJWT], freetimeController.findByPk);
        app.route('/freetime/:id', freetimeController.update).put([validateToken.validateJWT], freetimeController.update);
        app.route('/freetime/:id', freetimeController.delete).delete([validateToken.validateJWT], freetimeController.delete);

        //Skill (Listar, Crear, Mostrar, Update, Delete)
        //app.route('/skill', skillController.find).get([validateToken.validateJWT], skillController.find);
        app.get('/skill', skillController.find);
        app.route('/skill', skillController.create).post([validateToken.validateJWT], skillController.create);
        app.route('/skill/:id', skillController.findByPk).get([validateToken.validateJWT], skillController.findByPk);
        app.route('/skill/:id', skillController.update).put([validateToken.validateJWT], skillController.update);
        app.route('/skill/:id', skillController.delete).delete([validateToken.validateJWT], skillController.delete);

        //app.get('/skill', skillController.find);

        //Experience (Listar, Crear, Mostrar, Update, Delete)
        //app.route('/experience', experienceController.find).get([validateToken.validateJWT], experienceController.find);
        app.get('/experience', experienceController.find);
        app.route('/experience', experienceController.create).post([validateToken.validateJWT], experienceController.create);
        app.route('/experience/:id', experienceController.findByPk).get([validateToken.validateJWT], experienceController.findByPk);
        app.route('/experience/:id', experienceController.update).put([validateToken.validateJWT], experienceController.update);
        app.route('/experience/:id', experienceController.delete).delete([validateToken.validateJWT], experienceController.delete);

        //Contact (Listar, Crear, Mostrar, Update, Delete)
        //app.route('/contact', contactController.find).get([validateToken.validateJWT], contactController.find);
        app.get('/contact', contactController.find);
        app.route('/contact', contactController.create).post([validateToken.validateJWT], contactController.create);
        app.route('/contact/:id', contactController.findByPk).get([validateToken.validateJWT], contactController.findByPk);
        app.route('/contact/:id', contactController.update).put([validateToken.validateJWT], contactController.update);
        app.route('/contact/:id', contactController.delete).delete([validateToken.validateJWT], contactController.delete);

        //Main (Listar, Crear, Mostrar, Update, Delete)
        app.get('/main', mainController.find);
        app.route('/main', mainController.create).post([validateToken.validateJWT], mainController.create);
        app.route('/main/:id', mainController.findByPk).get([validateToken.validateJWT], mainController.findByPk);
        app.route('/main/:id', mainController.update).put([validateToken.validateJWT], mainController.update);
        app.route('/main/:id', mainController.delete).delete([validateToken.validateJWT], mainController.delete);

    }
}