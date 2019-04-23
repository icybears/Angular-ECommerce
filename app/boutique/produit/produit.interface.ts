import { Categorie } from "../categorie/categorie.interface";

export interface Produit
{
  id: number,
  nom: string,
  description: string | null,
  prix: number  | null,
  categorie: Categorie | null
}
