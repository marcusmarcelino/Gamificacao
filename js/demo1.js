(function(){
	
	var key = "36zGuzvFhSSr2dBY8Bdb";
	var dados = [];
	var sprints = [];
	var colaboradores = [];
	var users = [];
	var select;
	var trofeus = [];
	var jogador_rei_fechadas = "";
	var jogador_rei_antecipadas = "";

	//usadas para ver dados testes
	var ver_dados = "nada aqui";
	var trofeus_teste = "nada aqui";

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

	//open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
	    button.innerHTML = "-";
	    classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	}
	function closeNav(){
		open = false;
		button.innerHTML = "+";
		classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper, 'opened-nav');
	}
	document.addEventListener('click', closeNav);
	
	
	//Consumindo as Sprinds
$.getJSON('http://gitlab.bitstudio.io/api/v4/projects/74/milestones/?private_token=' + key, function(milestones) {
    for (var i in milestones) {
        sprints[i] = milestones[i];
    }
});

// Consumindo todas tarefas do projeto ID-71
$.getJSON('http://gitlab.bitstudio.io/api/v4/projects/74/issues/?private_token=' + key, function(data) {
    for (var i in data) {
        dados[i] = data[i];
    }

    ver_dados += "<h4>inicia_dados()</h4>";
    iniciar_dados(); //Tratamento dos dados duplicados e etc

    // trofeus_pag(); // somente para iniciar direto
});



// Funções para gerar dados a serem apresentados.
// Pontuação
function pontuacao() {
    //TESTES DIVERSOS 
    //select=colaboradores[0].tarefas_finalizadas;
    //select= dados[0].closed_at;
    //select=colaboradores[0].pontos+" - ante: "+colaboradores[i].tarefas_finalizadas_antec+" - final:" +colaboradores[i].tarefas_finalizadas;	
    //select=compara_data(4);	

    select = '<div class="row">'; //html
    var cards = 0;
    for (var i in colaboradores) {
        cards++;
        //html na variavel
        select += '' +
            '<div class="col-sm-3">' +
            '<div  class="card" style="width:300px">' +
            //'<img class="card-image" style="height:300px" style="width:100px" src="svg/pontos.png" alt="image">'+
            '<img class="card-image" style="height:300px" style="width:150px" src=' + colaboradores[i].avatar + ' alt="image">' +
            '<div class="card-body">' +
            '<h4 class="card-title">' + colaboradores[i].nome_usuario + '</h4>' +
            '<h4 class="card-text" >Pontos: ' + colaboradores[i].pontos + '</h4>' +
            '<font>Tarefas finalizadas:' + colaboradores[i].tarefas_finalizadas++ + '</font>' +
            '<p class="card-text">Finalizadas com antec.: ' + colaboradores[i].tarefas_finalizadas_antec++ + '</p>' +
            '<a href="#" class="btn btn-primary">Detalhes</a>' +
            '</div>' +
            '</div>' +
            '</div>'; //+
        //'<div class="col-sm-1"></div>'; //html
        if (cards == 4) {
            select += '</div>' +
                '<div class="row">';
            cards = 0;
        }
    }
    select += '</div'; //fecha html  ex. </div>

    //select=compara_data(0)+" -closed "+ dados[0].closed_at+" - due_date"+dados[0].due_date; //dados[0].assignee.name;
    //select=compara_data(0);
    var info = "<h1>Seção de Pontuação</h1>";
    // select = colaboradores.length;
    $('#desc').html(info); //apresenta dados na div "form" 
    $('#cards').html(select);
}


