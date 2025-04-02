import express from 'express';

const app = express();
app.use(express.static('dist'));
const port = 4000;

app.get('/', (req, res) => {
    res.json({
        name: 'John Doe',
        email: 'johndoe@exampe.com'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

