# graphql-typescript-boilerplate

A boilerplate project for quickly building Graphql APIs and with typescript 🚀

## Installation

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Commands

Running locally:

```bash
yarn dev
```

Kill locally:

```bash
yarn kill
```

Running in production:

```bash
yarn start:prod
```

Testing:

```bash
# run all tests
yarn test
```

Build:

```bash
yarn build
```

TODOS: ✔ or ✘

```bash
- category :
[✘] fields( name,... )
[✘] brands[]
[✘] products[]

- Product
[✘] fields( name,.... )
[✘] store
[✘] brand?
[✘] category
[✘] variables[

    {
        type: color_size,
        elements : [
            {
                color : red,
                sizes : [s,m]
            }
            {
                color : blue,
                sizes : [m,l]
            }
        ],
    }
]

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr>
