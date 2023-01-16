import { z } from 'zod';
import * as PrismaClient from '@prisma/client';
import { SortOrderSchema } from '../enums';

export const MODELWithUpperCaseAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.MODELWithUpperCaseAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict()