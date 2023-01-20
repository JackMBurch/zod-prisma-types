import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const ModelWithOmitFieldsUncheckedUpdateInputSchema: z.ZodType<Omit<Prisma.ModelWithOmitFieldsUncheckedUpdateInput, "omitField" | "omitRequired">> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  string: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  // omitted: omitField: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  // omitted: omitRequired: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict()

export default ModelWithOmitFieldsUncheckedUpdateInputSchema