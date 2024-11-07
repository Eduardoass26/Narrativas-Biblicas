const questions = [
    {
        question: "Qual era a condição da Terra antes de Deus começar a criação?",
        correctAnswer: "Sem forma e vazia, com escuridão sobre o abismo",
        wrongAnswers: [
            "Com florestas e rios abundantes",
            "Com cidades e montanhas",
            "Com animais e seres humanos"
        ]
    },
    {
        question: "O que Deus criou no sexto dia e qual foi o propósito dado a essas criaturas?",
        correctAnswer: "O homem e a mulher, para terem domínio sobre todas as criaturas",
        wrongAnswers: [
            "As plantas e os animais, para dominarem a Terra",
            "A luz e as trevas, para separarem o dia da noite",
            "As águas e o céu, para encherem o universo"
        ]
    },
    {
        question: "Qual era a única regra que Deus deu a Adão e Eva no Jardim do Éden?",
        correctAnswer: "Não comer do fruto da árvore do conhecimento do bem e do mal",
        wrongAnswers: [
            "Cuidar de todas as plantas do jardim",
            "Nunca saírem do Jardim do Éden",
            "Não conversarem com a serpente"
        ]
    },
    {
        question: "Como a serpente influenciou Eva, e qual foi a consequência dessa influência para Adão e Eva?",
        correctAnswer: "A serpente convenceu Eva a comer o fruto proibido, e eles foram expulsos do Éden",
        wrongAnswers: [
            "A serpente ensinou Eva a cuidar do jardim, e ambos foram abençoados",
            "A serpente convenceu Eva a deixar o jardim, e ambos foram poupados",
            "A serpente instruiu Eva sobre o bem e o mal, e ambos ganharam mais sabedoria"
        ]
    },
    {
        question: "Quais mudanças na vida de Adão e Eva ocorreram após a desobediência e a expulsão do Éden?",
        correctAnswer: "Passaram a viver no mundo com o conhecimento do bem e do mal e enfrentando dificuldades",
        wrongAnswers: [
            "Ganhavam mais bênçãos e prosperidade no Éden",
            "Receberam o poder de viver para sempre no paraíso",
            "Ficaram com menos responsabilidades e obrigações"
        ]
    },
    {
        question: "Qual era a posição de Lúcifer no céu antes de sua rebelião?",
        correctAnswer: "Ocupava uma posição de grande poder e era o anjo de maior destaque e beleza",
        wrongAnswers: [
            "Era o anjo mais humilde e serviçal",
            "Era apenas um mensageiro de Deus",
            "Era o líder de todos os anjos caídos"
        ]
    },
    {
        question: "O que levou Lúcifer a se rebelar contra Deus?",
        correctAnswer: "A ambição e o orgulho, desejando ser igual a Deus",
        wrongAnswers: [
            "O desejo de ajudar a humanidade",
            "A falta de reconhecimento de outros anjos",
            "A ordem de destruir a terra"
        ]
    },
    {
        question: "Quantos anjos seguiram Lúcifer em sua rebelião contra Deus?",
        correctAnswer: "Um terço dos anjos",
        wrongAnswers: [
            "Todos os anjos",
            "Metade dos anjos",
            "Apenas alguns poucos anjos"
        ]
    },
    {
        question: "O que aconteceu com Lúcifer e seus seguidores após a rebelião?",
        correctAnswer: "Foram expulsos do céu",
        wrongAnswers: [
            "Foram promovidos a uma posição mais alta",
            "Receberam perdão e permaneceram no céu",
            "Foram enviados para outra galáxia"
        ]
    },
    {
        question: "Qual é o papel de Satanás após sua queda, de acordo com a história?",
        correctAnswer: "Tentar desviar a humanidade do caminho de Deus",
        wrongAnswers: [
            "Ser o guardião dos anjos no céu",
            "Ajudar a humanidade a encontrar a salvação",
            "Proteger o Éden de invasores"
        ]
    },
    {
        question: "Quais eram as ocupações de Caim e Abel?",
        correctAnswer: "Caim era lavrador e Abel, pastor de ovelhas",
        wrongAnswers: [
            "Caim era pastor de ovelhas e Abel, lavrador",
            "Ambos eram pastores de ovelhas",
            "Ambos eram lavradores"
        ]
    },
    {
        question: "O que cada um ofereceu a Deus como sacrifício?",
        correctAnswer: "Caim ofereceu frutos da colheita, e Abel, os melhores cordeiros",
        wrongAnswers: [
            "Caim ofereceu cordeiros, e Abel, frutos da colheita",
            "Ambos ofereceram os frutos da colheita",
            "Ambos ofereceram os melhores cordeiros"
        ]
    },
    {
        question: "Por que Caim ficou furioso após o sacrifício?",
        correctAnswer: "Porque Deus aceitou o sacrifício de Abel, mas rejeitou o de Caim",
        wrongAnswers: [
            "Porque Abel recebeu mais bênçãos",
            "Porque ele queria o rebanho de Abel",
            "Porque Deus ignorou ambos os sacrifícios"
        ]
    },
    {
        question: "O que Caim fez após Deus o advertir sobre a ira e a inveja?",
        correctAnswer: "Ele ignorou a advertência de Deus e matou Abel no campo",
        wrongAnswers: [
            "Ele pediu perdão a Deus",
            "Ele deixou o campo e foi viver em paz",
            "Ele aceitou a advertência e reconciliou-se com Abel"
        ]
    },
    {
        question: "Qual foi a consequência que Caim enfrentou por ter matado Abel?",
        correctAnswer: "Deus o amaldiçoou, tornando-o um andarilho e fugitivo",
        wrongAnswers: [
            "Ele se tornou o líder do povo",
            "Ele recebeu o perdão de Deus",
            "Ele foi enviado para viver em outra terra em paz"
        ]
    },
    {
        question: "Por que Deus decidiu destruir a humanidade com um dilúvio?",
        correctAnswer: "Porque a maldade e a violência haviam se espalhado por toda a terra",
        wrongAnswers: [
            "Porque a humanidade parou de cultivar a terra",
            "Porque Noé pediu a Deus que punisse a humanidade",
            "Porque os animais estavam desaparecendo"
        ]
    },
    {
        question: "Por que Noé foi escolhido para salvar a humanidade?",
        correctAnswer: "Porque ele era um homem justo e íntegro",
        wrongAnswers: [
            "Porque ele era o mais jovem da sua família",
            "Porque ele era muito forte",
            "Porque ele era o rei de sua terra"
        ]
    },
    {
        question: "O que Deus instruiu Noé a fazer para se preparar para o dilúvio?",
        correctAnswer: "Construir uma arca de madeira para abrigar sua família e um casal de cada espécie de animal",
        wrongAnswers: [
            "Construir uma torre para escapar das águas",
            "Plantar árvores para impedir o dilúvio",
            "Cavar buracos para proteger os animais"
        ]
    },
    {
        question: "Quanto tempo durou a chuva que cobriu toda a terra?",
        correctAnswer: "40 dias e 40 noites",
        wrongAnswers: [
            "7 dias e 7 noites",
            "70 dias e 70 noites",
            "100 dias e 100 noites"
        ]
    },
    {
        question: "Qual foi o sinal da aliança de Deus com Noé após o dilúvio?",
        correctAnswer: "O arco-íris, prometendo nunca mais destruir a terra com um dilúvio",
        wrongAnswers: [
            "Um trovão, para lembrar o poder de Deus",
            "Uma estrela brilhante no céu",
            "Um terremoto, simbolizando a força da terra"
        ]
    },
    {
        question: "Por que os descendentes de Noé queriam construir uma torre tão alta?",
        correctAnswer: "Para se tornarem famosos e evitar que se dispersassem pela terra",
        wrongAnswers: [
            "Para alcançar o sol e a lua",
            "Para construir uma fortaleza para defesa",
            "Para servir como templo para adoração"
        ]
    },
    {
        question: "Em que região os descendentes de Noé decidiram construir a cidade e a torre?",
        correctAnswer: "Sinar",
        wrongAnswers: [
            "Ararat",
            "Betel",
            "Jerusalém"
        ]
    },
    {
        question: "O que Deus fez para impedir a construção da Torre de Babel?",
        correctAnswer: "Confundiu a língua deles, para que não mais se entendessem",
        wrongAnswers: [
            "Enviou uma grande tempestade para destruir a torre",
            "Fez os homens esquecerem o projeto",
            "Colocou um muro invisível ao redor da torre"
        ]
    },
    {
        question: "Qual foi a consequência da confusão de línguas para os homens?",
        correctAnswer: "Eles se dispersaram por toda a terra, cada grupo falando uma língua diferente",
        wrongAnswers: [
            "Eles abandonaram a terra e voltaram para o Éden",
            "Eles se uniram ainda mais para reconstruir a torre",
            "Eles decidiram construir uma torre em outra região"
        ]
    },
    {
        question: "Qual era a intenção de Deus ao confundir a língua dos homens?",
        correctAnswer: "Impedir que continuassem o projeto da torre e demonstrar sua soberania",
        wrongAnswers: [
            "Ensinar a humanidade a construir torres mais fortes",
            "Incentivar a construção de mais cidades",
            "Dar um novo objetivo aos descendentes de Noé"
        ]
    },
    {
        question: "Qual era o nome original de Abraão?",
        correctAnswer: "Abrão",
        wrongAnswers: [
            "Esaú",
            "Isaías",
            "Jacó"
        ]
    },
    {
        question: "Por que Deus chamou Abraão para sair de sua terra natal?",
        correctAnswer: "Para seguir para uma terra que Ele lhe mostraria e torná-lo uma grande nação",
        wrongAnswers: [
            "Para encontrar um novo templo",
            "Para liderar um exército",
            "Para construir uma torre"
        ]
    },
    {
        question: "Qual foi o novo nome que Deus deu a Abrão e seu significado?",
        correctAnswer: "Abraão, que significa 'pai de muitas nações'",
        wrongAnswers: [
            "Israel, que significa 'príncipe de Deus'",
            "Davi, que significa 'amado'",
            "Moisés, que significa 'salvo das águas'"
        ]
    },
    {
        question: "Como Deus testou a fé de Abraão?",
        correctAnswer: "Pediu que ele sacrificasse seu filho Isaque",
        wrongAnswers: [
            "Pediu que ele construísse uma arca",
            "Mandou que ele destruísse uma cidade",
            "Ordenou que ele liderasse uma guerra"
        ]
    },
    {
        question: "Quem foi o filho de Abraão e Sara, fruto da promessa de Deus?",
        correctAnswer: "Isaque",
        wrongAnswers: [
            "Jacó",
            "José",
            "Esaú"
        ]
    },
    {
        question: "Por que Deus decidiu destruir Sodoma e Gomorra?",
        correctAnswer: "Devido à grande maldade e pecado de seus habitantes",
        wrongAnswers: [
            "Porque as cidades eram muito ricas",
            "Porque Ló pediu sua destruição",
            "Porque as cidades estavam em guerra"
        ]
    },
    {
        question: "Qual foi a condição que Deus deu para poupar Sodoma?",
        correctAnswer: "Se houvesse pelo menos dez justos na cidade",
        wrongAnswers: [
            "Se Abraão oferecesse um sacrifício",
            "Se os anjos pudessem derrotar os homens da cidade",
            "Se Ló deixasse a cidade imediatamente"
        ]
    },
    {
        question: "O que aconteceu com a esposa de Ló quando ela desobedeceu à ordem dos anjos?",
        correctAnswer: "Ela foi transformada em uma estátua de sal",
        wrongAnswers: [
            "Ela foi levada por anjos",
            "Ela foi atingida por um relâmpago",
            "Ela se perdeu no deserto"
        ]
    },
    {
        question: "Como os anjos protegeram Ló dos homens de Sodoma?",
        correctAnswer: "Eles cegaram os agressores",
        wrongAnswers: [
            "Eles abriram um túnel secreto",
            "Eles usaram fogo para afastá-los",
            "Eles chamaram um exército de anjos"
        ]
    },
    {
        question: "Para onde Ló e suas filhas escaparam após a destruição de Sodoma e Gomorra?",
        correctAnswer: "Para uma pequena cidade chamada Zoar",
        wrongAnswers: [
            "Para Jerusalém",
            "Para a terra de Canaã",
            "Para a cidade de Betel"
        ]
    },
    {
        question: "Por que os irmãos de José o venderam como escravo?",
        correctAnswer: "Devido à inveja e ódio que sentiam por ele",
        wrongAnswers: [
            "Porque ele desobedeceu a Jacó",
            "Porque ele queria ir embora para o Egito",
            "Porque Potifar o acusou de roubo"
        ]
    },
    {
        question: "Quem comprou José como escravo no Egito?",
        correctAnswer: "Potifar, um oficial do faraó",
        wrongAnswers: [
            "Um mercador de escravos",
            "O faraó",
            "Um general egípcio"
        ]
    },
    {
        question: "O que aconteceu com José na prisão?",
        correctAnswer: "Ele interpretou os sonhos de outros presos",
        wrongAnswers: [
            "Ele fez amizade com o carcereiro",
            "Ele escapou pela janela",
            "Ele se tornou o líder dos prisioneiros"
        ]
    },
    {
        question: "Qual foi o sonho que o faraó teve que José interpretou?",
        correctAnswer: "Uma grande fome que assolaria o Egito",
        wrongAnswers: [
            "A queda do Egito",
            "A ascensão de um novo faraó",
            "Um banquete com seus inimigos"
        ]
    },
    {
        question: "Como José testou a mudança de coração de seus irmãos?",
        correctAnswer: "Fingindo ser um estrangeiro",
        wrongAnswers: [
            "Mandando-os embora sem comida",
            "Colocando-os na prisão",
            "Oferecendo-lhes riquezas em troca de perdão"
        ]
    },
    {
        question: "Por que José foi levado diante do faraó?",
        correctAnswer: "Porque ele podia interpretar os sonhos que ninguém conseguia",
        wrongAnswers: [
            "Porque ele era um prisioneiro famoso",
            "Porque ele conhecia os magos do faraó",
            "Porque o faraó o viu em um sonho"
        ]
    },
    {
        question: "O que José previu a partir dos sonhos do faraó?",
        correctAnswer: "Sete anos de fartura seguidos por sete anos de fome",
        wrongAnswers: [
            "Uma guerra que assolaria o Egito",
            "A queda do faraó",
            "Uma praga de insetos"
        ]
    },
    {
        question: "Qual foi o primeiro sonho que o faraó teve?",
        correctAnswer: "Sete vacas gordas seguidas de sete vacas magras",
        wrongAnswers: [
            "Sete espigas de trigo cheias seguidas de sete espigas murchas",
            "Sete ovelhas brancas seguidas de sete ovelhas negras",
            "Sete estrelas brilhantes seguidas de sete estrelas apagadas"
        ]
    },
    {
        question: "Qual conselho José deu ao faraó após interpretar os sonhos?",
        correctAnswer: "Guardar alimentos durante os anos de abundância",
        wrongAnswers: [
            "Construir mais celeiros",
            "Aumentar os impostos",
            "Chamar os magos para ajudar"
        ]
    },
    {
        question: "Qual foi a consequência da interpretação dos sonhos de José?",
        correctAnswer: "Ele foi nomeado governador do Egito",
        wrongAnswers: [
            "Ele foi libertado da prisão",
            "Ele se tornou o conselheiro do faraó",
            "Ele recebeu riquezas em ouro"
        ]
    },
    {
        question: "Qual era a principal acusação que Satanás fez contra Jó?",
        correctAnswer: "Que ele só servia a Deus por interesse próprio",
        wrongAnswers: [
            "Que ele não era um homem justo",
            "Que ele não confiava em Deus",
            "Que ele adorava ídolos"
        ]
    },
    {
        question: "O que aconteceu com os bens e a família de Jó?",
        correctAnswer: "Satanás tirou tudo o que ele tinha",
        wrongAnswers: [
            "Ele decidiu dar tudo aos pobres",
            "Ele vendeu suas posses",
            "Ele foi ajudado por seus amigos"
        ]
    },
    {
        question: "Como Jó reagiu diante de suas perdas e sofrimento?",
        correctAnswer: "Ele manteve sua fé em Deus e não o amaldiçoou",
        wrongAnswers: [
            "Ele se revoltou contra Deus",
            "Ele pediu a morte",
            "Ele abandonou sua fé"
        ]
    },
    {
        question: "O que Deus revelou a Jó em meio à tempestade?",
        correctAnswer: "Que as razões do sofrimento vão além da compreensão humana",
        wrongAnswers: [
            "Que Jó deveria se arrepender de seus pecados",
            "Que Ele estava indiferente ao sofrimento de Jó",
            "Que Jó tinha que aceitar seu destino"
        ]
    },
    {
        question: "Qual foi a recompensa final de Jó após seu sofrimento?",
        correctAnswer: "Deus restaurou sua vida, dando-lhe o dobro de suas posses e mais filhos",
        wrongAnswers: [
            "Ele foi levado ao céu",
            "Ele se tornou um profeta",
            "Ele recebeu uma nova casa"
        ]
    },
    {
        question: "Como Moisés foi salvo quando era bebê?",
        correctAnswer: "Sua mãe o colocou em uma cesta e o deixou flutuar no rio Nilo",
        wrongAnswers: [
            "Ele foi escondido por sua mãe em uma caverna",
            "Ele foi levado para o deserto por sua mãe",
            "Ele foi adotado por uma mulher israelita"
        ]
    },
    {
        question: "O que Moisés fez ao descobrir suas origens israelitas?",
        correctAnswer: "Ele se revoltou contra a opressão egípcia e matou um egípcio",
        wrongAnswers: [
            "Ele fugiu imediatamente para o deserto",
            "Ele procurou vingança contra o faraó",
            "Ele se alistou no exército egípcio"
        ]
    },
    {
        question: "Onde Deus se revelou a Moisés para chamá-lo à missão de libertar os israelitas?",
        correctAnswer: "No monte Horebe, através de uma sarça ardente",
        wrongAnswers: [
            "No monte Sinai, durante uma tempestade",
            "No rio Nilo, em uma visão",
            "Em uma caverna no deserto"
        ]
    },
    {
        question: "O que Moisés fez para libertar o povo de Israel?",
        correctAnswer: "Ele enfrentou o faraó e pediu a libertação dos israelitas",
        wrongAnswers: [
            "Ele invadiu o palácio do faraó com um exército",
            "Ele convenceu o faraó a libertar os israelitas em troca de riquezas",
            "Ele partiu com seu povo sem a permissão do faraó"
        ]
    },
    {
        question: "Qual foi a aliança que Deus fez com o povo de Israel no deserto?",
        correctAnswer: "Deus deu a Lei e os Dez Mandamentos e instruiu a construção do Tabernáculo",
        wrongAnswers: [
            "Deus deu riquezas ao povo e prometeu prosperidade",
            "Deus pediu que o povo construísse um templo no Egito",
            "Deus fez um pacto com Moisés para que ele governasse Israel"
        ]
    },
    {
        question: "Qual foi a primeira praga que Deus enviou ao Egito?",
        correctAnswer: "Transformou a água do rio Nilo em sangue",
        wrongAnswers: [
            "Mandou gafanhotos para devorar as plantações",
            "Fez trevas cobrirem a terra por três dias",
            "Matou todos os primogênitos egípcios"
        ]
    },
    {
        question: "Como o faraó reagiu após cada praga?",
        correctAnswer: "Ele se arrependia e prometia liberar os israelitas, mas seu coração se endurecia novamente",
        wrongAnswers: [
            "Ele se reconciliava imediatamente com os israelitas",
            "Ele mandava expulsar Moisés e Arão do Egito",
            "Ele ignorava as pragas e se recusava a fazer qualquer mudança"
        ]
    },
    {
        question: "Qual foi a praga que causou a morte de muitos animais no Egito?",
        correctAnswer: "Doença do gado",
        wrongAnswers: [
            "Pedra de granizo",
            "Mosquitos e outros insetos",
            "Rãs que invadiram o país"
        ]
    },
    {
        question: "O que aconteceu durante a praga das trevas?",
        correctAnswer: "Trevas cobriram o Egito por três dias, impedindo as pessoas de realizar suas atividades",
        wrongAnswers: [
            "A terra foi coberta por nuvens de poeira",
            "Uma tempestade de fogo destruiu as cidades",
            "As pessoas ficaram cegas devido à escuridão"
        ]
    },
    {
        question: "Qual foi a praga final que levou o faraó a liberar os israelitas?",
        correctAnswer: "A morte dos primogênitos egípcios",
        wrongAnswers: [
            "A invasão de rãs",
            "A morte do gado egípcio",
            "A queda das plantações devido aos gafanhotos"
        ]
    },
    {
        question: "Quem recebeu as instruções de Deus para construir a Arca da Aliança?",
        correctAnswer: "Moisés",
        wrongAnswers: [
            "Arão",
            "Salomão",
            "Josué"
        ]
    },
    {
        question: "Quais itens estavam dentro da Arca da Aliança?",
        correctAnswer: "As Tábuas da Lei, um vaso de ouro com maná e a vara de Arão",
        wrongAnswers: [
            "A espada de Davi, um pedaço de rocha e um frasco de azeite",
            "O livro de Gênesis, um cálice sagrado e um manto",
            "A coroa de Saul, um espelho e um colar"
        ]
    },
    {
        question: "O que representava o Propiciatório da Arca da Aliança?",
        correctAnswer: "O lugar onde Deus se encontrava com o povo de Israel",
        wrongAnswers: [
            "A proteção dos sacerdotes",
            "A aliança entre Moisés e o faraó",
            "O local de armazenamento de oferendas"
        ]
    },
    {
        question: "O que era a Glória Divina que se manifestava sobre a Arca?",
        correctAnswer: "Uma nuvem que representava a presença de Deus",
        wrongAnswers: [
            "Um fogo que ardia continuamente",
            "Um símbolo de guerra",
            "Uma luz brilhante que iluminava o caminho"
        ]
    },
    {
        question: "O que aconteceu com a Arca da Aliança após a destruição do Templo de Salomão?",
        correctAnswer: "Seu paradeiro se tornou um mistério e não é mencionado na Bíblia",
        wrongAnswers: [
            "Foi levada para o Egito",
            "Foi destruída pelos babilônios",
            "Foi escondida por um grupo de sacerdotes"
        ]
    },
    {
        question: "Qual foi a razão pela qual Deus proibiu Moisés de entrar na Terra Prometida?",
        correctAnswer: "Moisés feriu a rocha em vez de falar com ela como Deus havia ordenado",
        wrongAnswers: [
            "Moisés quebrou as Tábuas da Lei",
            "Moisés desobedeceu aos mandamentos de Deus",
            "Moisés desafiou o faraó novamente"
        ]
    },
    {
        question: "O que Moisés encontrou quando desceu do monte Sinai após receber os Dez Mandamentos?",
        correctAnswer: "O povo adorando um bezerro de ouro",
        wrongAnswers: [
            "O povo celebrando uma vitória",
            "O povo construindo um novo altar",
            "O povo murmurando contra Deus"
        ]
    },
    {
        question: "O que Moisés fez com as Tábuas da Lei quando viu o povo adorando o bezerro de ouro?",
        correctAnswer: "Quebrou as tábuas",
        wrongAnswers: [
            "Escondeu as tábuas",
            "Devolveu as tábuas a Deus",
            "Escreveu novas tábuas"
        ]
    },
    {
        question: "Onde Moisés teve sua última visão da Terra Prometida?",
        correctAnswer: "No monte Nebo",
        wrongAnswers: [
            "No monte Sinai",
            "No monte Horebe",
            "Na planície de Moabe"
        ]
    },
    {
        question: "Como a história de Moisés nos ensina sobre a obediência a Deus?",
        correctAnswer: "Mostra que até líderes dedicados podem cometer erros e que Deus exige obediência",
        wrongAnswers: [
            "Mostra que a desobediência não tem consequências",
            "Mostra que todos os líderes são perfeitos",
            "Mostra que a ira de Deus é sempre imediata"
        ]
    },
    {
        question: "Quem Deus escolheu para liderar o povo de Israel após a morte de Moisés?",
        correctAnswer: "Josué",
        wrongAnswers: [
          "Caleb",
          "Arão",
          "Samuel"
        ]
      },
      {
        question: "Qual foi o primeiro milagre que Josué realizou ao conduzir o povo através do Rio Jordão?",
        correctAnswer: "Abrir as águas do Rio Jordão",
        wrongAnswers: [
          "Fazer as águas secarem completamente",
          "Criar uma ponte sobre o rio",
          "Transformar as águas em sangue"
        ]
      },
      {
        question: "Qual estratégia Deus deu a Josué para conquistar as cidades cananeias?",
        correctAnswer: "Estratégia de guerra baseada na fé",
        wrongAnswers: [
          "Usar armas poderosas",
          "Formar alianças com outros povos",
          "Construir muralhas ao redor das cidades"
        ]
      },
      {
        question: "O que Josué estabeleceu no monte Ebal?",
        correctAnswer: "Um altar para repetir as bênçãos e maldições da Lei de Deus",
        wrongAnswers: [
          "Um templo dedicado a Moisés",
          "Uma tenda de adoração",
          "Um memorial para os guerreiros caídos"
        ]
      },
      {
        question: "Qual é a principal lição que a história de Josué nos ensina?",
        correctAnswer: "A importância da fé e da obediência a Deus",
        wrongAnswers: [
          "Que as guerras são sempre justas",
          "Que devemos confiar apenas em nossas habilidades",
          "Que as promessas de Deus são irrelevantes"
        ]
      },
      {
        question: "Qual cidade o povo de Israel se preparou para conquistar após cruzar o Rio Jordão?",
        correctAnswer: "Jericó",
        wrongAnswers: [
          "Ai",
          "Betel",
          "Gibeá"
        ]
      },
      {
        question: "Quantos dias o povo de Israel marchou ao redor de Jericó antes de conquistar a cidade?",
        correctAnswer: "Sete dias",
        wrongAnswers: [
          "Cinco dias",
          "Dez dias",
          "Quarenta dias"
        ]
      },
      {
        question: "O que os soldados carregavam enquanto marchavam ao redor da cidade?",
        correctAnswer: "A Arca da Aliança",
        wrongAnswers: [
          "Uma bandeira",
          "Um estandarte",
          "Um altar"
        ]
      },
      {
        question: "O que aconteceu no sétimo dia, após marchar ao redor de Jericó sete vezes?",
        correctAnswer: "Os muros da cidade desabaram",
        wrongAnswers: [
          "A cidade foi inundada",
          "Os soldados se renderam",
          "Uma tempestade ocorreu"
        ]
      },
      {
        question: "Qual lição importante a conquista de Jericó ensina sobre a fé?",
        correctAnswer: "A importância da fé e da obediência a Deus",
        wrongAnswers: [
          "Que a força militar é sempre suficiente",
          "Que os planos humanos são melhores que os de Deus",
          "Que devemos duvidar de Deus em tempos difíceis"
        ]
      },
      {
        question: "O que caracterizou a Época dos Juízes em Israel?",
        correctAnswer: "Ciclos de desobediência a Deus e opressão por inimigos",
        wrongAnswers: [
          "Unidade sob um rei forte",
          "Paz e prosperidade constantes",
          "Conquista de novas terras"
        ]
      },
      {
        question: "Quem eram os líderes que Deus levantava para guiar o povo de Israel de volta à obediência?",
        correctAnswer: "Juízes",
        wrongAnswers: [
          "Reis",
          "Profetas",
          "Sacerdotes"
        ]
      },
      {
        question: "Qual era uma das principais razões pelas quais Israel enfrentava opressão durante a Época dos Juízes?",
        correctAnswer: "Idolatria e adoração a outros deuses",
        wrongAnswers: [
          "Conflitos internos entre tribos",
          "Invasões de países vizinhos",
          "Falta de alimentos"
        ]
      },
      {
        question: "Como Deus demonstrou sua misericórdia durante a Época dos Juízes?",
        correctAnswer: "Levantando Juízes para libertar o povo",
        wrongAnswers: [
          "Ignorando as súplicas do povo",
          "Enviando desastres naturais",
          "Estabelecendo leis mais severas"
        ]
      },
      {
        question: "O que a Época dos Juízes nos ensina sobre a relação entre o povo e Deus?",
        correctAnswer: "A importância de buscar a Deus e viver em obediência",
        wrongAnswers: [
          "Que a desobediência não tem consequências",
          "Que Deus só se importa com os líderes",
          "Que os problemas se resolvem sozinhos"
        ]
      },
      {
        question: "Qual era a fonte da força extraordinária de Sansão?",
        correctAnswer: "Seu cabelo, que nunca foi cortado",
        wrongAnswers: [
          "Sua dieta especial",
          "Oração constante",
          "Um anel mágico"
        ]
      },
      {
        question: "Quem seduziu Sansão e o traiu revelando o segredo de sua força?",
        correctAnswer: "Dalila",
        wrongAnswers: [
          "Mical",
          "Delilah",
          "Abigail"
        ]
      },
      {
        question: "Qual foi o resultado da traição de Dalila?",
        correctAnswer: "Sansão foi capturado e cegado pelos filisteus",
        wrongAnswers: [
          "Sansão derrotou os filisteus",
          "Sansão se tornou rei dos filisteus",
          "Dalila foi morta por Sansão"
        ]
      },
      {
        question: "Como Sansão usou sua força final?",
        correctAnswer: "Derrubou as colunas do templo filisteu",
        wrongAnswers: [
          "Fugiu para a liberdade",
          "Destruiu uma cidade inteira",
          "Salvou outros prisioneiros"
        ]
      },
      {
        question: "O que a história de Sansão nos ensina sobre a força e a fragilidade humana?",
        correctAnswer: "Que a fragilidade humana pode levar a erros, mesmo com grandes poderes",
        wrongAnswers: [
          "Que a força física é tudo o que importa",
          "Que devemos evitar qualquer tipo de amor",
          "Que só os fortes merecem ser líderes"
        ]
      },
      {
        question: "Qual era a principal tristeza de Ana no início da história de Samuel?",
        correctAnswer: "Ela era estéril e não podia ter filhos",
        wrongAnswers: [
          "Ela havia perdido seu marido",
          "Ela era ridicularizada por Eli",
          "Ela estava longe de sua família"
        ]
      },
      {
        question: "O que Ana prometeu a Deus se Ele lhe desse um filho?",
        correctAnswer: "Dedicá-lo ao Senhor por toda a sua vida",
        wrongAnswers: [
          "Levá-lo a morar com a família",
          "Fazê-lo sacerdote imediatamente",
          "Deixá-lo em uma cidade distante"
        ]
      },
      {
        question: "Como o sacerdote Eli reagiu ao ver Ana orando no templo?",
        correctAnswer: "Pensou que ela estava embriagada",
        wrongAnswers: [
          "Abençoou imediatamente",
          "Mandou-a embora",
          "Disse que ela não deveria orar"
        ]
      },
      {
        question: "Qual foi a primeira resposta de Samuel quando Deus o chamou?",
        correctAnswer: "Ele pensou que Eli o estava chamando",
        wrongAnswers: [
          "Ele ignorou a voz",
          "Ele saiu correndo",
          "Ele respondeu imediatamente"
        ]
      },
      {
        question: "Qual é uma das principais lições da história de Samuel?",
        correctAnswer: "A importância da oração e da disposição de ouvir a voz de Deus",
        wrongAnswers: [
          "Que o sacerdócio é automático",
          "Que os filhos não devem ser dedicados a Deus",
          "Que a riqueza é mais importante que a fé"
        ]
      },
      {
        question: "Por que Deus rejeitou Saul como rei de Israel?",
        correctAnswer: "Porque ele desobedeceu à ordem de destruir os amalequitas e poupou o rei Agague e o melhor dos rebanhos",
        wrongAnswers: [
          "Porque ele foi derrotado pelos filisteus",
          "Porque ele perseguiu Davi",
          "Porque ele se afastou do povo de Israel"
        ]
      },
      {
        question: "O que Samuel disse a Saul quando ele tentou justificar sua desobediência?",
        correctAnswer: "Obedecer é melhor do que sacrificar",
        wrongAnswers: [
          "Fazer sacrifícios é mais importante que obedecer",
          "Seu reinado foi cancelado por sua falha",
          "A obediência é apenas para o povo, não para os reis"
        ]
      },
      {
        question: "Como Saul reagiu à crescente popularidade de Davi?",
        correctAnswer: "Ele ficou ciumento e começou a perseguir Davi",
        wrongAnswers: [
          "Ele se aliou a Davi para fortalecer o reino",
          "Ele ignorou a popularidade de Davi",
          "Ele fez de Davi seu conselheiro principal"
        ]
      },
      {
        question: "O que Saul fez quando se sentiu abandonado por Deus?",
        correctAnswer: "Recorreu a uma feiticeira em En-Dor para invocar o espírito de Samuel",
        wrongAnswers: [
          "Pediu perdão a Deus e fez sacrifícios",
          "Consultou Davi para orientação",
          "Desistiu do trono e abdicou de seu reinado"
        ]
      },
      {
        question: "Como terminou a vida de Saul?",
        correctAnswer: "Ele se suicidou durante uma batalha com os filisteus",
        wrongAnswers: [
          "Ele foi capturado pelos filisteus e levado como prisioneiro",
          "Ele foi morto por Davi em combate",
          "Ele fugiu para o Egito e viveu seus últimos anos em exílio"
        ]
      },
      {
        question: "Como Davi foi escolhido por Deus para ser rei de Israel?",
        correctAnswer: "Porque ele tinha um coração segundo a vontade de Deus, não pela sua aparência",
        wrongAnswers: [
          "Porque ele era o filho mais velho de Jessé",
          "Porque ele era um grande guerreiro",
          "Porque ele foi ungido como rei por Saul"
        ]
      },
      {
        question: "Como Davi derrotou o gigante Golias?",
        correctAnswer: "Com uma funda e uma pedra, confiando em Deus",
        wrongAnswers: [
          "Com uma espada e uma armadura",
          "Com a força de suas mãos",
          "Com o auxílio de outros soldados de Israel"
        ]
      },
      {
        question: "O que levou Saul a perseguir Davi?",
        correctAnswer: "O ciúmes do sucesso de Davi e o medo de perder o trono",
        wrongAnswers: [
          "A traição de Davi ao rei",
          "Davi ter desobedecido a uma ordem direta de Saul",
          "Davi ter destruído uma cidade do reino"
        ]
      },
      {
        question: "Qual foi o grande erro cometido por Davi envolvendo Bate-Seba?",
        correctAnswer: "Cometer adultério com Bate-Seba e ordenar a morte de Urias",
        wrongAnswers: [
          "Faltar com respeito a Deus em uma batalha",
          "Deixar de cumprir uma ordem de Deus",
          "Mentir sobre sua linhagem"
        ]
      },
      {
        question: "O que Davi fez após ser confrontado pelo profeta Natã por seu pecado?",
        correctAnswer: "Ele se arrependeu sinceramente e buscou o perdão de Deus",
        wrongAnswers: [
          "Ele tentou justificar suas ações diante de Deus",
          "Ele se afastou de Deus e se isolou",
          "Ele ordenou a morte do profeta Natã"
        ]
      },
      {
        question: "O que motivou Davi a enfrentar Golias?",
        correctAnswer: "Davi foi indignado pela ousadia de Golias em desafiar o exército de Israel e o Deus vivo",
        wrongAnswers: [
          "Davi queria ser o herói de Israel",
          "Davi estava tentando impressionar o rei Saul",
          "Davi queria vingança por um ataque anterior dos filisteus"
        ]
      },
      {
        question: "Como Davi se preparou para enfrentar Golias?",
        correctAnswer: "Davi confiou em sua funda e nas habilidades que havia desenvolvido como pastor, não em armaduras",
        wrongAnswers: [
          "Davi usou a espada de Saul",
          "Davi usou a armadura de Saul",
          "Davi tentou convencer Golias a se render"
        ]
      },
      {
        question: "Como Golias reagiu ao ver Davi?",
        correctAnswer: "Golias zombou de Davi por sua juventude e aparência",
        wrongAnswers: [
          "Golias tentou negociar com Davi",
          "Golias se assustou com a coragem de Davi",
          "Golias desafiou Davi a uma luta até a morte"
        ]
      },
      {
        question: "Como Davi derrotou Golias?",
        correctAnswer: "Com uma única pedra disparada de sua funda, que atingiu a testa de Golias",
        wrongAnswers: [
          "Com uma espada que ele pegou do campo de batalha",
          "Com um golpe de lança em Golias",
          "Com um feitiço dado por Deus"
        ]
      },
      {
        question: "Qual foi a reação dos filisteus após a derrota de Golias?",
        correctAnswer: "Eles fugiram em desespero, e o exército de Israel os perseguiu e derrotou",
        wrongAnswers: [
          "Eles se renderam a Israel",
          "Eles começaram a negociar com Israel",
          "Eles buscaram uma nova estratégia para vencer"
        ]
      },
      {
        question: "Qual foi a razão da perseguição de Saul a Davi?",
        correctAnswer: "Saul estava dominado pelo ciúme e pelo medo de perder o trono",
        wrongAnswers: [
          "Davi havia cometido um erro grave",
          "Davi estava tentando tomar o trono de Saul",
          "Davi havia se rebelado contra Saul"
        ]
      },
      {
        question: "O que Jônatas fez para proteger Davi?",
        correctAnswer: "Jônatas alertou Davi sobre os planos de Saul e fez um pacto de amizade com ele",
        wrongAnswers: [
          "Jônatas fugiu com Davi para outro país",
          "Jônatas desafiou Saul publicamente em defesa de Davi",
          "Jônatas tentou convencer Saul a desistir de sua perseguição"
        ]
      },
      {
        question: "Quando Davi teve a oportunidade de matar Saul, o que ele fez?",
        correctAnswer: "Davi decidiu poupar Saul, demonstrando sua integridade e respeito pela unção de Deus",
        wrongAnswers: [
          "Davi matou Saul em legítima defesa",
          "Davi capturou Saul e o levou como prisioneiro",
          "Davi desafiou Saul para uma batalha final"
        ]
      },
      {
        question: "Qual foi a reação de Saul ao ver que Davi o poupou?",
        correctAnswer: "Saul reconheceu a justiça de Davi e ficou tocado pela misericórdia dele",
        wrongAnswers: [
          "Saul tentou matar Davi mais uma vez",
          "Saul ignorou a misericórdia de Davi e continuou a persegui-lo",
          "Saul fez as pazes com Davi e o convidou para ser seu conselheiro"
        ]
      },
      {
        question: "Qual foi o impacto da morte de Jônatas para Davi?",
        correctAnswer: "Davi lamentou profundamente a perda de Jônatas e escreveu uma canção em sua homenagem",
        wrongAnswers: [
          "Davi ignorou a morte de Jônatas e continuou sua vida normalmente",
          "Davi ficou raivoso com Deus pela morte de Jônatas",
          "Davi decidiu não mais confiar em amigos após a perda de Jônatas"
        ]
      },
      {
        question: "O que marcou a ascensão de Davi ao trono de Israel?",
        correctAnswer: "A morte de Saul e a unificação das tribos de Israel",
        wrongAnswers: [
          "A vitória sobre os filisteus e a conquista de Jerusalém",
          "A batalha contra Absalão e a fuga de Jerusalém",
          "A aliança com os filisteus e a expansão dos territórios"
        ]
      },
      {
        question: "O que levou Davi a cometer adultério com Bate-Seba?",
        correctAnswer: "Davi avistou Bate-Seba enquanto passeava em sua varanda",
        wrongAnswers: [
          "Davi foi seduzido por Bate-Seba em um evento público",
          "Davi se apaixonou por Bate-Seba durante uma batalha",
          "Davi foi influenciado por outros homens a se casar com Bate-Seba"
        ]
      },
      {
        question: "Como Davi tentou encobrir o pecado com Bate-Seba?",
        correctAnswer: "Davi tentou fazer Urias passar a noite com Bate-Seba e, ao falhar, mandou-o para a linha de frente da batalha",
        wrongAnswers: [
          "Davi tentou fugir para outro país com Bate-Seba",
          "Davi ignorou as consequências e se casou com Bate-Seba imediatamente",
          "Davi pediu ao profeta Natã que justificasse seus atos"
        ]
      },
      {
        question: "Qual foi a consequência do pecado de Davi com Bate-Seba?",
        correctAnswer: "A ira de Deus recaiu sobre Davi, e ele enfrentaria consequências em sua casa",
        wrongAnswers: [
          "Deus perdoou Davi imediatamente e não houve consequências",
          "Davi perdeu o trono e foi exilado",
          "A morte de Bate-Seba foi a única consequência para Davi"
        ]
      },
      {
        question: "O que aconteceu entre Davi e seu filho Absalão?",
        correctAnswer: "Absalão se rebelou contra Davi, proclamando-se rei e forçando Davi a fugir de Jerusalém",
        wrongAnswers: [
          "Absalão matou Davi e assumiu o trono",
          "Davi e Absalão fizeram as pazes e governaram juntos",
          "Absalão se reconciliou com Davi e voltou a servi-lo como aliado"
        ]
      },
      {
        question: "Como Absalão morreu?",
        correctAnswer: "Absalão foi preso pelos cabelos em um carvalho e morto por Joabe, comandante do exército de Davi",
        wrongAnswers: [
          "Absalão foi capturado por Davi e executado",
          "Absalão morreu de uma doença incurável",
          "Absalão foi morto em batalha por um soldado desconhecido"
        ]
      },
      {
        question: "Como Davi reagiu à morte de Absalão?",
        correctAnswer: "Davi lamentou profundamente, dizendo: 'Meu filho, meu filho Absalão! Quem me dera que eu tivesse morrido em seu lugar!'",
        wrongAnswers: [
          "Davi ficou aliviado, pois sua luta pelo trono havia terminado",
          "Davi ignorou a morte de Absalão, focando no futuro do reino",
          "Davi ficou zangado e culpou outros pela morte de Absalão"
        ]
      },
      {
        question: "Qual foi a falha de Adão que trouxe o pecado ao mundo?",
        correctAnswer: "Adão desobedeceu a Deus ao comer do fruto proibido",
        wrongAnswers: [
          "Adão negou a Deus diante de Eva",
          "Adão matou Abel por ciúmes",
          "Adão construiu um altar para um deus falso"
        ]
      },
      {
        question: "O que Abraão fez para proteger-se em momentos de medo?",
        correctAnswer: "Abraão mentiu sobre Sara, dizendo que ela era sua irmã",
        wrongAnswers: [
          "Abraão fugiu para outro país",
          "Abraão desobedeceu a Deus e não sacrificou Isaque",
          "Abraão abandonou Sara durante a fome"
        ]
      },
      {
        question: "O que Moisés fez de errado ao tentar tirar água da rocha?",
        correctAnswer: "Moisés feriu a pedra em raiva, desobedecendo a ordem de Deus",
        wrongAnswers: [
          "Moisés ignorou a lei e fez um sacrifício indevido",
          "Moisés fugiu do Egito quando Deus o mandou retornar",
          "Moisés não confiou em Deus ao dividir o Mar Vermelho"
        ]
      },
      {
        question: "Qual foi a falha de Davi ao cometer adultério com Bate-Seba?",
        correctAnswer: "Davi orquestrou a morte de Urias, o marido de Bate-Seba",
        wrongAnswers: [
          "Davi tentou esconder o pecado com Sara",
          "Davi matou Golias de forma injusta",
          "Davi desobedeceu a Deus ao não construir o templo"
        ]
      },
      {
        question: "Qual erro Salomão cometeu apesar de sua sabedoria?",
        correctAnswer: "Salomão permitiu a adoração a ídolos devido à influência de suas esposas",
        wrongAnswers: [
          "Salomão abandonou a sabedoria e se tornou um tirano",
          "Salomão desafiou Deus ao construir templos pagãos",
          "Salomão se afastou de Deus por causa da vaidade"
        ]
      },
      {
        question: "Qual fraqueza de Elias aconteceu após sua vitória sobre os profetas de Baal?",
        correctAnswer: "Elias fugiu com medo de Jezabel e desejou a morte",
        wrongAnswers: [
          "Elias destruiu o altar do Senhor em desespero",
          "Elias ficou tentado a adorar Baal depois da vitória",
          "Elias recusou a ajuda de Deus em sua solidão"
        ]
      },
      {
        question: "O que o apóstolo Pedro fez durante a prisão de Jesus?",
        correctAnswer: "Pedro negou conhecer Jesus três vezes",
        wrongAnswers: [
          "Pedro abandonou Jesus durante a crucificação",
          "Pedro lutou com os soldados para defender Jesus",
          "Pedro traiu Jesus por dinheiro"
        ]
      },
      {
        question: "Quem é a única exceção na Bíblia que não cometeu nenhum pecado?",
        correctAnswer: "Jesus Cristo, que viveu uma vida perfeita",
        wrongAnswers: [
          "Moisés, que foi um homem sem falhas",
          "Abraão, o pai da fé",
          "Davi, o homem segundo o coração de Deus"
        ]
      },
      {
        question: "O que Salomão pediu a Deus quando o Senhor lhe ofereceu o que desejasse?",
        correctAnswer: "Sabedoria para governar com justiça",
        wrongAnswers: [
          "Riquezas e poder",
          "A morte de seus inimigos"
        ]
      },
      {
        question: "Como Salomão revelou a verdadeira mãe do bebê em disputa?",
        correctAnswer: "Ele sugeriu que o bebê fosse dividido ao meio",
        wrongAnswers: [
          "Ele pediu à mãe que mostrasse o bebê a ele",
          "Ele interrogou as mulheres até que uma confessou"
        ]
      },
      {
        question: "O que Salomão construiu que se tornou um centro de adoração em Israel?",
        correctAnswer: "O templo de Jerusalém",
        wrongAnswers: [
          "Um grande palácio de ouro",
          "O muro de Jerusalém"
        ]
      },
      {
        question: "Qual foi o erro de Salomão que levou à divisão de Israel?",
        correctAnswer: "Ele permitiu a idolatria em Israel",
        wrongAnswers: [
          "Ele não seguiu os mandamentos de Deus",
          "Ele tentou conquistar terras além de suas fronteiras"
        ]
      },
      {
        question: "Quem viajou de terras distantes para ouvir a sabedoria de Salomão?",
        correctAnswer: "A rainha de Sabá",
        wrongAnswers: [
          "O faraó do Egito",
          "O rei da Assíria"
        ]
      },
      {
        question: "O que Salomão pediu a Deus quando Ele lhe ofereceu qualquer coisa?",
        correctAnswer: "Salomão pediu sabedoria para governar seu povo",
        wrongAnswers: [
          "Salomão pediu riqueza e poder",
          "Salomão pediu para não ter inimigos",
          "Salomão pediu para ser imortal"
        ]
      },
      {
        question: "Quantas esposas e concubinas Salomão teve?",
        correctAnswer: "Salomão teve 700 esposas e 300 concubinas",
        wrongAnswers: [
          "Salomão teve 500 esposas e 200 concubinas",
          "Salomão teve 300 esposas e 700 concubinas",
          "Salomão teve 1000 esposas e 100 concubinas"
        ]
      },
      {
        question: "Qual foi um dos grandes erros de Salomão que levou à sua queda?",
        correctAnswer: "A poligamia e a influência das esposas estrangeiras, que trouxeram a idolatria para Israel",
        wrongAnswers: [
          "O abandono de sua sabedoria em favor da riqueza",
          "O assassinato de um de seus filhos para proteger o reino",
          "A construção de templos pagãos sem permissão de Deus"
        ]
      },
      {
        question: "O que aconteceu após a morte de Salomão?",
        correctAnswer: "O reino foi dividido entre Judá e Israel, resultando em instabilidade",
        wrongAnswers: [
          "Israel foi conquistado por um reino vizinho",
          "O reino permaneceu unido e prosperou sob o governo de Roboão",
          "Salomão foi sucedido por um governante estrangeiro"
        ]
      },
      {
        question: "O que a história de Salomão ensina sobre sabedoria e obediência a Deus?",
        correctAnswer: "A sabedoria não é suficiente sem a obediência a Deus e a fidelidade aos Seus caminhos",
        wrongAnswers: [
          "A sabedoria é mais importante que a obediência",
          "A fidelidade a Deus é irrelevante se alguém for sábio",
          "Deus perdoa todas as falhas, independentemente da obediência"
        ]
      },
      {
        question: "Qual foi a falha de Eli que afetou sua família e Israel?",
        correctAnswer: "Eli falhou em disciplinar seus filhos, Hofni e Fineias, que se entregaram à imoralidade e ganância",
        wrongAnswers: [
          "Eli desobedeceu a Deus ao oferecer sacrifícios impuros",
          "Eli se afastou de Deus e não cumpriu seus deveres como sacerdote",
          "Eli permitiu que os filisteus invadissem Israel sem lutar"
        ]
      },
      {
        question: "O que aconteceu quando Eli falhou em repreender seus filhos?",
        correctAnswer: "A desobediência de seus filhos levou à ira de Deus, à derrota de Israel e à perda da arca da aliança",
        wrongAnswers: [
          "Israel foi abençoado com mais riquezas e prosperidade",
          "Os filhos de Eli foram perdoados e a nação prosperou",
          "Eli foi recompensado por sua paciência com os filhos"
        ]
      },
      {
        question: "O que aconteceu com os filhos de Eli, Hofni e Fineias?",
        correctAnswer: "Eles foram mortos em combate durante uma batalha contra os filisteus",
        wrongAnswers: [
          "Eles foram exilados para outro país",
          "Eles foram perdoados e se tornaram líderes de Israel",
          "Eles fugiram e se esconderam em outro lugar"
        ]
      },
      {
        question: "Qual foi a reação de Eli ao receber a notícia da morte de seus filhos?",
        correctAnswer: "Eli morreu de desgosto e culpa após ouvir sobre a morte de seus filhos",
        wrongAnswers: [
          "Eli se alegrou por a nação estar livre da corrupção dos filhos",
          "Eli buscou vingança contra os filisteus imediatamente",
          "Eli fez um grande sacrifício de agradecimento a Deus"
        ]
      },
      {
        question: "O que a história de Eli ensina sobre a responsabilidade dos pais?",
        correctAnswer: "A história de Eli serve como um alerta para a importância da disciplina e da responsabilidade na educação dos filhos",
        wrongAnswers: [
          "A história de Eli ensina que a devoção a Deus isenta os pais de responsabilidades",
          "A história de Eli mostra que os pais devem apenas amar seus filhos, sem impor regras",
          "A história de Eli sugere que os pais não devem interferir nas escolhas dos filhos"
        ]
      },
      {
        question: "O que Elias fez para confrontar a idolatria e os profetas de Baal?",
        correctAnswer: "Elias desafiou os profetas de Baal a um duelo no Monte Carmelo, invocando o Deus de Israel, que respondeu com fogo do céu",
        wrongAnswers: [
          "Elias pediu ao rei Acabe para banir a idolatria do reino",
          "Elias construiu um altar e ofereceu sacrifícios para Baal",
          "Elias fugiu de Israel e se escondeu em outro país"
        ]
      },
      {
        question: "Qual foi o resultado do duelo entre Elias e os profetas de Baal?",
        correctAnswer: "Deus respondeu com fogo do céu, consumindo o altar de Elias e provando sua soberania sobre Baal",
        wrongAnswers: [
          "Baal respondeu com fogo do céu, demonstrando seu poder",
          "Elias desistiu do duelo, mas conseguiu convencer os profetas de Baal a se converter",
          "Os profetas de Baal derrotaram Elias, mostrando que seus deuses eram verdadeiros"
        ]
      },
      {
        question: "Após a vitória sobre os profetas de Baal, o que aconteceu com Elias?",
        correctAnswer: "Elias fugiu para o deserto após ser ameaçado de morte por Jezabel, a esposa de Acabe",
        wrongAnswers: [
          "Elias foi premiado pelo rei Acabe por sua coragem",
          "Elias ficou em Israel, preparando a nação para a batalha contra Baal",
          "Elias foi preso por desafiar o rei Acabe e a rainha Jezabel"
        ]
      },
      {
        question: "Como Deus confortou Elias no deserto após sua fuga?",
        correctAnswer: "Deus o confortou, dando-lhe comida e água, e o encorajou a continuar sua missão",
        wrongAnswers: [
          "Deus apareceu para Elias como um grande exército, garantindo sua vitória",
          "Deus disse a Elias para fugir ainda mais para um lugar seguro",
          "Deus castigou Elias por sua falta de fé e coragem"
        ]
      },
      {
        question: "O que a história de Elias nos ensina sobre a fé e a perseverança?",
        correctAnswer: "A história de Elias ensina que, mesmo diante das maiores dificuldades, Deus nunca nos abandona e nos dá forças para continuar nossa missão",
        wrongAnswers: [
          "A história de Elias mostra que, quando enfrentamos dificuldades, devemos desistir",
          "A história de Elias sugere que Deus recompensa apenas os fortes e corajosos",
          "A história de Elias nos ensina que devemos sempre agir por nossa própria força"
        ]
      },
      {
        question: "Qual foi o primeiro milagre de Eliseu após suceder Elias?",
        correctAnswer: "Eliseu atravessou o rio Jordão a seco",
        wrongAnswers: [
          "Eliseu curou um cego na cidade de Jericó",
          "Eliseu fez o sol parar no céu",
          "Eliseu multiplicou os pães para alimentar uma multidão"
        ]
      },
      {
        question: "O que Eliseu fez para purificar as águas de Jericó?",
        correctAnswer: "Eliseu lançou um punhado de sal nas águas e orou, tornando-as saudáveis",
        wrongAnswers: [
          "Eliseu rezou sobre a água e transformou-a em vinho",
          "Eliseu pediu que as águas fossem removidas e novas fossem trazidas",
          "Eliseu usou óleo para purificar as águas"
        ]
      },
      {
        question: "O que aconteceu com a viúva que foi ajudada por Eliseu?",
        correctAnswer: "Eliseu multiplicou o óleo que ela tinha, garantindo o sustento de sua família",
        wrongAnswers: [
          "Eliseu a curou de uma doença grave",
          "Eliseu a libertou de dívidas com o rei",
          "Eliseu a ajudou a encontrar um marido rico"
        ]
      },
      {
        question: "Qual milagre Eliseu realizou para a mulher sunamita?",
        correctAnswer: "Eliseu orou e ressuscitou o filho da mulher sunamita",
        wrongAnswers: [
          "Eliseu a ajudou a se tornar fértil",
          "Eliseu curou o filho da mulher de uma doença mortal",
          "Eliseu restaurou a juventude da mulher sunamita"
        ]
      },
      {
        question: "Como Eliseu curou Naamã, o comandante sírio?",
        correctAnswer: "Eliseu instruiu Naamã a mergulhar sete vezes no rio Jordão, e ele foi curado da lepra",
        wrongAnswers: [
          "Eliseu aplicou uma pomada especial sobre a lepra de Naamã",
          "Eliseu ordenou que Naamã se banhasse em águas especiais em Damasco",
          "Eliseu fez uma oração longa e intensa para curá-lo instantaneamente"
        ]
      },
      {
        question: "O que Eliseu fez durante um conflito com a Síria?",
        correctAnswer: "Eliseu cegou os exércitos inimigos e os conduziu até Samaria, onde mostrou misericórdia",
        wrongAnswers: [
          "Eliseu derrotou os exércitos inimigos em batalha direta",
          "Eliseu pediu reforços para lutar contra a Síria",
          "Eliseu fez com que os exércitos inimigos se retirassem sem combate"
        ]
      },
      {
        question: "O que aconteceu após a morte de Eliseu?",
        correctAnswer: "Um homem que foi enterrado na mesma cova de Eliseu ressuscitou ao tocar seus ossos",
        wrongAnswers: [
          "O túmulo de Eliseu se tornou um local de curas contínuas",
          "Os ossos de Eliseu foram guardados em um templo sagrado",
          "A cova de Eliseu foi destruída por uma tempestade"
        ]
      },
      {
        question: "O que a vida de Eliseu nos ensina?",
        correctAnswer: "A vida de Eliseu nos ensina que Deus usa aqueles com um coração disposto para realizar Sua vontade, trazendo cura e reconciliação",
        wrongAnswers: [
          "A vida de Eliseu nos ensina que milagres devem ser realizados apenas por pessoas poderosas",
          "A vida de Eliseu nos ensina que devemos sempre agir por nossa própria força",
          "A vida de Eliseu nos ensina que milagres são raros e não devem ser buscados"
        ]
      },
      
];

