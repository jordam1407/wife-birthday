/* eslint-disable max-len */
import {
  Typography,
  Container,
  Button,
  styled,
  Box,
  MobileStepper,
  CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import Header from './components/Header';
import self from './assets/self.jpeg';
import coracao from './assets/coracao.jpg';
import doidinha from './assets/doidinha.jpg';
import esposa from './assets/esposa.jpg';
import guerreira from './assets/guerreira.jpg';
import motivadora from './assets/motivadora.jpg';
import tia from './assets/tia.jpg';
import virtuosa from './assets/virtuosa.jpg';
import sabia from './assets/sabia.jpg';

const root = (theme) => ({
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
  backgroundColor: '#fff',
  minHeight: 'calc(100vh - 160px)',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 0px',
  borderRadius: '30px 30px 0 0',
  top: '160px',
  left: 0,
  right: 0,
  position: 'absolute',
  boxShadow: 1,
  px: 2,
});

const Arrow = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '50%',
  height: '100%',
  cursor: 'pointer',
  opacity: 0,
}));

const LeftArrow = styled(Arrow)({
  left: 0,
});

const RightArrow = styled(Arrow)({
  right: 0,
});

const facts = [
  {
    title: 'O maior coração do mundo',
    text: 'Não sei como cabe tanto amor, tanto carinho, tanta compaixão dentro de um coração tão pequeno. Você sempre se doa, com tudo que pode e com todas as forças pra ajudar quem precisa. Sempre colocando as vontades dos outros a frente das suas.',
    img: coracao,
  },
  {
    title: 'A maior motivadora',
    text: 'Não conheço mais ninguém no mundo que tenha esse poder de inspirar e motivar como você. Quando nem eu acreditei na minha capacidade, você estava aqui me dizendo que eu podia ir além, que eu podia mais, que o céu era o limite. Isso é um dom que poucas pessoas têm, o seu brilho nos motiva e nos inspira!',
    img: motivadora,
  },
  {
    title: 'A mais doidinha de todas',
    text: 'Não precisa comentar muito né? Você não poderia ter vivido em outra época, não consigo imaginar por exemplo você em preto e branco, por que você tem cor, tem vida, tem luz! Caso a única forma de gravar memórias e revê-las fosse em preto e branco, com certeza as suas gravações ainda conteriam cores. Você é a doidinha do bem, que alegra a todos, que conversa aleatoriamente, que sabe falar sobre qualquer tipo de assunto, você é assim, doidinha de várias cores.',
    img: doidinha,
  },
  {
    title: 'A mais guerreira',
    text: 'Que orgulho é fazer parte da sua vida, conhecer o seu trajeto, saber tudo o que você passou, me mostrou a guerreira que você é. Você sempre batalhou para ter uma condição de vida diferente e isso nos levou a lugar que nunc poderia imaginar. Pode parecer clichê, mas é a mais pura verdade, você teve que aprender a viver em vigilância, em estado de alerta, porque a qualquer momento podem precisar da Super Poli, E você sempre estará lá, dando o seu melhor, dando tudo de si para ajudar o próximo, mesmo que ele não seja tão próximo assim! Você escolheu ser assim, correta, não se desviar nem para a direita nem para a esquerda, eu aprendi muito com você a ter palavra, a dizer sempre a verdade, a corrigir quem precisa de correção e a acolher que precisa ser acolhido. Nem todos estão preparados para a verdade, mas você nunca abre mão de quem você é, dos seus princípios, das suas crenças para agradar os outros, doa a quem doer. Você é meu orgulho.',
    img: guerreira,
  },
  {
    title: 'A mais inteligente e sábia',
    text: 'Uma das maiores alegrias de viver ao seu lado, é saber que eu tenho você pra me aconselhar, pra colocar meu pé no chão. Você sempre tem as palavras certas para cada momento, independente de quem seja e de qual situação, você transmite luz, e nos ajuda a enxergar com clareza, Deus têm sim seus preferidos, porque eles me escolheu pra ter você todos os dias, e esse é o meu maior presente!',
    img: sabia,
  },
  {
    title: 'A tia mais amorosa',
    text: 'A melhor tia, melhor filha, melhor irmã e melhor amiga, que qualquer pessoal poderia ter na vida. Você cuida dos seus como uma leoa, e sei que sua vontade é de guardar todo mundo no potinho, pra que nenhum mal aconteça, por isso você se doa tanto por todos. Não tem nada no mundo que paga esse sorrisão gostoso que você dá quando está entre família.',
    img: tia,
  },
  {
    title: 'A melhor esposa do mundo',
    text: 'Lá vamos nós com mais um clichê né?! Só que não, o seu amor não é assim, pois o clichê é comum, é o que se repete é o que se encontra com frequência.Eu tenho um amor único pra chamar de meu diariamente, um amor que excede qualquer expectativa, porque eu nunca imaginei que pudesse ser tão amado assim, você acolhe meus sentimentos, você cuida das minhas feridas, você está sempre preparada para lutar por mim e não deixar que nada me aconteça, você sempre demonstra seu amor, seja em pequenos detalhes, como passar o café pra mim todos os dias, ou levar uma água com limão, e até mesmo fazer coisas que não gosta, como ir ao jogo do galo. Você me ouve, me aconselha, me acalma, me motiva, me inspira, me consola, você sempre dá o seu melhor por mim, e isso não é clichê, é o amor único e exclusivo da Popoli.',
    img: esposa,
  },
  {
    title: 'A mulher virtuosa',
    text: '"Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis. O coração do seu marido está nela confiado; assim ele não necessitará de despojo. Ela só lhe faz bem, e não mal, todos os dias da sua vida. Provérbios 31:10-12". Incrível né?! Pois é, as vezes eu esqueço que eu encontrei essa pessoa, que ela está ao meu lado todos os dias, que eu nunca mais precisarei procurar, pois eu já te encontrei, minha amada, minha esposa, minha amiga, minha companheira, meu pedacinho do céu.',
    img: virtuosa,
  },
];

