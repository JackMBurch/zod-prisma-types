import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { MYValueSchema } from './MYValueSchema';
import { NestedEnumMYValueWithAggregatesFilterSchema } from './NestedEnumMYValueWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumMYValueFilterSchema } from './NestedEnumMYValueFilterSchema';

export const EnumMYValueWithAggregatesFilterSchema: z.ZodType<Prisma.EnumMYValueWithAggregatesFilter> = z.object({
  equals: z.lazy(() => MYValueSchema).optional(),
  in: z.lazy(() => MYValueSchema).array().optional(),
  notIn: z.lazy(() => MYValueSchema).array().optional(),
  not: z.union([ z.lazy(() => MYValueSchema),z.lazy(() => NestedEnumMYValueWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumMYValueFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumMYValueFilterSchema).optional(),
}).strict()

export default EnumMYValueWithAggregatesFilterSchema