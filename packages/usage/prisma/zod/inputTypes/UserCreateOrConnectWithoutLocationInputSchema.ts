import { z } from 'zod';
import * as PrismaClient from '@prisma/client';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutLocationInputSchema } from './UserCreateWithoutLocationInputSchema';
import { UserUncheckedCreateWithoutLocationInputSchema } from './UserUncheckedCreateWithoutLocationInputSchema';

export const UserCreateOrConnectWithoutLocationInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutLocationInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutLocationInputSchema),z.lazy(() => UserUncheckedCreateWithoutLocationInputSchema) ]),
}).strict()