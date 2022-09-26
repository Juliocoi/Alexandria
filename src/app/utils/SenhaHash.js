import crypto from 'node:crypto';

class SenhaHash {
    constructor(){};
    //cria senha criptografada
    static hash(senha){
        console.log(senha);
        const senhaHash = crypto.pbkdf2Sync(senha, process.env.PASSWORD_SALT, 10000, 64, 'SHA512').toString('hex');

        return senhaHash;
    }

    static validacao(senha, hash){
        //Aqui invocamos a própria classe para acessar o método declarado anteriormente, assim não precisamos repetir o código declarado na const senhaHash ACIMA.
        const senhaHash = SenhaHash.hash(senha);

        return senhaHash === hash;
    }
}

export default SenhaHash;