  // O Objeto com os Stories estão fixos para testes, o campo stories deve ser 
  // preenchido com um array de stories de cada usuário
  // cada item do array de stories é um array de duas posições, sendo a primeira
  // o id de cada story e a segunda posição 1 ou 0 para visto ou não visto
  // para teste estou usando o pravatar para gerar imagens aleatórias para os usuários
export default [
    {
        id:'1',
        name:'Edson',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [true, 10, "Lorem Ipsum"],
        latestMessages: [
            {
                my: true,
                text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                sendDate: "09/03/2020"
            },
            {
                my: false,
                text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                sendDate: "09/03/2020"
            },
            {
                my: true,
                text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                sendDate: "09/03/2020"
            },
            {
                my: true,
                text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                sendDate: "09/03/2020"
            },
        ]
    },
    {
        id:'2',
        name:'Elon',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [true, 10, "Lorem Ipsum"]
    },
    {
        id:'3',
        name:'Kobayashi',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'4',
        name:'Mary',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'5',
        name:'Han',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'6',
        name:'Alice',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'7',
        name:'Philip',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'8',
        name:'Yrie',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'9',
        name:'Stephen Trevor',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'10',
        name:'Michael Lensi',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'11',
        name:'Kara Denver',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    },
    {
        id:'12',
        name:'Jhon dick',
        image:'https://i.pravatar.cc/300',
        lastMessageTime: "09:00",
        message: [false, 10, "Lorem Ipsum"]
    }
];