class GhostLoad {

    constructor(route, ids){

        this._route = route;
        this._resource = route.split('/')[3].slice(0,-1);
        this._ids = ids.filter(id => id !== null);
    }

    replaceElements(){
        
        let promises = [];
        let self = this;

        this._ids.forEach(id => {
            
            promises.push(new Promise(function(resolve, reject) {

                $.get(self._route.replace(':id', id), html => { 

                    $(`#${self._resource}_${id}`).replaceWith(html);
                    resolve(`Replaced #${self._resource}_${id}`);
                });
            }));
        });

        return Promise.all(promises);
    }
}