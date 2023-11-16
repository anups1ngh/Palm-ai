# <YourPackageName>

## Introduction

`palm-ai-helper` is a Node.js library that provides a simple interface for interacting with the Google Generative Language API for conversational generation. It simplifies the process of sending queries to the DiscussService of the Google Generative Language API.

## Installation

To use `palm-ai-helper`, you can install it via npm:

```bash
npm i palm-ai-helper
```

# Usage

## Quick Start

```javascript
const Palm = require("palm-ai-helper");
const API_KEY = "YOUR_GOOGLE_API_KEY";

Palm.setAPIKey(API);

async function test() {
  const res = await Palm.main("How to make pizza at home?");
  console.log(res);
}

test();
```

## Initializing and Sending Queries

1. Import the library

```javascript
const Palm = require("palm-ai-helper");
```

2. Set your API key:

```javascript
const API_KEY = "YOUR_GOOGLE_API_KEY";
Palm.setAPIKey(API);
```

3. Send a query:

```javascript
async function test() {
  const res = await Palm.main("How to make pizza at home?");
  console.log(res);
}

test();
```

## Additional Methods

`PalmHelper(query)`

- `query`: The query to send to the DiscussService of the Google Generative Language API.

```javascript
Palm.PalmHelper("What is the best smartPhone today?").then((res) => {
  console.log(res);
});
```

## Configuration

Before using <b>Palm</b>, make sure to obtain your API key from [Google Generative AI API](https://developers.generativeai.google/products/palm?authuser=3).

## License

```text

MIT License

```
