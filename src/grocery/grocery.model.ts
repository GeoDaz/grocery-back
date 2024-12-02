import { Prisma } from "@prisma/client";

export class Grocery implements Prisma.GroceryCreateInput {
  id: string;
  name: string;
  description: string;
  category: string;
}