function App() {
  const [selected, setSelected] = useState(0);
  const [img, setImg] = useState(true);

  const card = (n) => {
    if (n > facts.length) {
      return (
        <>
          <Typography variant="h3" sx={ { mt: 1, mx: 'auto' } }>
            Parabéns!
          </Typography>
          <Typography variant="body2" sx={ { mt: 1 } }>
            Esta foi apenas uma forma diferente de te desejar Parabéns, espero
            que tenha gostado, pois foi feito com muito amor e carinho!
            <br />
            Feliz Aniversário meu amor, que possamos repetir esta data
            indefinidamente té que o Senhor volte para nos buscar para louvarmos
            na Eternidade.
          </Typography>
          <Typography variant="h6" sx={ { mt: 6, mx: 'auto' } }>
            Eu Te Amo!
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={ () => setSelected(0) }
            sx={ {
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              mx: 'auto',
              mt: 4,
            } }
          >
            <Typography variant="body2">Recomeçar</Typography>
          </Button>
        </>
      );
    }
    if (n === 0) {
      return (
        <>
          <Typography variant="h5" sx={ { mt: 1, mx: 'auto' } }>
            Bem vindo a bio da Poli!
          </Typography>
          <Typography variant="body2" sx={ { mt: 1 } }>
            Vamos juntos navegar por uma série de imagens e fatos sobre a mulher
            mais incível do mundo! Assim como nos stories, Clique ao lado
            direito para mudar de imagem.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={ () => setSelected((p) => p + 1) }
            sx={ {
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              m: 'auto',
            } }
          >
            <Typography variant="body2">Começar</Typography>
          </Button>
        </>
      );
    }
    if (n !== 0 && n <= facts.length) {
      return (
        <>
          <div
            style={ {
              position: 'absolute',
              zIndex: 1,
              width: '100%',
              minHeight: 'calc(100% - 30px)',
              display: 'flex',
            } }
          >
            <LeftArrow onClick={ () => setSelected((p) => p - 1) } />
            <RightArrow onClick={ () => setSelected((p) => p + 1) } />
          </div>
          <Typography variant="h5" sx={ { mt: 1, mx: 'auto' } }>
            {facts[n - 1].title}
          </Typography>
          <Typography variant="body2" sx={ { mt: 1, mb: 4 } }>
            {facts[n - 1].text}
          </Typography>
          {!img && <CircularProgress sx={ { mx: 'auto' } } />}
          {img && (
            <img
              src={ facts[n - 1].img }
              alt="poli"
              onLoad={ () => setImg(true) }
              style={ {
                width: '100%',
                alignSelf: 'center',
              } }
            />
          )}
        </>
      );
    }
  };

  return (
    <>
      <Header />
      <Container sx={ root }>
        <img
          src={ self }
          alt="poli"
          style={ {
            width: '120px',
            top: '-60px',
            position: 'absolute',
            borderRadius: '50%',
            alignSelf: 'center',
          } }
        />
        <MobileStepper
          sx={ {
            mx: 'auto',
            mt: 6,
            '& .MuiMobileStepper-dot': {
              mx: '5px',
              width: '25px',
              height: '4px',
              borderRadius: '0',
            },
          } }
          variant="dots"
          steps={ facts.length + 2 }
          position="static"
          activeStep={ selected }
        />
        {card(selected)}
      </Container>
    </>
  );
}

export default App;
