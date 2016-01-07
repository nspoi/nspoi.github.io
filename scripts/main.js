console.log('\'Allo \'Allo!');

function hideShow (divid) {
	if (!document.getElementById)
		return;
	if (divid.style.display=="block")
		{
			divid.style.display="none";
		}
	else
		{
			divid.style.display="block";
		}
}