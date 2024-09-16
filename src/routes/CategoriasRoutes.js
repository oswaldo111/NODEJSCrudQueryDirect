import { Router } from "express";
import { CategoriaGetAll, CategoriaCreate,
         CategoriaGetById} from "../controllers/categoriaController.js";

const router = Router();

router.get('/categorias', CategoriaGetAll);
router.post('/categorias/create', CategoriaCreate);
router.get('/categorias/:id', CategoriaGetById);
export default router;