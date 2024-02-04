import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { QuotesService } from '@services/quotes.service';
import { Quotee } from '@/interfaces/quotes.interface';

export class QuotesController {
  public user = Container.get(QuotesService);

  public getQuotees = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllQuoteesData: Quotee[] = await this.user.findAllQuotees();

      res.status(200).json({ data: findAllQuoteesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  //   public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //     try {
  //       const userId = Number(req.params.id);
  //       const findOneUserData: User = await this.user.findUserById(userId);

  //       res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  public createQuotee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const quoteeData: Quotee = req.body;
      const createQuoteeData: Quotee = await this.user.createQuotee(quoteeData);

      res.status(201).json({ data: createQuoteeData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  //   public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //     try {
  //       const userId = Number(req.params.id);
  //       const userData: User = req.body;
  //       const updateUserData: User = await this.user.updateUser(userId, userData);

  //       res.status(200).json({ data: updateUserData, message: 'updated' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //     try {
  //       const userId = Number(req.params.id);
  //       const deleteUserData: User = await this.user.deleteUser(userId);

  //       res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
}
