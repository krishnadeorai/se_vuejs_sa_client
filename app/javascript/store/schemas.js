import { schema } from 'normalizr'


export const productsSchema = new schema.Array(productSchema)
