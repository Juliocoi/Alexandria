import ModelLivro from '../../models/catalogo/ModelLivro'

class Livros{
    constructor(){}

    async listaLivroService(){
        try {
            const livros = await ModelLivro.findAll(); 
            return livros;       
    } catch(error){
        console.log(error);
        return {erro: error.message}
    }
}

    async listaLivroId(id) {
        try {
            const livro = await ModelLivro.findOne({
                where: { id: id }});

            return livro;
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    };

    async listaLivroNome(livroNome){
        try{
        const livro = await ModelLivro.findOne({where: {nome: livroNome}});

        if(!livro){
            return {message: 'Livro não localizado encontrado'}
        }

        return livro;
    } catch (error){
        console.log(error);
        return {erro: error.message};
    }
}
}

export default Livros;