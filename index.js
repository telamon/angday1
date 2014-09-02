var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname,'src')));

var reports = [
		{
			state: 'stuck',
			loreportion : [57.706742, 11.968721],
			reportedAt : new Date("Aug 25 2014 10:37:46"),
			backstory: 'Fixing reception, got stuck',
			image: '/images/cat1.jpg'
		},
		{
			state: 'stuck',
			loreportion : [57.705710, 11.974096],
			reportedAt : new Date("Aug 27 2014 10:37:46"),
			backstory: 'Climbed a tree, got stuck',
			image: '/images/cat2.jpg'
		},
		{
			state: 'stuck',
			loreportion : [57.705710, 11.974096],
			reportedAt : new Date("Aug 28 2014 10:37:46"),
			backstory: 'Lost my keys, got stuck',
			image: '/images/cat3.jpg'
		},
		{
			state: 'stuck',
			loreportion : [57.705710, 11.974096],
			reportedAt : new Date("Aug 29 2014 10:37:46"),
			backstory: 'Inspected contents of a jar, got stuck',
			image: '/images/cat4.jpg'
		}
	];

app.get('/reports',function(req,res){
	res.status(200).json(reports).end();
});

app.post('/reports',function(req,res){
	reports.push(req.body);
	res.status(200).json(req.report).end();
});
app.get('/reports/:id',function(req,res){
	res.status(200).json(reports[req.params.id]).end();
})
app.put('/reports/:id',function(req,res){
	reports[req.params.id] = req.body;
	res.status(200).json(reports[req.params.id]).end();
})
app.delete('/reports/:id',function(req,res){
	res.status(200).json(reports.splice(req.params.id,1)).end();
})
app.listen(4567);

