# xs-checklist

> Checklist is a container for a series CheckBox components

## CheckList, with
* user customizable icons, using emoticons
* returns expected e.target object for controlled forms

## Expectations and Dependencies
* depends on `xs-checkbox`
* expects data to have keys: 'display', 'id', and 'enabled', as below

```js
[
  {
    id: 'bittrex',
    display: 'Bittrex',
    enabled: true,
  }, {
    id: 'binance',
    display: 'Binance',
    enabled: true,
  }, {
    ...
```

# Installation
Use npm, yarn os other npm package manager you choose to install `xs-checkbox`.

```sh
# npm
npm i -S xs-checklist

# yarn
yarn add xs-checklist
```

# Usage
Shows simple assignment of checkmark emoticon.

```js
import CheckList from 'xs-checklist'

...

handleCheckListChange(e){
  // do something with checked value, i.e., update data structure
  console.log(`${e.target.name}, checked: ${e.target.checked}`)
}
...
<CheckList
  className='my-check-list-class'
  items={data}
  checkedIcon='💰'
  onChange={this.handleCheckListChange}
/>

```
# Style
Checklist has a 'className' props, which enables for class name more suitable
to your project and tastes. Sure, this has lots of room for improvement.

```css

// the class we assigned to the CheckList 'className' prop.
.my-check-list-class {
  list-style-type: none;
  margin: 2px;
  padding:2px;
  background: #eee;
  border: 2px solid #888;
  width: 250px;
  color: #222;
}

// you can go deeper too, of course
.my-check-list-class li {
  width: 250px;
  height: 25px;
  color: #fff;
  font-size: 1.2em;
}
```

# Contributing

Issues and Pull requests are always welcome. Please keep in mind that there is a code of conduct.

To get started, install the dev dependencies and build the exports if needed.

```sh
# install dependencies
npm install

# build the project for distribution
npm run build:prod
```

# [Code of Conduct](CODE_OF_CONDUCT.md)

# [License](LICENSE.md)
