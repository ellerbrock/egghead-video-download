# Egghead Video Download

**Quick Introduction how to Download [Egghead Videos](https://egghead.io/) for Offline View.**

Please remember that these guys make a great job and invest lots of time to provide these usefull information.
That said consider to support them for their great work and [Sign Up](https://egghead.io/users/sign_up) for a free account, follow them on [Twitter](https://twitter.com/eggheadio), share their content or whatever ...
I'm traveling and the Hotel internet sucks hard, so i share this infos for others with slow and anoying internet connections.

**Update:**

I wrote a small npm Module [get-links](https://www.npmjs.com/package/get-links) to collect the links.  
You pass the URL and a DOM selector and it will print the links via console.log.  
You can find an example in the the [here](https://github.com/ellerbrock/egghead-video-download/tree/master/example).  
I will publish a CLI version soon ...


## Installation

### Youtube Downloader

<https://github.com/rg3/youtube-dl>

`brew install youtube-dl`

## Get Links

### Javascript Code

#### Solution 1: Collect all links and copy them direct to the clipboard.

Execute the snippet and past it into a Textfile to download later via the Youtube Downloader.

```javascript
let a=[];document.querySelectorAll('.title a').forEach(l => a.push(l.href));copy(a.join('\n'));
```
*Info: Clipboard support may not work with every Browser: <http://caniuse.com/#feat=clipboard>.*


#### Solution 2: Print the collected links to the console via console.dir

```javascript
document.querySelectorAll('.title a').forEach(l => console.dir(l.href))
```

The tip to use [console.dir()](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir) came from [tucq88](https://github.com/tucq88) who run in some issues with to long URL's which Chrome shorten via "...".

*Info: console.dir is not an official standard yet it may or may not work in your current Browser.*


#### Solution 3: Collect the links and print the Array Object

```javascript
let a=[];document.querySelectorAll('.title a').forEach(l => a.push(l.href));console.log(a);
```


#### Solution 4: Print collected links via console.log

```javascript
document.querySelectorAll('.title a').forEach(link => console.log(link.href))
```

This was the original solution but can cause problems with too long URL's which the Browser shorten between with "...".


Save the collected links in a Textfile `list.txt` and run:

## Download

`youtube-dl -i -o "%(autonumber)s-%(title)s.%(ext)s" -a list.txt`

## Download for Pro-User

*This Tip comes from [torfeld6](https://github.com/torfeld6)*

Download Pro content without clicking through the whole playlist:

`youtube-dl -i -o "%(autonumber)s-%(title)s.%(ext)s" -a list.txt --cookie ../cookies.txt`

The cookies.txt can be downloaded via <https://chrome.google.com/webstore/detail/cookiestxt/njabckikapfpffapmjgojcnbfjonfjfg>

*I don't have a Pro Account yet so i can't test it*

# Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_


[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)[![Docker](https://github.frapsoft.com/social/docker.png)](https://hub.docker.com/u/frapsoft/)[![npm](https://github.frapsoft.com/social/npm.png)](https://www.npmjs.com/~ellerbrock)[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)

### License 

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/ellerbrock/" property="cc:attributionName" rel="cc:attributionURL">Maik Ellerbrock</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
