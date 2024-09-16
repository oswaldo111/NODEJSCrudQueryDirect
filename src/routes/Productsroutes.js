import { Router } from "express";
import { ProductsGet, ProductsCreate, 
         ProductsDelete, ProductsUpdate, ProductstgetId } from "../controllers/productosController.js";

const router = Router();

router.get('/', ProductsGet);
router.post('/create', ProductsCreate);
router.delete('/delete', ProductsDelete);
router.put('/update', ProductsUpdate);
router.get('/search', ProductstgetId);

export default router;