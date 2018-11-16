<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		
        <title>Gamifica_Sprint</title>
		<link rel="icon" href="favicon.png" type="image/png">
		<link rel="shortcut icon" href="favicon.ico" type="img/x-icon">		

        <!-- Fonts -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
			*  {
			margin:0;
			padding:0;
			}

			html, body {height:100%;}

			.geral {
				min-height:100%;
				position:relative;
				width:800px;
			}

			.footer {
				position:absolute;
				bottom:0;
				width:100%;
			}

			.content {overflow:hidden;}
			.aside {width:200px;}
			.fleft {float:left;}
			.fright {float:right;}
        </style>

        <script>
            var key =  "36zGuzvFhSSr2dBY8Bdb";
            // buscando todos projetos
            $.getJSON('http://gitlab.bitstudio.io/api/v4/projects/?private_token='+key, function(data){
                var select = ''; //html
                for (var i in data) {
                    //html na variavel
                    select += '<option value="'+data[i].codigo +'">'+ data[i].name + '</option>';
                }
                select += ''; //fecha html  ex. </div>
                $('#form').html(select);  //apresenta dados na div "form"
            });
        </script>
    </head>
    <body>
		<div class="container-fluid">
			<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
				<button type="button" class="btn btn-primary">Jogador 1</button>
				<button type="button" class="btn btn-primary">Jogador 2</button>
				<button type="button" class="btn btn-primary">Jogador 3</button>
				<button type="button" class="btn btn-primary">Jogador 4</button>
			</nav> 			
			<div class="content">
				<hr noshade>
				<div class="row">
					<div class="col-sm-3">
						<div class="card" style="width:400px">
							<img class="card-image" src="svg/trofeu.svg" alt="image">
							<div class="card-body">
                                <h4 class="card-title">{{ $projeto_especifico['name'] }}</h4>
                                    <p class="card-text">Some example text.</p> 
                                    <a href="#" class="btn btn-primary">Detalhes</a>
							</div>
						</div>
					</div>
					<div class="col-sm-1"></div>
					<div class="col-sm-3">
						<div class="card" style="width:400px">
						  <img class="card-image" src="svg/trofeu.svg" alt="image">
							<div class="card-body">
                                <h4 class="card-title">{{ $issues_projeto_especifico[0]['title']  }}</h4>
                                    <p class="card-text">{{$issues_projeto_especifico[0]['description']}}</p>
                                    <a href="#" class="btn btn-primary">Detalhes</a>
							</div>
						</div>
					</div>
					<div class="col-sm-1"></div>
					<div class="col-sm-3">
						<div class="card" style="width:400px">
							<img class="card-image" src="svg/trofeu.svg" alt="image">
							<div class="card-body">
                                <h4 class="card-title">{{ $projeto_especifico['name'] }}</h4>
                                    <p class="card-text">Some example text.</p>
                                    <a href="#" class="btn btn-primary">Detalhes</a>
							</div>
						</div>
					</div>
				</div>
				<hr noshade>
			</div>
			<div class="footer" align="center">
				<a href="https://github.com/santhiagosdp/GamificaSprint" target="resource window"><img src="img/github.png" height="20" width="70" class="media-object  img-responsive img-thumbnail"></a>
			</div>	
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    </body>
</html>
