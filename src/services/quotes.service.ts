import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';
import { Quotee, Quote } from '@interfaces/quotes.interface';
import { CreateQuoteeDto } from '@/dtos/quotes.dto';

@Service()
export class QuotesService {
  public quote = new PrismaClient().quote;
  public quotee = new PrismaClient().quotee;

  public async findAllQuotees(): Promise<Quotee[]> {
    const allUser: Quotee[] = await this.quotee.findMany();
    return allUser;
  }

  public async findAllQuotesByQuotee(id: number): Promise<Quote[]> {
    const allQuotes: Quote[] = await this.quote.findMany({ where: { quoteeId: id } });
    return allQuotes;
  }

  public async createQuotee(quotee: CreateQuoteeDto): Promise<Quotee> {
    const findQuotee: Quotee = await this.quotee.findFirst({ where: { name: quotee.name } });
    if (findQuotee) throw new HttpException(409, `This quotee ${quotee.name} already exists`);

    const createQuoteeData: Quotee = await this.quotee.create({ data: quotee });
    return createQuoteeData;
  }

  //   public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
  //     const findUser: User = await this.user.findUnique({ where: { id: userId } });
  //     if (!findUser) throw new HttpException(409, "User doesn't exist");

  //     const hashedPassword = await hash(userData.password, 10);
  //     const updateUserData = await this.user.update({ where: { id: userId }, data: { ...userData, password: hashedPassword } });
  //     return updateUserData;
  //   }

  //   public async deleteUser(userId: number): Promise<User> {
  //     const findUser: User = await this.user.findUnique({ where: { id: userId } });
  //     if (!findUser) throw new HttpException(409, "User doesn't exist");

  //     const deleteUserData = await this.user.delete({ where: { id: userId } });
  //     return deleteUserData;
  //   }
}
