const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/*
app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});
*/



app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '남도일',
            'birthday': '961222',
            'gender': '남자',
            'job': '탐정'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '유미란',
            'birthday': '890512',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '홍장미',
            'birthday': '950809',
            'gender': '남자',
            'job': '특수요원'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));