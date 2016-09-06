# Egghead Video Download

**Quick Introduction how to Download [Egghead Videos](https://egghead.io/) for Offline View.**

Please remember that these guys make a great job and invest lots of time to provide these usefull information.
That said consider to support them for their great work and [Sign Up](https://egghead.io/users/sign_up) for a free account, follow them on [Twitter](https://twitter.com/eggheadio), share their content or whatever ...
I'm traveling and the Hotel internet sucks hard, so i share this infos for others with slow and anoying internet connections.

## Installation

### jQuery Injector (Chrome Plugin)

<https://chrome.google.com/webstore/detail/inject-jquery/indebdooekgjhkncmgbkeopjebofdoid>

Load the Website and press the jQuery Button.  
You can run now jQuery Commands from the Console on this Website.

### Youtube Downloader

<https://github.com/rg3/youtube-dl>

`brew install youtube-dl`

## Get Links

### Javascript Code

```
const links = $('.title a')
for(let x = 0, len = links.length; x < len; x++) { console.log(links[x].href) }
```

Save the Output in a Textfile and run:

## Download

`youtube-dl -o "%(autonumber)s-%(title)s.%(ext)s" -a list.txt`

# Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)

### License 

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/ellerbrock/" property="cc:attributionName" rel="cc:attributionURL">Maik Ellerbrock</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
