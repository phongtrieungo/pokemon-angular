(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3plp":function(e,t,o){"use strict";o.r(t),o.d(t,"PokedexModule",(function(){return C}));var n=o("ofXK"),s=o("tyNb"),c=o("l7P3");const r="[Pokedex Page] Get all pokemons",p="[Pokedex Page] Get pokemon",i=Object(c.n)(r,Object(c.s)()),a=Object(c.n)("[Pokedex Page] Pokemons Loaded Success",Object(c.s)()),b=Object(c.n)(p,Object(c.s)()),l=Object(c.n)("[Pokedex Page] Get pokemon success",Object(c.s)()),m=Object(c.o)("pokedex"),u=Object(c.q)(m,(e=>e.pokemons)),k=Object(c.q)(m,(e=>e.selectedPokemon));var d=o("fXoL"),f=o("XNiG"),h=o("lJxs"),g=o("tk/3");let O=(()=>{class e{constructor(e){this.http=e}getAllPokemons(){return this.http.get("https://pokeapi.co/api/v2/pokemon")}getPokemon(e){return this.http.get(e)}getPokemonArtwork(e){return this.http.get(e,{responseType:"arraybuffer"})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(g.a))},e.\u0275prov=d.zb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function j(e,t){if(1&e&&(d.Ib(0,"span",9),d.Zb(1),d.Hb()),2&e){const e=t.$implicit;d.ub(1),d.bc(" ",e.type.name," ")}}function y(e,t){if(1&e&&(d.Gb(0),d.Ib(1,"div",1),d.Ib(2,"div",2),d.Eb(3,"img",3),d.Hb(),d.Ib(4,"header",4),d.Zb(5),d.Hb(),d.Ib(6,"div",5),d.Ib(7,"div",6),d.Zb(8,"Type"),d.Hb(),d.Ib(9,"div",7),d.Yb(10,j,2,1,"span",8),d.Hb(),d.Hb(),d.Hb(),d.Fb()),2&e){const e=t.ngIf;d.ub(3),d.Ub("src",e.sprites.other["official-artwork"].front_default,d.Wb),d.ub(2),d.ac(e.name),d.ub(5),d.Tb("ngForOf",e.types)}}let P=(()=>{class e{constructor(e,t){this._pokedexService=e,this._store=t,this.pokemon$=new f.a}ngOnInit(){this._pokedexService.getPokemon(this.pokemonResult.url).pipe(Object(h.a)((e=>this.pokemon$.next(e)))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(d.Db(O),d.Db(c.h))},e.\u0275cmp=d.xb({type:e,selectors:[["app-pokemon-item"]],inputs:{pokemonResult:"pokemonResult"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"pkm-card"],[1,"pkm-card__image-holder"],["alt","official-artwork","srcset","",3,"src"],[1,"pkm-card__title"],[1,"pkm-card__type"],[1,"pkm-card__type-label"],[1,"pkm-card__type-list"],["class","pkm-card__type-list-item",4,"ngFor","ngForOf"],[1,"pkm-card__type-list-item"]],template:function(e,t){1&e&&(d.Yb(0,y,11,3,"ng-container",0),d.Rb(1,"async")),2&e&&d.Tb("ngIf",d.Sb(1,1,t.pokemon$))},directives:[n.j,n.i],pipes:[n.b],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   .pkm-card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.1)}"]}),e})();function v(e,t){1&e&&d.Eb(0,"app-pokemon-item",3),2&e&&d.Tb("pokemonResult",t.$implicit)}function _(e,t){if(1&e&&(d.Gb(0),d.Ib(1,"div",1),d.Yb(2,v,1,1,"app-pokemon-item",2),d.Hb(),d.Fb()),2&e){const e=d.Qb();d.ub(2),d.Tb("ngForOf",e.pokemons.results)}}let x=(()=>{class e{constructor(e){this._store=e}ngOnInit(){this.pokemon$=this._store.select(k)}view(e){this._store.dispatch(b({url:e.url}))}}return e.\u0275fac=function(t){return new(t||e)(d.Db(c.h))},e.\u0275cmp=d.xb({type:e,selectors:[["app-pokemon-list-item"]],inputs:{pokemons:"pokemons"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"pokemon-container"],[3,"pokemonResult",4,"ngFor","ngForOf"],[3,"pokemonResult"]],template:function(e,t){1&e&&d.Yb(0,_,3,1,"ng-container",0),2&e&&d.Tb("ngIf",null==t.pokemons||null==t.pokemons.results?null:t.pokemons.results.length)},directives:[n.j,n.i,P],styles:["[_nghost-%COMP%]   .pokemon-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));column-gap:30px;row-gap:30px}"],changeDetection:0}),e})();const w=[{path:"",component:(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.store.dispatch(i({all:!0})),this.pokemons$=this.store.select(u)}}return e.\u0275fac=function(t){return new(t||e)(d.Db(c.h))},e.\u0275cmp=d.xb({type:e,selectors:[["app-pokemons"]],decls:2,vars:3,consts:[[3,"pokemons"]],template:function(e,t){1&e&&(d.Eb(0,"app-pokemon-list-item",0),d.Rb(1,"async")),2&e&&d.Tb("pokemons",d.Sb(1,1,t.pokemons$))},directives:[x],pipes:[n.b],styles:[""],changeDetection:0}),e})()}];let I=(()=>{class e{}return e.\u0275mod=d.Bb({type:e}),e.\u0275inj=d.Ab({factory:function(t){return new(t||e)},imports:[[s.a.forChild(w)],s.a]}),e})();var $=o("9jGm"),F=o("EY2u"),H=o("5+tZ"),R=o("JIr8");let S=(()=>{class e{constructor(e,t){this.action$=e,this.pokedexService=t,this.loadPokedex=Object($.c)((()=>this.action$.pipe(Object($.d)(r),Object(H.a)((({})=>this.pokedexService.getAllPokemons().pipe(Object(h.a)((e=>a({payload:e}))),Object(R.a)((()=>F.a)))))))),this.loadPokemon=Object($.c)((()=>this.action$.pipe(Object($.d)(p),Object(H.a)((({url:e})=>this.pokedexService.getPokemon(e).pipe(Object(h.a)((e=>l({payload:e})))))))))}}return e.\u0275fac=function(t){return new(t||e)(d.Lb($.a),d.Lb(O))},e.\u0275prov=d.zb({token:e,factory:e.\u0275fac}),e})();const T=Object(c.p)({pokemons:null,selectedPokemon:null},Object(c.r)(a,((e,{payload:t})=>Object.assign(Object.assign({},e),{pokemons:t}))),Object(c.r)(l,((e,{payload:t})=>Object.assign(Object.assign({},e),{selectedPokemon:t})))),G=(e,t)=>T(e,t);let C=(()=>{class e{}return e.\u0275mod=d.Bb({type:e}),e.\u0275inj=d.Ab({factory:function(t){return new(t||e)},imports:[[n.c,I,c.j.forFeature("pokedex",G),$.b.forFeature([S])]]}),e})()}}]);