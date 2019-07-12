# Overview

This section should contain an overview of the data provided and the API purpose.

#### USING THE API

We built this API to have an unlimited supply of dad jokes for our [DadJokes](https://github.com/KegenGuyll/DadJokes) application.
If you find yourself overwhelmed, we organized this documentation into four major areas.

- [Getting started](#getting-started) introduces you to the operations offered by the API.
- [API calls](#api-calls) gives you examples of those operations
- [Field reference](#field-reference) Lists and describes the type of inforamtion provided by the API

# Getting Started

The current version of the API lives at `https://us-central1-dadsofunny.cloudfunctions.net/DadJokes`

#### Versions

|  Version  |  Date   |       Changes        |
| :-------: | :-----: | :------------------: |
| `Version` | 7/7/19  |  Initial deployment  |
| `Version` | 7/11/19 | Cleaned up endpoints |

#### Endpoints

| Endpoint                                            |                                What it does                                 |
| --------------------------------------------------- | :-------------------------------------------------------------------------: |
| [`/random/jokes`](#randomjokes)                     | Returns a joke object that contains a `setup`, `punchline`, `type` and `id` |
| [`/random/jokes/:count`](#randomjokescount)         |                   Returns an array with 10 jokes objects.                   |
| [`/jokes/:id`](#jokesid)                            |                  Returns a joke object with a specific id.                  |
| [`/random/type/:type`](#randomtypetype)             |            Returns a joke object randomly with a specific type.             |
| [`/random/type/:type/:count`](#randomtypetypecount) |         Returns an array with 10 random jokes with a specific type.         |

#### Types

| Type        |
| ----------- |
| General     |
| Knock-Knock |
| Programming |

# API calls

This API supports a data response in JSON format.

### /random/jokes

```json
{
  "id": 53,
  "type": "general",
  "setup": "How do you make holy water?",
  "punchline": "You boil the hell out of it"
}
```

### /random/jokes/:count

`/random/jokes/2`

```json
[
  {
    "id": 56,
    "type": "programming",
    "setup": "How do you check if a webpage is HTML5?",
    "punchline": "Try it out on Internet Explorer"
  },
  {
    "id": 231,
    "type": "general",
    "setup": "What do you call an eagle who can play the piano?",
    "punchline": "Talonted!"
  }
]
```

### /jokes/:id

`/jokes/1`

```json
[
  {
    "id": 1,
    "type": "general",
    "setup": "What did the fish say when it hit the wall?",
    "punchline": "Dam."
  }
]
```

### /random/type/:type

`/random/type/knock-knock`

```json
[
  {
    "id": 12,
    "type": "knock-knock",
    "setup": "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
    "punchline": "Never mind. It's pointless."
  }
]
```

### /random/type/:type/:count

`/random/type/knock-knock/2`

```json
[
  {
    "id": 61,
    "type": "knock-knock",
    "setup": "Knock knock. \n Who's there? \n Hatch. \n Hatch who?",
    "punchline": "Bless you!"
  },
  {
    "id": 34,
    "type": "knock-knock",
    "setup": "Knock knock. \n Who's there? \n Opportunity.",
    "punchline": "That is impossible. Opportunity doesn’t come knocking twice!"
  }
]
```

# Field reference

| Field name |      Description       | Data type |
| :--------: | :--------------------: | :-------: |
|     ID     |   Unique identifier    |  string   |
|    TYPE    |   Identifer of group   |  string   |
|   COUNT    | Number of wanted items |  string   |
