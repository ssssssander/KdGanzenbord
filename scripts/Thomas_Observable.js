var Observable = function(){
	
	var _self=this;
	
	_self.data;
	_self.subscribers = [];
	
	_self.methods= {
		
		subscribe: function(callback){
			if(_self.subscribers.indexOf(callback)===-1){
				_self.subscribers.push(callback);
			}
		},
		unsubscribe: function(callback){
			for (var subscribersKey in _self.subscribers){
				if(_self.subscribers[subscribersKey] === callback){
					_self.subscribers.splice(subscribersKey,1);
				}
			}
		},
		publish: function(newData){
			if(typeof newData === 'undefined'){
				return _self.data;
			}
			else{
				_self.data=newData;
				for(var subscribersKey in _self.subscribers){
					_self.subscribers[subscribersKey](_self.data);
				}
			}
		}
	}
	return _self.methods;
};

/*
var model = {
	dices : [],
	tiles : [],
	pawns : [],
	buttons:[]
}
*/

/*
models.dices.subscribe(function(){console.log("test dices")});
models.dices.publish(4);
*/


function movePawn(pawn,place){
	if(place<=63&&place>=1){
		pawn.className = "place-"+place;
	}
	else if(place>63){
		pawn.className = "place-63";
		setTimeout(function(){
			pawn.className = "place-"+(63-(parseInt(place)-63));
		},1000);
	}
	else if(place<1){
		pawn.className = "place-1";
	}
}
/*
var tegelcontroller={
	
}
*/