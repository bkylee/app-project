import express from "express";
const router = express.Router();
import matchingController from ('../controllers/matchingController');
import { isAuthenticated } from ('../middleware/auth');

router.post('/find-matches', isAuthenticated, matchingController.findMatches);

module.exports = router;