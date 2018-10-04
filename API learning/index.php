<?php
	$weather = "";
	$error = "";
	if ($_GET['city']) {
    $urlContents = file_get_contents("https://samples.openweathermap.org/data/2.5/weather?q=".urlencode($_GET['city']).",uk&appid=b6907d289e10d714a6e88b30761fae22");
    $weatherArray = json_decode($urlContents, true);
    if ($weatherArray['cod'] == 200) {
      $weather = "The weather in ".$_GET['city']." is currently'".$weatherArray['weather'][0]['description']."'. ";
      $temperatureInCelcius = intval($weatherArray['main']['temp'] - 273);
      $weather .= " The temperature is ".$temperatureInCelcius."&deg;C and the wind speed is ".$weatherArray['wind']['speed']."m/s.";
    } else {
      echo "Can't find city - please try again";
    }
  }
?>
  <!doctype html>
  <html lang="en">

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Hello, world!</title>
  </head>

  <body>
    <div class="container">
      <h1>What's the Weather?</h1>
      <form>
        <div class="form-group">
          <label for="city">Enter the name of a city.</label>
          <input type="text" class="form-control" id="city" name="city" value="
          	<?php 
          		if (array_key_exists('city, $_GET')) {
          			echo $_GET['city'];
          		}
          	?>
          " placeholder="Eg. London, Tokyo">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div id="weather">
        <?<?php 
    	if ($weather) {
    		echo '<div class="alert alert-success" role="alert">'.$weather.'</div>';
    	} else if ($error) {
    		echo '<div class="alert alert-danger" role="alert">'.$error.'</div>';
    	}
    ?></div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>

  </html>