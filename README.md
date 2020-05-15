## Build

* Create components with `ng` cli.
* After creating a component add the same component to module's `entryComponents` .
* Also any new addition to `AppModule` should be replicated to `app.module.prod.ts` file except the `AppComponent` . `AppComponent` will not be used in production build.
* Run `ng build --prod` to build the project.
* Copy the output files from `dist/` directory any of your folders.
* Add the script tags from `index.html` file of `dist/` folder to your html files. Rename the path according to your directory structure.
* Use the the exported directive names you used in `components.t` s file inside `body` of your html files.
