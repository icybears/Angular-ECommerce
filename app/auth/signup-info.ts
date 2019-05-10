export class SignUpInfo {
    username: string;
    email: string;
    nom: string;
    prenom: string;
    adresse: string;
    telephone: string;
    role: string[];
    password: string;

    constructor(username: string, nom: string,
      prenom: string,adresse:string, telephone:string,
      email: string, password: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.telephone = telephone;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
