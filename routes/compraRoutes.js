import express from 'express';
import { createCompra, getAllCompras, getCompraById, updateCompra, deleteCompra } from '../controllers/compraController.js';

const router = express.Router();

router.post('/', createCompra);
router.get('/', getAllCompras);
router.get('/:id', getCompraById);
router.put('/:id', updateCompra);
router.delete('/:id', deleteCompra);

export default router;
