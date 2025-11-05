class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      case "arqueiro":
        ataque = "usou flecha precisa";
        break;
      case "ladino":
        ataque = "usou golpe furtivo";
        break;
      case "paladino":
        ataque = "usou martelo sagrado";
        break;
      case "bárbaro":
        ataque = "usou machado brutal";
        break;
      default:
        ataque = "usou um ataque desconhecido";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Lista de heróis inspirados em Magic: The Gathering
const herois = [
  new Heroi("Jace", 40, "mago"),         // Mestre das ilusões
  new Heroi("Gideon", 35, "paladino"),   // Defensor sagrado
  new Heroi("Vraska", 95, "ladino"),     // Assassina górgona
  new Heroi("Nissa", 120, "arqueiro"),   // Druida elemental
  new Heroi("Domri", 22, "bárbaro"),     // Selvagem de Ravnica
  new Heroi("Ajani", 60, "guerreiro"),   // Guerreiro leonino
  new Heroi("Liliana", 200, "mago"),     // Necromante sombria
  new Heroi("Teferi", 300, "mago"),      // Cronomante ancestral
  new Heroi("Kaito", 28, "ninja"),       // Espião de Kamigawa
  new Heroi("Narset", 32, "monge"),      // Filósofa iluminada
];

// Executa o ataque de cada herói
herois.forEach((heroi) => heroi.atacar());
