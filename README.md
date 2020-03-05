# **insomnia-plugin-csrf-decoder**

Plugin for help make url decode for xsrf token.
```
{
   "xsrf_token": "{% request 'cookie', 'XSRF-TOKEN', 0 %}"   
}
 ```
 
 ### To install plugin manually
 1) Checkout this repository;
 2) run `npm i` 
 3) Copy source code to insomnia plugins directory(see paths below);
 4) Create environment variables(see structure above) with your values; 
 
 - ___MacOS_:__ ~/Library/Application\ Support/Insomnia/plugins/
 
 - _**Windows**_: %APPDATA%\Insomnia\plugins\
 
 - _**Linux**_: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/
 
 
 ### Todos
  - Write Tests
  - Publish plugin to [npm](https://www.npmjs.com/)
 
