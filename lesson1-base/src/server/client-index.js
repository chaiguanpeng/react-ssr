let express = require('express');
let app = express();
app.get('/',function (req, res) {
    res.send(
        `
        <!DOCTYPE html>
           <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>ssr</title>
                </head>
                <body>
                    <div id="root"></div>
                    <script>
                        document.getElementById('root').innerHTML = 'hello';
                    </script>
                </body>
           </html>
        `
    )
});
app.listen(4000,function () {
    console.log("server start at port 4000");
});
