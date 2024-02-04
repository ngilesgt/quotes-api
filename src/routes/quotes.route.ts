import { Router } from 'express';
import { QuotesController } from '@controllers/quotes.controller';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { CreateQuoteeDto } from '@/dtos/quotes.dto';

export class QuotesRoute implements Routes {
  public path = '/quotes';
  public router = Router();
  public quotes = new QuotesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.quotes.getQuotees);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateQuoteeDto), this.quotes.createQuotee);
  }
}
