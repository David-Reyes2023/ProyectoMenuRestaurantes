const express = require('express'); 

const app  = express();

const DUMMY_RESTAURANTES = [
    {
        id: 'r1',
        restaurante: 'Comida tipica',
        plato1: 'Arroz menestra, carne',
        plato2: 'Arroz menestra, pollo',
        plato3: 'Seco de pollo',
        plato4: 'Seco de chivo',
        plato5: 'Guatita',
        plato6: 'Bistec de carne',
        plato7: 'Yapingacho'
    },
    {
        id: 'r2',
        restaurante: 'Asados',
        plato1: 'Carne de Res',
        plato2: 'Carne de Cerdo',
        plato3: 'Pollo',
        plato4: 'Morcilla',
        plato5: 'Hamburguesa',
        plato6: 'Embutidos',
        plato7: 'Picaña'
    },
    {
        id: 'r3',
        restaurante: 'Gourmet',
        plato1: 'Pollo a la naranja',
        plato2: 'Fondue de Res',
        plato3: 'Scargot',
        plato4: 'Caviar',
        plato5: 'Langosta',
        plato6: 'Bife de Chorizo',
        plato7: 'Lomo fino'
    }
];

app.get('/api/restaurantes',(req,res,next)=>{
    const restaurantes = DUMMY_RESTAURANTES;
    res.send(restaurantes);
    next();
});

app.get('/api/restaurantes/:pid',(req,res,next)=>{
    const restaurantes = DUMMY_RESTAURANTES.find(p =>{
        return p.id == req.params.pid;
    });
    res.send(restaurantes);
    next();
});

app.listen(3000);