alert(`"Descubra o quanto você conhece das grandes histórias da Bíblia!"

  Você acha que conhece bem as narrativas e os personagens da Bíblia? Que tal colocar seu conhecimento à prova e explorar o universo bíblico de uma maneira divertida e desafiadora? Participe do nosso Quiz Interativo! Em cada pergunta, você poderá relembrar histórias inspiradoras, momentos marcantes e curiosidades únicas da Bíblia.
  
  Venha testar seu conhecimento e aprender algo novo em cada resposta. Este é o momento perfeito para descobrir o quanto você já sabe e para se inspirar a conhecer ainda mais sobre a Palavra!
  
  Aceite o desafio e embarque nessa jornada de conhecimento bíblico!`)
let currentQuestionIndex = 0;
let score = 0;
let usedQuestions = [];

function getRandomUniqueQuestion() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    return questions[randomIndex];
}

function loadQuestion() {
    if (usedQuestions.length < 20) {
        const currentQuestion = getRandomUniqueQuestion();

        document.getElementById("question").textContent = currentQuestion.question;
        document.getElementById("score").textContent = `Score: ${score}`;

        const allAnswers = [currentQuestion.correctAnswer, ...currentQuestion.wrongAnswers];
        const shuffledAnswers = shuffleArray(allAnswers);

        document.getElementById("answer1").textContent = shuffledAnswers[0];
        document.getElementById("answer2").textContent = shuffledAnswers[1];
        document.getElementById("answer3").textContent = shuffledAnswers[2];
        document.getElementById("answer4").textContent = shuffledAnswers[3];

       
    } else {
        endQuiz();
    }
}

function checkAnswer(answerIndex) {
    const selectedAnswer = document.getElementById(`answer${answerIndex}`).textContent;
    const currentQuestion = questions[usedQuestions[currentQuestionIndex]];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        blinkQuiz('green');
    } else {
        alert(`Resposta incorreta. A resposta correta era: ${currentQuestion.correctAnswer}`);
        score--;
        blinkQuiz('red');
    }

    currentQuestionIndex++;
    loadQuestion();
}

function endQuiz() {
    alert(`Fim do Quiz! Seu score final: ${score} de 20`);
    // Você pode adicionar código aqui para reiniciar o quiz ou redirecionar para outra página.
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function blinkQuiz(color) {
    const quizContainer = document.querySelector('.quiz');
    quizContainer.style.transition = 'background-color 0.2s ease';

    quizContainer.style.backgroundColor = color; // Muda para a cor desejada
    setTimeout(() => {
        quizContainer.style.backgroundColor = '#fff'; // Volta para a cor branca
    }, 500); // Tempo de 500ms para o efeito de piscar
}

loadQuestion();