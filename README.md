# Overview
This section should contain an overview of the data provided and the API purpose.

#### USING THE API

We built this API to have an unlimited supply of dad jokes for our [DadJokes](https://github.com/KegenGuyll/DadJokes) application. 
If you find yourself overwhelmed, we organized this documentation into four major areas.

* [Getting started](#getting-started) introduces you to the operations offered by the API.
* [API calls](#api-calls) gives you examples of those operations
* [Field reference](#field-reference) Lists and describes the type of inforamtion provided by the API





# Getting Started

The current version of the API lives at ```https://us-central1-dadsofunny.cloudfunctions.net/DadJokes```

#### Versions

| Version       | Date          | Changes            |
| ------------- |:-------------:|:------------------:|
| `Version`     |  7/7/19       | Initial deployment | 


#### Endpoints

| Enpoint       | What it does                                                                |
| ------------- |:---------------------------------------------------------------------------:|
| [`/random_joke`](#/random_joke)| Returns a joke object that contains a `setup`, `punchline`, `type` and `id` |
| `/random_ten` | Returns an array with 10 jokes objects.                                     |
| `/jokes/:id`  | Returns a joke object with a specific id.                                   |
| `/jokes/:type/random`| Returns a joke object randomly with a specific type.                 |
| `/jokes/:type/ten`| Returns an array with 10 random jokes with a specific type.             | 


#### Types
|Type|
|----|
|General|
|Knock-Knock|
|Programming|



# API calls

This API supports a data response in JSON format.

### /random_joke
```json
{
    "id": 53,
    "type": "general",
    "setup": "How do you make holy water?",
    "punchline": "You boil the hell out of it"
}
```

### /random_ten
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
    },
    {
        "id": 117,
        "type": "general",
        "setup": "How come the stadium got hot after the game?",
        "punchline": "Because all of the fans left."
    },
    {
        "id": 163,
        "type": "general",
        "setup": "What did one nut say as he chased another nut?",
        "punchline": " I'm a cashew!"
    },
    {
        "id": 52,
        "type": "general",
        "setup": "Why did the invisible man turn down the job offer?",
        "punchline": "He couldn't see himself doing it"
    },
    {
        "id": 105,
        "type": "general",
        "setup": "Did you know that protons have mass?",
        "punchline": "I didn't even know they were catholic."
    },
    {
        "id": 260,
        "type": "general",
        "setup": "What is the leading cause of dry skin?",
        "punchline": "Towels"
    },
    {
        "id": 38,
        "type": "general",
        "setup": "I'm reading a book about anti-gravity...",
        "punchline": "It's impossible to put down"
    },
    {
        "id": 21,
        "type": "general",
        "setup": "A termite walks into a bar and says...",
        "punchline": "'Where is the bar tended?'"
    },
    {
        "id": 64,
        "type": "general",
        "setup": "Did you hear about the hungry clock?",
        "punchline": "It went back four seconds."
    }
]
```


### /jokes/:id
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


### /jokes/:type/random
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



### /jokes/:type/ten
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
    },
    {
        "id": 14,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
        "punchline": "I didn't know you could yodel!"
    },
    {
        "id": 13,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
        "punchline": "No, cows go moo."
    },
    {
        "id": 12,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
        "punchline": "Never mind. It's pointless."
    }
]
```


# Field reference


|Field name | Description | Data type |
|-----------|:-----------:|:----------|
|ID         |Unique identifier| string|
|TYPE       |Identifer of group| string|  
