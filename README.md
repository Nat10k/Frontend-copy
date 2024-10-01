# Frontend

## Tooling

Static assets generated to `dist` directory by using this command:
```
npm run build
```

For developing, to watch and rebuild change, use following command:
```
npm run build -- -w
```

Since this app generate static assets, testing need to start mockup server. This server will reload for every change in `dist` directory. Run command below in parallel with watch build option above to start developing:
```
npm run mockup-server
```

In unix, parallel command can be achived with:
```
npm run build -- -w & npm run mockup-server
```


