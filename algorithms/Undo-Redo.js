function undoRedo(object) {

	let state = {
		function: function(){},
		args: [],
		id: 0,
		operation: 'default',
		undo: false,
		properties: {...object}
	}
	let operations = [state];
	let redoList = [];

	return {
		set: function(key, value) {
			let operation = {
				function: function(key, value){object[key] = value;},
				args: [key, value],
				id: operations.length,
				operation: 'set',
				undo: false,
				properties: {...object}
			}
			operations.push(operation);
			redoList = [];
			object[key] = value;
		},
		get: function(key) {
			console.log( object[key]);
			return object[key]
		},
		del: function(key) {
			let operation = {
				function: function(key) {delete object[key]},
				args: [key],
				id: operations.length,
				operation: 'del',
				undo: false,
				properties: {...object}
			}
			operations.push(operation);
			redoList = [];
			delete object[key]
		},
		undo: function() {

			if (operations.length > 1){

				let operation = operations[operations.length - 2];

				Object.keys(object).forEach(key => {
					delete object[key];
				});

				Object.keys(operation.properties).forEach(key => {
					object[key] = operation.properties[key];
				});

				operation.function(...operation.args);
				redoList.push(operations[operations.length - 1])
				operations.pop();

			} else {
				throw 'Nothing to Undo!'
			}
		},
		redo: function() {

			if (redoList.length > 0){

				let operation = redoList[redoList.length - 1];

				Object.keys(object).forEach(key => {
					delete object[key];
				});

				Object.keys(operation.properties).forEach(key => {
					object[key] = operation.properties[key];
				});

				operation.function(...operation.args)
				operations.push(redoList[redoList.length - 1])
				redoList.pop();

			} else {
				throw 'Nothing to Redo!'
			}
		}
	};
}

var obj = {
	x: 1,
	y: 2
  };

var unRe = undoRedo(obj);
unRe.set('y', 10);
unRe.set('y', 100);
unRe.set('x', 150);
unRe.set('x', 50);

unRe.get('y')// 100, 'The get method returns the value of a key');
unRe.get('x')// 50, 'The get method returns the value of a key');

unRe.undo();

unRe.get('x')//150, 'The undo method restores the previous state');
unRe.get('y')//100, 'The y key stays the same');

unRe.redo();

unRe.get('x')//50, 'Undo the x value');
unRe.get('y')//100, 'The y key stays the same');

unRe.undo();
unRe.undo();

unRe.get('x')// 1, 'Undo the x value');
unRe.get('y')// 100, 'The y key stays the same');
