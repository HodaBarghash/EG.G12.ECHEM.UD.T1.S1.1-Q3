function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Px2zOYUiwv":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbw0t7Yw13RrgBrLo3BN34FV55Vxufiy7hG_oSc67HZvWYl1EZaROZY9Y8LH7h0PwZjs/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v3q3attempts:player.GetVar("v3q3attempts"),v3q3answeredcorrect:player.GetVar("v3q3answeredcorrect")})
	}
	)
}