// Botão troféus
function trofeus_pag() {
    select = '';
    // var cards = 0;
    for (var i in trofeus) {
        cards++;
        select += '' +
            '<div class="TokenLink bottom-gap">' +
            '<div class="Dashboard-card card">' +
            '<header>' +
            '<article>' +
            '<p>Sprint: <b class="noWrap">' + trofeus[i].nome_sprint + '</b></p>' +
            '</article>' +
            //rei fechamentos
            '<h2><img  style="height:30px" ' +
            'src=' + trofeus[i].avatar_f + ' alt="image">' +
            'Rei dos fechamentos: ' + trofeus[i].rei_fechadas + ' </h2>' +
            //rei antecipados
            '<h4><img  style="height:30px" ' +
            'src=' + trofeus[i].avatar_a + ' alt="image">' +
            'Rei das antecipadas: ' + trofeus[i].rei_antecipadas + ' </h4>' +
            '</header>' +
            '<div>' +
            '<h2></h2>' +
            '</div>' +
            '</div>' +
            '</div>';
        // if (cards == 3) {
        //     select += '</div>' +
        //         '<div class="row">';
        //     cards = 0;
        // }
    }
    // select += '</div'; //fecha html  ex. </div>

    //select=sprints[0].created_at;


    // select = '' +
    //     '<div class="TokenLink bottom-gap">' +
    //     '<div class="Dashboard-card card">' +
    //     '<header>' +
    //     '<article>' +
    //     '<p>Sprint: <b class="noWrap"> ' + sprints[i].title + '</b></p>' +
    //     '</article>' +
    //     '<h4>Rei dos fechamentos: ' + trofeus[i].rei_fechadas + ' </h4>' +
    //     '<h4>Rei das antecipadas: ' + trofeus[i].rei_antecipadas + ' </h4>' +
    //     '</header>' +
    //     '<div>' +
    //     '<h2></h2>' +
    //     '</div>' +
    //     '</div>' +
    //     '</div>';
    var info = "<h1>Seção de Troféus</h1>";
    $('#desc').html(info); //apresenta dados na div "form"
    $('#cards').html(select); //apresenta dados na div "form" 
    //select=trofeus[0].rei_antecipadas;

}


function tiraduplicidade(vetor) {
    var igual = false;
    var semDup = [];
    for (var i in vetor) {
        if (semDup.length == 0) { //inicia colocando primeiro valor na primeira posição
            semDup[i] = vetor[i];
        } else {
            for (var j in semDup) {
                if (semDup[j].name == vetor[i].name) {
                    igual = true;
                    break;
                }
            }
            if (igual == false) {
                //semDup[semDup.length]=vetor[i];
                semDup.push(vetor[i]);
            } else {
                igual = false;
            }
        }
    }
    return semDup;
}




