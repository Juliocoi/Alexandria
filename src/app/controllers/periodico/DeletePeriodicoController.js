import DeletePeriodicoService from "../../services/periodico/DeletePeriodicoService";

class DeletePeriodicoController{
    constructor(){
        this.service = new DeletePeriodicoService();
    }

    async delete(request, response){
        const { id } = request.params;

        const deletado = await this.service.delete(id);

        response.send(deletado);
    }
}

export default DeletePeriodicoController;