07 Mar 2021 ==> 1st build <br/>
11 Feb 2022 ==> api change

# Country Info - React App <|> [Live Link](https://countriy-information.netlify.app)

## API Use
### Get all items
```
https://restcountries.com/v3.1/all
```

### Get only search item
```sh
https://restcountries.com/v3.1/name/${searchCountry}
```

## Concept Implementation
* Parent Child Component 
* Sibling Component Data Passing
* Object `Chaining`
* Object Destructuring
* Object Destructuring with `alias naming`
* Object Destructuring with array value access inside JSX
* JSX ternary operation
* implement -> useState & useEffect with & without dependency

## Features & Usage
* Searching option
* After click `in` country, details info `show | toggle`
* After click `outside`, details info `hide | toggle`
* Bootstrap | linking at `index.html` page
* `Pagination`

<br/> 

# Run Locally

Clone the project

```sh
git clone https://github.com/taiseen/country_info.git 
```

Go to the project directory

```sh
cd country_info
```

1st - Install dependencies

```sh
npm install
```

Then start the server

```sh
npm run start
```

To deploy this project run

```sh
npm run deploy
```