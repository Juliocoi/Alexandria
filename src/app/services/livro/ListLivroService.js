import ModelLivro from '../../models/catalogo/ModelLivro'

class Livros{
    constructor(){}

    listaLivroService(){
        const livro1 = new ModelLivro (
            9788595084759,
            'O Senhor dos Aneis 1',
            'J. R. R. Tolkien',
            ' ',
            'HarperCollins',
            '2019',
            ' '
        );

        const livro2 = new ModelLivro (
            9788595084766,
            'O Senhor dos Aneis 2',
            'J. R. R. Tolkien',
            ' ',
            'HarperCollins',
            '2019',
            ' '
        );

        const livro3 = new ModelLivro (
            9788556510785,
            'A Guerra dos Tronos',
            'George R. R. Martin',
            ' ',
            'Suma',
            '2019',
            ' '
        )

        return[livro1, livro2, livro3];
    }

    listaLivroNome(livroNome){

        const listarLivros = Livros.listaLivroService();
        const livro = listarLivros.find
        (item => item.nome === livroNome);

        if(livro === undefined){
            return {'Erro': 'Livro não localizado em nosso banco de dados'}
        }

        return livro;
    }
}

export default Livros