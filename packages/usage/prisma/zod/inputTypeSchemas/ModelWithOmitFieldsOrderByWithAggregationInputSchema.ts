import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { ModelWithOmitFieldsCountOrderByAggregateInputSchema } from './ModelWithOmitFieldsCountOrderByAggregateInputSchema';
import { ModelWithOmitFieldsMaxOrderByAggregateInputSchema } from './ModelWithOmitFieldsMaxOrderByAggregateInputSchema';
import { ModelWithOmitFieldsMinOrderByAggregateInputSchema } from './ModelWithOmitFieldsMinOrderByAggregateInputSchema';

export const ModelWithOmitFieldsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ModelWithOmitFieldsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  string: z.lazy(() => SortOrderSchema).optional(),
  omitField: z.lazy(() => SortOrderSchema).optional(),
  omitRequired: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ModelWithOmitFieldsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ModelWithOmitFieldsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ModelWithOmitFieldsMinOrderByAggregateInputSchema).optional(),
}).strict()

export default ModelWithOmitFieldsOrderByWithAggregationInputSchema