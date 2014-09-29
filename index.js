var express = require('express'),
	bodyparser = require('body-parser')
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname,'src')));
app.use(bodyparser.json());

var reports = [
		{
			state: 'stuck',
			position : [57.706742, 11.968721],
			reportedAt : new Date("Aug 25 2014 10:37:46"),
			backstory: 'Fixing reception, got stuck',
			image: '/images/cat1.jpg'
		},
		{
			state: 'stuck',
			position : [57.705710, 11.974096],
			reportedAt : new Date("Aug 27 2014 10:37:46"),
			backstory: 'Climbed a tree, got stuck',
			image: '/images/cat2.jpg'
		},
		{
			state: 'stuck',
			position : [57.705710, 11.974096],
			reportedAt : new Date("Aug 28 2014 10:37:46"),
			backstory: 'Lost my keys, got stuck',
			image: '/images/cat3.jpg'
		},
		{
			state: 'stuck',
			position : [57.705710, 11.974096],
			reportedAt : new Date("Aug 29 2014 10:37:46"),
			backstory: 'Inspected contents of a jar, got stuck',
			image: '/images/cat4.jpg'
		}
	];
function getReport(id){
	id = typeof id === 'string' ? parseInt(id) : id;
	var r = reports[id];
	r.id = id;
	return r;
}
function setReport(id,report){
	report.id = typeof id === 'string' ? parseInt(id) : id;
	reports[id] = report;
	return reports;
}
app.get('/reports',function(req,res){
	res.status(200).json(reports.map(function(i,n){ i.id=n; return i;})).end();
});

app.post('/reports',function(req,res){
	reports.push(req.body);
	res.status(200).json(getReport(reports.indexOf(req.body))).end();
});
app.get('/reports/:id',function(req,res){
	res.status(200).json(getReport(req.params.id)).end();
})
app.post('/reports/:id',function(req,res){
	debugger; 
	res.status(200).json(setReport(req.params.id,req.body)).end();
})
app.delete('/reports/:id',function(req,res){
	var r = reports.splice(req.params.id,1);
	r.id = req.params.id;
	res.status(200).json(r).end();
})
app.listen(4567);

