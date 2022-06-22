function undoRedo(object) {

	let operationPointer = 1;
	let state = {
		function: function(){},
		args: [],
		id: 0,
		operation: 'default',
		undo: false,
		properties: {...object}
	}
	let operations = [state];
	let redoOperations = [];

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
			operationPointer = operations.length;
			operations.push(operation);
			object[key] = value;
		},
		get: function(key) {
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
			operationPointer = operations.length;
			operations.push(operation);
			delete object[key]
		},
		undo: function() {

			if (operationPointer > 0){

				if (operations.length > 2){
					if (operations[operations.length - 3].undo == true && 
						operations[operations.length - 1].operation == 'del' &&
						operations[operations.length - 2].operation == 'set'){
							operations.length = 1;
							return;
						}
				}

				operations[operationPointer].undo = true;
				redoOperations.push(operations[operationPointer]);
				operationPointer--;

				Object.keys(object).forEach(key => {
					delete object[key];
				});

				Object.keys(operations[operationPointer].properties).forEach(key => {
					object[key] = operations[operationPointer].properties[key];
				});

				operations[operationPointer].function(...operations[operationPointer].args)

			} else {
				throw 'Nothing to Undo!'
			}

			console.log('Pointer undo ' + operationPointer);
			console.log('function' + JSON.stringify(operations[operationPointer]));
			console.log('object' + JSON.stringify(object));
			console.log('redo' + JSON.stringify(redoOperations));
		},
		redo: function() {
			if (redoOperations.length > 0){

				let operation = operations[redoOperations.length - 1];
				
				Object.keys(object).forEach(key => {
					delete object[key];
				});

				Object.keys(operation.properties).forEach(key => {
					object[key] = operation.properties[key];
				});
				operation.function(...operation.args);
				redoOperations.pop();
			} else {
				throw 'Nothing to Redo!'
			}
			console.log('Pointer undo ' + operationPointer);
			console.log('function' + JSON.stringify(operations[operationPointer]));
			console.log('object' + JSON.stringify(object));
		}
	};
}

let obj = {
	x: 1,
	y: 2
};

let unRe = undoRedo(obj);

unRe.set('y', 10);  //0
unRe.del('y', 20);  //0
unRe.undo();
unRe.set('y', 10);  //0
unRe.del('y', 20);  //0
unRe.undo();

console.log(unRe.get('y'));
