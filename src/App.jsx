/* eslint-disable max-len */
import { Typography, Container, Button } from '@mui/material';
import { useState } from 'react';
import Header from './components/Header';
import self from './assets/self.jpeg';

const root = (theme) => ({
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
  backgroundColor: '#fff',
  minHeight: 'calc(100vh - 70px)',
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

const facts = [
  {
    title: 'O maior coração do mundo',
    text: 'Não sei como cabe tanto amor, tanto carinho, tanta compaixão dentro de um coração tão pequeno. Você sempre se doa, com tudo que pode e com todas as forças pra ajudar quem precisa. Sempre colocando as vontades dos outros a frente das suas.',
    img: self,
  },
  {
    title: 'A melhor filha do mundo',
    text: 'Algum Texto bem bonitiho1',
    img: self,
  },
  {
    title: 'A mais doidinha de todas',
    text: 'Algum Texto bem bonitiho2',
    img: self,
  },
  {
    title: 'A maior motivadora',
    text: 'Algum Texto bem bonitiho3',
    img: self,
  },
  {
    title: 'A mais guerreira',
    text: 'Algum Texto bem bonitiho4',
    img: self,
  },
  {
    title: 'A maior trabalhadeira',
    text: 'Algum Texto bem bonitiho5',
    img: self,
  },
  {
    title: 'A mais inteligente e sábia',
    text: 'Algum Texto bem bonitiho6',
    img: self,
  },
  {
    title: 'A mais honesta e justa',
    text: 'Algum Texto bem bonitiho7',
    img: self,
  },
  {
    title: 'A melhor esposa do mundo',
    text: 'Algum Texto bem bonitiho8',
    img: self,
  },
  {
    title: 'A mulher virtuosa',
    text: 'Algum Texto bem bonitiho9',
    img: self,
  },
];

function App() {
  const [selected, setSelected] = useState(0);
  const card = (n) => {
    if (n > facts.length) {
      return (
        <>
          <Typography variant="h3" sx={ { mt: 6, mx: 'auto' } }>
            Parabéns!
          </Typography>
          <Typography variant="body2" sx={ { mt: 1 } }>
            Esta foi apenas uma forma diferente de te desejar Parabéns, espero que tenha gostado, pois foi feito com muito amor e carinho!
          </Typography>
          <Typography variant="h6" sx={ { mt: 6, mx: 'auto' } }>
            Eu Te Amo!
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={ () => setSelected(0) }
            sx={ {
              width: '190px',
              height: '190px',
              borderRadius: '50%',
              mx: 'auto',
              mt: 4,
            } }
          >
            <Typography variant="h4">Recomeçar</Typography>
          </Button>
        </>
      );
    }
    if (n === 0) {
      return (
        <>
          <Typography variant="h5" sx={ { mt: 6, mx: 'auto' } }>
            Bem vindo a bio da Poli!
          </Typography>
          <Typography variant="body2" sx={ { mt: 1 } }>
            Vamos juntos navegar por uma série de imagens e fatos sobre a mulher
            mais incível do mundo! Clique em Próximo após terminar de ler.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={ () => setSelected((p) => p + 1) }
            sx={ {
              width: '190px',
              height: '190px',
              borderRadius: '50%',
              mx: 'auto',
              mt: 4,
            } }
          >
            <Typography variant="h4">Começar</Typography>
          </Button>
        </>
      );
    }
    if (n !== 0 && n <= facts.length) {
      return (
        <>
          <Typography variant="h5" sx={ { mt: 6, mx: 'auto' } }>
            {facts[n - 1].title}
          </Typography>
          <Typography variant="body2" sx={ { mt: 1, mb: 4 } }>
            {facts[n - 1].text}
          </Typography>
          <img
            src={ facts[n - 1].img }
            alt="poli"
            style={ {
              width: '100%',
              alignSelf: 'center',
            } }
          />
          <div style={ { display: 'flex' } }>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={ () => setSelected((p) => p - 1) }
              sx={ {
                borderRadius: '6px',
                mx: 'auto',
                mt: 4,
              } }
            >
              <Typography variant="caption">Anterior</Typography>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={ () => setSelected((p) => p + 1) }
              sx={ {
                borderRadius: '6px',
                mx: 'auto',
                mt: 4,
              } }
            >
              <Typography variant="caption">Próximo</Typography>
            </Button>
          </div>
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
        {card(selected)}
      </Container>
    </>
  );
}

export default App;
