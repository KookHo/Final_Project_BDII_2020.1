import {Request, Response} from 'express';
import Movies from '../model/MovieModel';

export default{
    async create (request: Request, response: Response){
        const {
            name,
            year,
            director,
            genres
        } = request.body;
        console.log(request.body);

        await Movies.create({
            name,
            year,
            director,
            genres
        }).then(function(data){
            return response.status(201).send(data)
        })
    },

    async index(request: Request, response: Response){
        await Movies.find()
            .then(function(data){
                return response.status(200).send(data)
        })
    },

    async update(request: Request, response: Response){
        const dados = request.body;
        const id = request.params.id;

        await Movies.findByIdAndUpdate(id, dados)
            .then(function(old_movie){
                Movies.findOne({_id: request.params.id})
                    .then(function(new_movie){
                        return response.status(200).send(new_movie);
            })
        })
    },

    async delete(request: Request, response: Response){
        return await Movies.findByIdAndRemove({_id: request.params.id}).then((movie)=>{
            response.send(movie);
        })
    }
}