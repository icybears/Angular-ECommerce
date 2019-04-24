import { Categorie } from "../categorie/categorie.interface";
import { Cooperative } from "../cooperative/cooperative.interface";

export interface Produit
{
  id: number,
  nom: string,
  description: string | null,
  prix: number  | null,
  categorie: Categorie | null,
  cooperative: Cooperative | null
}
