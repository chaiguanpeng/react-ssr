let express = require('express');
let cors = require('cors');
let app = express();
app.use(cors({
    origin:'http://localhost:3000'
}));
let users = [{id:1,name:'zhangsan'},{id:2,name:'lisi'}];
app.get('/api/users',function (req, res) {
    res.json(users);
});
app.listen(4000);
