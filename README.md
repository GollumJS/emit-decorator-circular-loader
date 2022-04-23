# Emit Decorator Circular reflect-metadata

Add support circular import on typescript emit decorator metadata


[![Licence](https://img.shields.io/npm/l/emit-decorator-circular-loader.svg?colorB=4B9081)](https://github.com/GollumJS/emit-decorator-circular-loader/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/emit-decorator-circular-loader.svg)](https://www.npmjs.com/package/emit-decorator-circular-loader)
[![Discord](https://img.shields.io/discord/671741944149573687?color=purple&label=discord)](https://discord.gg/xMBc5SQ)


## Install
```
npm install -s emit-decorator-circular-reflect-metadata
npm install -D emit-decorator-circular-loader
```


## tsconfig.json


```javascript

{
    // [...]
    
    "compilerOptions": {
        
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "types": [
            "reflect-metadata"
            
            // [...]
        ],
        
        // [...]
    }
    // [...]
}
```


## Webpack


```javascript

module.exports = {
    
    // [...]
    
    module: {
        rules: [
        
            // [...]
        
            {
                test: /\.tsx?$/,
                use: [
                    
                    // [...]
                    
                    {
                        loader: 'emit-decorator-circular-loader'
                    },
                    {
                        loader: 'ts-loader',
                        // [...]
                    }
                    
                    // [...]
                ],
            }
            
            // [...]
    
        ]
    }
    
    // [...]

}

```


## Use

Replace classic import:

```javascript
import 'reflect-metadata';

```

By:


```javascript
import 'emit-decorator-circular-reflect-metadata';

```




## Example

This example not works if classic typescript whithout loader


file `Book.ts`

```typescript

import {Author} from './Author';


@DecoratorClass()
export class Book {

    @DecoratorField()
    public author: Author;

}

```

file `Author.ts`

```typescript

import {Book} from './Book';


@DecoratorClass()
export class Author {

    @DecoratorField()
    public author: Book;

}

```
