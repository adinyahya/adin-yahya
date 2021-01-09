
var text="Hello, I'm Adin Yahya. A Newbie Software Developer.";
var text2="A Newbie Software Developer";
var delay=19;
var currentChar=1;
var destination="[none]";
	function type()
	{
		{
			var dest=document.getElementById(destination);
			if (dest)
			{
				dest.innerHTML=text.substr(0, currentChar)+"<blink>_</blink>";
				currentChar++;
					if (currentChar>text.length)
					{
						currentChar=1;
						setTimeout("type()", exit(0));
					}
					else
					{
					setTimeout("type()", delay);
					}
			}
		}
	}

	function startTyping(textParam, delayParam, destinationParam)
	{
				text=textParam;
				delay=delayParam;
				currentChar=1;
				destination=destinationParam;
				type();
    }
    
    javascript:startTyping(text, 120, "textDestination");