import React from 'react';
import ReactDOM from 'react-dom';
import mysql from 'mysql';

var HelloBox = React.createClass({
	function xxx(){
		 
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'damasac',
		  password : 'damasac!@#$%',
		  database : 'tdc_online'
		});
		 
		connection.connect();
		 
		connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
		  if (error) throw error;
		  console.log('The solution is: ', results[0].solution);
		});
		 
		connection.end();
	}
    render: function() {
        return ( 
            <div className = "helloTag" >
            Hello world from ReactJS 
            </div>
        );
    }
});

ReactDOM.render( < HelloBox / > , document.getElementById('helloTag'));