declare var System: SystemJSLoader.System;

//System.config needs to be fixed so it can work with ng2-webstorage
System.config(

JSON.parse('<%= SYSTEM_CONFIG_DEV %>')

);
