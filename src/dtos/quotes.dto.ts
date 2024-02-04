import { IsString, IsNotEmpty, MaxLength, IsNumber } from 'class-validator';

export class CreateQuoteeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  public name: string;
}

export class UpdateQuoteeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  public password: string;
}

export class CreateQuoteDto {
  @IsNumber()
  public quoteeId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  public quote: string;
}

export class UpdatgeQuoteDto {
  @IsNumber()
  public quoteId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  public newQuote: string;
}

// export class CreateManyQuoteDto {
//   @IsNumber()
//   public quoteeId: number;

//   @IsString()
//   @IsNotEmpty()
//   @MaxLength(64)
//   public quotes: string[];
// }
