const phrases = [
    ['Ganhar uma guerra é tão desastroso quanto perdê-la.', 'Agatha Christie'],
    ['O homem que não tem imaginação, não tem asas.', 'Mohammad Ali'],
    ['Cultive todas as pessoas, as certas vão brotar.', 'Aluísio de Paula'],
    ['Você deve guardar um dragão dentro de si. Quando precisar, você deixa o dragão sair.', 'Anderson Silva'],
    ['Enquanto as outas meninas queriam ser bailarinas, eu queria ser um vampiro.', 'Angelina Jolie'],
    ['O essencial é invisível aos olhos.', 'Antoine de Saint-Exupéry'],
    ['O carinho, como o jogo e a comida, exige certa dosagem.', 'Anton Makarenko'],
    ['Não viva para que sua presença seja notada, mas para que sua falta seja sentida.', 'Bob Marley'],
    ['A música pode mudar o mundo porque pode mudar as pessoas.', 'Bono Vox'],
    ['O que somos é consequência do que pensamos.', 'Buda'],
    ['Encontre o que você ama e deixe que isso te mate.', 'Charles Bukowski'],
    ['Cada um sabe a dor e a delícia de ser o que é.', 'Caetano Veloso'],
    ['Não sei aonde vou, mas já estou no caminho.', 'Carl Sandburg'],
    ['Na vida sempre fazemos escolhas. Ainda que escolhemos não escolher.', 'Carmen Miranda'],
    ['As pessoas têm medo das mudanças. Eu tenho medo que as coisas nunca mudem.', 'Chico Buarque'],
    ['Eu tenho uma alma que é feita de sonhos.', 'Chorão'],
    ['Você nunca vai chegar ao seu destino se você parar e atirar pedras em cada cão que late.', 'Winston Churchill'],
    ['Uma casa sem livros é um corpo sem alma.', 'Cícero'],
    ['Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.', 'Clarice Lispector'],
    ['A felicidade está por dentro, mas não vai sair no Raio X. Você provoca os próprios sentimentos. O que você faz pra ser feliz?', 'Clarice Falcão'],
    ['O mais corajoso dos atos ainda é pensar com a própria cabeça.', 'Coco Chanel'],
    ['Eu gosto do impossível porque lá a concorrência é menor.', 'Walt Disney'],
    ['Todos estamos matriculados na escola da vida, onde o mestre é o tempo.', 'Cora Coralina'],
    ['Feliz aquele que transfere o que sabe e aprende o que ensina.', 'Cora Coralina'],
    ['Pavão que não tem rabo paga pau pra espanador.', 'Criolo'],
    ['Ter problemas na vida é inevitável. Ser derrotado por eles é opcional.', 'Roger Crowford'],
    ['Minha religião é simples. Minha religião é a bondade.', 'Dalai Lama'],
    ['Estritamente falando, há apenas um dever: o de ser feliz.', 'Denis Diderot'],
    ['Acho que a coisa a se fazer é curtir o passeio, enquanto você está nele.', 'Johnny Depp'],
    ['Sente-se sufocado aquele sem um objetivo de vida.', 'Fiódor Dostoiévski'],
    ['O bom humor nos salva das mãos do doutor.', 'Dráuzio Varella'],
    ['A única coisa que sabemos sobre o futuro é que ele será diferente.', 'Peter Drucker'],
    ['Espíritos grandiosos sempre encontraram oposição violenta de mentes medíocres.', 'Albert Einstein'],
    ['Criatividade é a inteligência se divertindo.', 'Albert Einstein'],
    ['Beleza é estar confortável em sua própria pele. É conhecer e aceitar quem você é.', 'Ellen DeGeneres'],
    ['Você é o único representante do seu sonho na face da Terra. Se isso não fizer você correr, chapa, eu não sei o que vai.', 'Emicida'],
    ['Prefiro conviver com um ateu honesto e humanista a conviver com um religioso hipócrita.', 'Padre Fábio de Mello'],
    ['Ser feliz sem motivo é a mais autêntica forma de felicidade.', 'Carlos Drummond de Andrade'],
    ['Você pode tudo se tiver entusiasmo.', 'Henry Ford'],
    ['A mente é como um pára-quedas: só funciona aberta.', 'Frank Zappa'],
    ['Pés, para que os quero, se tenho asas para voar?', 'Frida Kahlo'],
    ['Seja a mudança que você quer ver no mundo.', 'Mahatma Gandhi'],
    ['Todo mundo tem talento, é só uma questão de se mexer até descobrir qual é.', 'George Lucas'],
    ['Não abandone suas três grandes e inabaláveis amigas: a intuição, a inocência e a fé.', 'George Gurdjieff'],
    ['Se as mulheres são melhores do que os homens não poderia dizer. Mas posso dizer que certamente não são piores.', 'Golda Meir'],
    ['As pessoas que espalham amor não têm tempo nem disposição para jogar pedras.', 'Irmã Dulce'],
    ['Quem derruba a gente é a gente mesmo.', 'Ivete Sangalo'],
    ['Não acredito em pessoas que se complementam. Acredito em pessoas que se somam.', 'Arnaldo Jabor'],
    ['Você pode destruir o seu hoje se preocupando com o amanhã.', 'Janis Joplin'],
    ['Você aprende mais na falha do que jamais irá aprender no sucesso.', 'Jay Z'],
    ['O principal objetivo na educação é criar pessoas capazes de fazer coisas novas e não simplesmente repetir o que outras gerações fizeram.', 'Jean Piaget'],
    ['Não sou a melhor pessoa do mundo, mas pelo menos não finjo ser quem não sou.', 'Jessie J.'],
    ['Não as nossas decisões e nossas habilidade que demonstram quem somos na realidade.', 'J. K. Rowling'],
    ['É bem melhor pensar sem falar, do que falar sem pensar.', 'Jô Soares'],
    ['Cada sonho que você deixa para trás é um pedaço do seu futuro que deixa de existir.', 'Steve Jobs'],
    ['Se meus olhos mostrassem a minha alma, todos, ao me verem sorrir, chorariam comigo.', 'Kurt Cobain'],
    ['Minha saúde mental é perfeita, eu não evito o amor nunca.', 'Leila Diniz'],
    ['É preciso ter dúvidas. Só os estúpidos têm uma confiança absoluta em si mesmos.', 'Orson Welles'],
    ['Repara bem no que não digo.', 'Paulo Leminski'],
    ['A vida é o que acontece enquanto você está ocupado fazendo planos.', 'John Lennon'],
    ['Onde não há lei, não há liberdade.', 'John Locke'],
    ['O que me preocupa não é o grito dos maus. É o silêncio dos bons.', 'Martin Luther King Jr.'],
    ['Não espere por líderes, faça sozinho, pessoa a pessoa.', 'Madre Teresa de Calcutá'],
    ['Quando a caminhada fica dura, só os duros continuam caminhando.', 'Mano Brown'],
    ['Dizem que virei sensação do dia pra noite. Não foi do dia pra noite. Foram anos de trabalho duro.', 'Margot Robbie'],
    ['A imperfeição é bela, a loucura é genial e é melhor ser absolutamente ridículo que absolutamente chato.', 'Marilyn Monroe'],
    ['A amizade é um amor que nunca morre.', 'Mario Quintana'],
    ['Coragem é a resistência ao medo e não à ausência dele.', 'Mark Twain'],
    ['O ódio tem sido a causa de vários problemas no mundo, mas, até hoje, ele não resolveu nenhum.', 'Maya Angelou'],
    ['O maior presente dos seres humanos é o poder da empatia.', 'Maryl Streep'],
    ['A educação é a arma mais poderosa para mudar o mundo.', 'Nelson Mandela'],
    ['Sem a música, a vida seria um erro.', 'Friedrich Nietzsche'],
    ['A maior aventura que você pode viver é viver a vida dos seus sonhos.', 'Oprah Winfrey'],
    ['Certas criaturas têm a mania de dar bons conselhos, precisando tanto deles para si. É o que chamo de cúmulo da ignorância.', 'Oscar Wilde'],
    ['Seja você mesmo. Todas as outras personalidades já têm dono.', 'Oscar Wilde'],
    ['Não há saber mais ou saber menos: há saberes diferentes.', 'Paulo Freire'],
    ['O segredo da vida é cair sete vezes e levantar-se oito.', 'Paulo Coelho'],
    ['Computadores são inúteis. Eles só podem te dar respostas.', 'Pablo Picasso'],
    ['Algumas coisas não precisam fazer sentido, basta valer a pena!, Renato Russo'],
    ['Nunca deixe que lhe digam que não vale a pena acreditar no sonho que se tem.', 'Renato Russo'],
    ['Imaginação é quando a inteligência se diverte.', 'Rita Lee'],
    ['A medida do amor é amar sem medida.', 'Santo Agostinho'],
    ['De que adianta falar de motivos? Às vezes, basta um só. Às vezes, nem juntando todos.', 'José Saramago'],
    ['Qualquer sonho pode se tornar realidade se você tiver disciplina e trabalhar duro.', 'Serena Williams'],
    ['Todo mundo é capaz de dominar uma dor, exceto quem a sente.', 'William Shakespeare'],
    ['Sou uma pessoa de sorte. Não levei a vida, a vida que me levou.', 'Silvio Santos'],
    ['Ninguém nasce mulher: torna-se mulher.', 'Simone de Beauvoir'],
    ['Para cada noite escura, há um dia brilhante.', 'Tupac Shakur'],
    ['Uma jornada de mil milhas começa com um simples passo.', 'Lao Tzu'],
    ['Amar é querer estar perto, se longe; e mais perto, se perto.', 'Vinicius de Moraes']
]