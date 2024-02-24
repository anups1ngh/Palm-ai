# PaLM AI Helper [Demo](https://youtu.be/rZFi79ioY-s)

## Introduction

`palm-ai-helper` is a Node.js library that provides a simple interface for interacting with the Google Generative Language API for conversational generation. It simplifies the process of sending queries to the DiscussService of the Google Generative Language API.

## Installation

To use `palm-ai-helper`, you can install it via npm:

```bash
npm i palm-ai-helper
```

# Usage

## Configuration

Before using <b>Palm</b>, make sure to obtain your API key from [Google Generative AI API](https://developers.generativeai.google/products/palm?authuser=3).

## Quick Start

```javascript
const Palm = require("palm-ai-helper");
const Palm.setAPIKey('YOUR_API_KEY');

async function test(){
    await palm.askAI('how to make pizza? ').then(result => console.log(result));
    await palm.askAI('what will happend if i throw it in water?').then(result => console.log(result));
}
test();
```

## License

```text

MIT License

```
