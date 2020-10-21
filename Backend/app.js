const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const orderRoutes = require('./routes/order');
const driverRoutes = require('./routes/driver');
const assignedOrderRoutes = require('./routes/assigned_order');
const completedOrderRoutes = require('./routes/completed_order');
const complexReportRouter = require('./routes/complexReport');

const errorController = require('./controller/error'); 

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Origin, Content-Type, Authorization, Accept');
    res.setHeader('Access-Control-Allow-Credintials', true);
    next();
});

app.use('/order', orderRoutes);
app.use('/driver', driverRoutes);
app.use('/assigned_order', assignedOrderRoutes);
app.use('/completed_order', completedOrderRoutes);
app.use('/complex_report', complexReportRouter);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => console.log(`Listning on port ${ports}`));