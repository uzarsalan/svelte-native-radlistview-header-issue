/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

// console.log("test");

import { svelteNative } from "svelte-native";
import RadListViewElement from "svelte-native-nativescript-ui/listview";
import App from "./App.svelte";
RadListViewElement.register();
svelteNative(App, {});