// Comparação de data para pegar quantos dias antecipados ou 0 para atrasado
function compara_data(indice) {

    var closed_at = dados[indice].closed_at.substring(0, 10);

    var date1 = new Date(closed_at); //data fechada
    var date2 = new Date(dados[indice].due_date); //data criada

    if (date1 == date2 || dados[indice].closed_at == null) {
        return 0;
    } else if (date1 > date2 || dados[indice].due_date == null) {
        return 0;
    } else {
        var timeDiff = Math.abs((date2.getTime() + 1) - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        //alert(diffDays);
        //return timeDiff+" - "+diffDays;
        //return  "closed "+dados[indice].closed_at+" - due_date: "+dados[indice].due_date+" horas: "+timeDiff+" - dias "+diffDays;
        // return "due- "+dados[indice].due_date+" closed- "+date2;

        ver_dados += "<h4>data1: closet_at " + closed_at + " - date2 - due - " + dados[indice].due_date + "</h4>";

        //valor real a ser retornado
        return diffDays;
    }
}






function iniciar_dados() {
    //dados para pagina PONTUAÇÃO
    var usuarios = [];
    var avatar = [];
    ver_dados += "<h4>for para colocar criar array avatar e usuarios</h4>";

    for (var i in dados) { // pega todos usuarios das issues retornados
        usuarios[i] = dados[i].assignee;
    }

    //eliminar os duplicados
    users = tiraduplicidade(usuarios); // funcao tiraduplicidade() retorna array com usuarios e atributos

    //Definição inicial dos dados dos colaboradores
    for (var i in users) {
        colaboradores[i] = { id: users[i].id, nome_usuario: users[i].name, avatar: users[i].avatar_url, pontos: 100, tarefas_finalizadas: 0, tarefas_finalizadas_antec: 0 };
    }

    //select=colaboradores[0].pontos;
    for (var i in colaboradores) {
        for (var j in dados) { //verificar quais issues pertence ao colaborador
            if (colaboradores[i].nome_usuario == dados[j].assignee.name) {
                //ver_dados += "<h4>closet_at: " + dados[j].closed_at + " - due - " + dados[j].due_date + " - linha 210</h4>";
                if (dados[j].closed_at != null) {
                    colaboradores[i].tarefas_finalizadas++;
                    colaboradores[i].pontos += 10;
                    var comp_data = compara_data(j);
                    //  ver_dados += "<h4>comp_data: " + comp_data + " - linha 215</h4>";
                    if (comp_data > 0) {
                        // ver_dados += "<h4>antecipadas antes: " + colaboradores[i].tarefas_finalizadas_antec + "</h4>";
                        colaboradores[i].tarefas_finalizadas_antec++;
                        // ver_dados += "<h4>antecipadas depois: " + colaboradores[i].tarefas_finalizadas_antec + "</h4>";
                        var bonus = 10 * comp_data;
                        //ver_dados += "<h4>bonus: " + bonus + " - linha 219</h4>";
                        //ver_dados += "<h4>pontos antes: " + colaboradores[i].pontos + " - linha 220</h4>";
                        colaboradores[i].pontos += bonus;
                        // ver_dados += "<h4>pontos depois: " + colaboradores[i].pontos + " - linha 222</h4>";
                    }
                }
            } //final do for em dados
            else {
                //select="nao entrou: Comparação "+colaboradores[i].nome_usuario+" e "+dados[i].author.name+"  -   ";
            }
        } //final do for em colaboradores
    }


    //PARA PAGINA TROFEUS
    for (var j in sprints) {

        var user_qtd = []; // cada sprint vai ter o array de usuarios para passar aos trofeus de cada uma
        for (var i in colaboradores) {
            user_qtd[i] = { id: 0, usuario: "teste", avatar: "", antecipadas: 0, fechadas: 0 };
            user_qtd[i].usuario = colaboradores[i].nome_usuario;
            user_qtd[i].id = colaboradores[i].id;
            user_qtd[i].avatar = colaboradores[i].avatar;
        }

        var fechada = "Ninguem Ainda";
        var total_fechada = 0;
        var avatar_fechada = "svg/avatar_false.png";

        var antecipada = "Ninguem Ainda";
        var total_antecipada = 0;
        var avatar_antecipada = "svg/avatar_false.png";

        for (var i in dados) { //percorrer dados para analisar as tarefas da sprint em vigencia no for linha:251
            if (dados[i].milestone.id == sprints[j].id) {
                var jogador = dados[i].assignee.name;

                if (dados[i].closed_at != null) {
                    for (var k in user_qtd) {
                        if (user_qtd[k].usuario == jogador) {
                            user_qtd[k].fechadas++;
                        }
                    }
                }
                if (dados[i].due_date != null && dados[i].closed_at != null) {
                    if (compara_data(i) > 0) {
                        for (var k in user_qtd) {
                            if (user_qtd[k].usuario == jogador) {
                                user_qtd[k].antecipadas++;
                                //user_qtd[k].avatar_antecipada = dados[i].assignee.avatar_url;
                            }
                        }
                    }
                }
            }


        }
        for (var i in user_qtd) {
            //antecipadas
            if (i == 0 && user_qtd[i].antecipadas > 0) {
                antecipada = user_qtd[i].usuario;
                total_antecipada = user_qtd[i].antecipadas;
                avatar_antecipada = user_qtd[i].avatar;
            }
            if (i != 0 && user_qtd[i].antecipadas > total_antecipada) {
                antecipada = user_qtd[i].usuario;
                total_antecipada = user_qtd[i].antecipadas;
                avatar_antecipada = user_qtd[i].avatar;
            }

            //fechadas
            if (i == 0 && user_qtd[i].fechadas > 0) {
                fechada = user_qtd[i].usuario;
                total_fechada = user_qtd[i].fechadas;
                avatar_fechada = user_qtd[i].avatar;
            }
            if (i != 0 && user_qtd[i].fechadas > total_fechada) {
                fechada = user_qtd[i].usuario;
                total_fechada = user_qtd[i].fechadas;
                avatar_fechada = user_qtd[i].avatar;
            }
        }
        trofeus[j] = { rei_fechadas: fechada, rei_antecipadas: antecipada, nome_sprint: sprints[j].title, avatar_a: avatar_antecipada, avatar_f: avatar_fechada };
    }

}

})();

