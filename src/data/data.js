import { uniqueID } from '../utils/utils';
const foods = [
  {
    id: uniqueID(),
    categoria: 'fast food',
    nome: 'Burger Picanha',
    preco: 12.5,
    avaliacoes: 4.9,
    detalhes: {
      descricao:
        'Delicioso hamburguer de picanha bovina, preparado com os melhores ingredientes do mercado.',
      acompanhamentos: ['pão', 'hamburguer', 'bacon', 'calabresa em rodelas'],
    },
    popular: false,
    img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    favoritado: false,
  },
  {
    id: uniqueID(),
    categoria: 'fast food',
    nome: 'Burger Simples',
    preco: 9.55,
    avaliacoes: 4.2,
    detalhes: {
      descricao:
        'Delicioso hamburguer bovino, preparado com os melhores ingredientes do mercado.',
      acompanhamentos: ['pão', 'hamburguer', 'salada', 'ovo'],
    },
    popular: true,
    img: 'https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1205&q=80',
    favoritado: false,
  },
  {
    id: uniqueID(),
    categoria: 'fast food',
    nome: 'Hot Dog Especial',
    preco: 10,
    avaliacoes: 4.5,
    detalhes: {
      descricao:
        'Delicioso cachorro quente, com todo o seu estilo tradicional e também com os incrementos da culinária basileira.',
      acompanhamentos: [
        'pão',
        'salsisha',
        'molho especial',
        'ovo de codorna',
        'milho',
        'ervilha',
      ],
    },
    popular: true,
    img: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    favoritado: false,
  },
  {
    id: uniqueID(),
    categoria: 'frutos do mar',
    nome: 'Camarões gratinados',
    preco: 18.99,
    avaliacoes: 4.8,
    detalhes: {
      descricao: 'Deliciosos camarões gratinados no azeite ao molho branco.',
      acompanhamentos: [
        'torradas ao alho',
        'molho aioli',
        'porção de arroz',
        'salada',
      ],
    },
    popular: true,
    img: 'https://images.unsplash.com/photo-1599655345131-6eb73b81d8d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    favoritado: false,
  },
  {
    id: uniqueID(),
    categoria: 'frutos do mar',
    nome: 'Bacalhau Aioli',
    preco: 22.8,
    avaliacoes: 4.8,
    detalhes: {
      descricao: 'Deliciosas postas de bacalhau da Noruega servidas ao Aioli.',
      acompanhamentos: [
        'mini baguetes de pão',
        'arroz à piamontese',
        'grão de bico',
      ],
    },
    popular: true,
    img: 'https://images.unsplash.com/photo-1598298106595-2ad0159d5b08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    favoritado: false,
  },
  {
    id: uniqueID(),
    categoria: 'saladas',
    nome: 'Salada Caesar',
    preco: 18.99,
    avaliacoes: 4.8,
    detalhes: {
      descricao:
        'A melhor salada caesar que você irá experimentar, com azeite do porto e toque especial do chef.',
      acompanhamentos: ['molho com anchovas', 'parmesão', 'croutons'],
    },
    popular: true,
    img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    favoritado: false,
  },
  {
    id: uniqueID(),
    categoria: 'oriental',
    nome: 'Yakisoba',
    preco: 13.99,
    avaliacoes: 4.4,
    detalhes: {
      descricao:
        'O melhor da colunária chinesa. Delicioso Yakisoba com as raízes da Ásia, preparado ao tradicional shoyu Chinês.',
      acompanhamentos: ['frango', 'legumes', 'croutons'],
    },
    popular: true,
    img: 'https://images.unsplash.com/photo-1512398975429-6ec18e1f3eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    favoritado: false,
  },
];

const foodOptions = [
  { categoria: 'todos', id: 0 },
  { categoria: 'popular', id: 1 },
  { categoria: 'fast food', id: 2 },
  { categoria: 'frutos do mar', id: 3 },
  { categoria: 'saladas', id: 4 },
  { categoria: 'oriental', id: 5 },
];

const notificacoes = [
  {
    titulo: 'Aproveite!',
    descricao: 'Só hoje, descontos para pedidos acima de R$ 15',
    id: 0
  },
  {
    titulo: 'Mês da Folia!',
    descricao: 'Descontos exclusivos durante a semana do Carnaval',
    id: 1
  },
  {
    titulo: 'Seleções do Mês',
    descricao: 'Confira os pedidos mais bem avalidos do mês',
    id: 2
  },
  {
    titulo: 'Especial Sucos e Vitaminas',
    descricao: 'Produtos especialmente selecionados para todos os gostos',
    id: 3
  },
  {
    titulo: 'Cupom',
    descricao: 'Temos um cupom de R$ 8 te esperando',
    id: 4
  },
];

const user = { 
  nome: 'pedro nogueira',
  login: 'pedro_nogueira',
  tipo: 'rua',
  endereco: 'Arctic Monkeys',
  numero: 505,
  bairro:  'Nowhere',
  municipio: 'Somewhere',
  uf: 'SW'
}

export { foods, foodOptions, notificacoes, user };
