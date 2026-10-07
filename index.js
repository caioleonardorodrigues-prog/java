const nome = "Caio Leonardo";
const idade = 15;
const cidade = "Londrina";
const bairro = "Planalto"
const hobbie = "jogar bola e jogar jogos online/multijogador"
const frase = `Meu nome é ${nome} tenho ${idade} anos de idade e moro em ${cidade}`;


console.log (frase);


const idadeEmDias = idade * 365;
console.log ("Minha idade em dias é: " + idadeEmDias )

const idadeEmMeses = idade * 12;
console.log ("Minha idade em meses é: " + idadeEmMeses )


const frase2 = `Meu nome é ${nome} tenho ${idade} anos de idade, e em dias é igual à ${idadeEmDias} dias, e em meses é equivalente à ${idadeEmMeses} meses, eu moro em ${cidade},no bairro Jardim ${bairro} e acredito que meus hobbies são ${hobbie}`;


console.log (frase2);


const precoUnit = 67.67
const qtde = 6.7
const subtotal = precoUnit * qtde;
const valorMinimoPraTerDesconto = 100;
const temDesconto = subtotal > valorMinimoPraTerDesconto;


console.log(temDesconto);


const cidadeCliente = "Londrina";
const cidadeLoja = "Londrina";
const freteGratis = temDesconto && (cidadeCliente === cidadeLoja);

const resultado = `Subtotal: R$ ${subtotal}
Tem desconto: ${temDesconto}
Frete grátis: ${freteGratis}`


console.log(resultado);