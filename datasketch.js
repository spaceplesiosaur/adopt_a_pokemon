//questions

const questions = [
    {
        "id": 1,
        "question": "Am the life of the party",
        "category": "extraversion",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.082Z",
        "updated_at": "2016-04-28T04:16:34.082Z"
    },
    {
        "id": 2,
        "question": "Feel little concern for others",
        "category": "agreeableness",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.091Z",
        "updated_at": "2016-04-28T04:16:34.091Z"
    },
    {
        "id": 3,
        "question": "Am always prepared",
        "category": "conscientiousness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.095Z",
        "updated_at": "2016-04-28T04:16:34.095Z"
    },
    {
        "id": 4,
        "question": "Get stressed out easily",
        "category": "emotional_stability",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.100Z",
        "updated_at": "2016-04-28T04:16:34.100Z"
    },
    {
        "id": 5,
        "question": "Have a rich vocabulary",
        "category": "intellect",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.104Z",
        "updated_at": "2016-04-28T04:16:34.104Z"
    },
    {
        "id": 6,
        "question": "Don't talk a lot",
        "category": "extraversion",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.109Z",
        "updated_at": "2016-04-28T04:16:34.109Z"
    },
    {
        "id": 7,
        "question": "Am interested in people",
        "category": "agreeableness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.114Z",
        "updated_at": "2016-04-28T04:16:34.114Z"
    },
    {
        "id": 8,
        "question": "Leave my belongings around",
        "category": "conscientiousness",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.119Z",
        "updated_at": "2016-04-28T04:16:34.119Z"
    },
    {
        "id": 9,
        "question": "Am relaxed most of the time",
        "category": "emotional_stability",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.124Z",
        "updated_at": "2016-04-28T04:16:34.124Z"
    },
    {
        "id": 10,
        "question": "Have difficulty understanding abstract ideas",
        "category": "intellect",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.137Z",
        "updated_at": "2016-04-28T04:16:34.137Z"
    },
    {
        "id": 11,
        "question": "Feel comfortable around people",
        "category": "extraversion",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.142Z",
        "updated_at": "2016-04-28T04:16:34.142Z"
    },
    {
        "id": 12,
        "question": "Insult people",
        "category": "agreeableness",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.148Z",
        "updated_at": "2016-04-28T04:16:34.148Z"
    },
    {
        "id": 13,
        "question": "Pay attention to details",
        "category": "conscientiousness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.152Z",
        "updated_at": "2016-04-28T04:16:34.152Z"
    },
    {
        "id": 14,
        "question": "Worry about things",
        "category": "emotional_stability",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.157Z",
        "updated_at": "2016-04-28T04:16:34.157Z"
    },
    {
        "id": 15,
        "question": "Have a vivid imagination",
        "category": "intellect",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.161Z",
        "updated_at": "2016-04-28T04:16:34.161Z"
    },
    {
        "id": 16,
        "question": "Keep in the background",
        "category": "extraversion",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.166Z",
        "updated_at": "2016-04-28T04:16:34.166Z"
    },
    {
        "id": 17,
        "question": "Sympathize with other's feelings",
        "category": "agreeableness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.171Z",
        "updated_at": "2016-04-28T04:16:34.171Z"
    },
    {
        "id": 18,
        "question": "Make a mess of things",
        "category": "conscientiousness",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.175Z",
        "updated_at": "2016-04-28T04:16:34.175Z"
    },
    {
        "id": 19,
        "question": "Seldom feel blue",
        "category": "emotional_stability",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.182Z",
        "updated_at": "2016-04-28T04:16:34.182Z"
    },
    {
        "id": 20,
        "question": "Am not interested in abstract ideas",
        "category": "intellect",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.187Z",
        "updated_at": "2016-04-28T04:16:34.187Z"
    },
    {
        "id": 21,
        "question": "Start conversations",
        "category": "extraversion",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.192Z",
        "updated_at": "2016-04-28T04:16:34.192Z"
    },
    {
        "id": 22,
        "question": "Am not interested in other people's problems",
        "category": "agreeableness",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.196Z",
        "updated_at": "2016-04-28T04:16:34.196Z"
    },
    {
        "id": 23,
        "question": "Get chores done right away",
        "category": "conscientiousness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.201Z",
        "updated_at": "2016-04-28T04:16:34.201Z"
    },
    {
        "id": 24,
        "question": "Am easily disturbed",
        "category": "emotional_stability",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.205Z",
        "updated_at": "2016-04-28T04:16:34.205Z"
    },
    {
        "id": 25,
        "question": "Have excellent ideas",
        "category": "intellect",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.210Z",
        "updated_at": "2016-04-28T04:16:34.210Z"
    },
    {
        "id": 26,
        "question": "Have little to say",
        "category": "extraversion",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.214Z",
        "updated_at": "2016-04-28T04:16:34.214Z"
    },
    {
        "id": 27,
        "question": "Have a soft heart",
        "category": "agreeableness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.219Z",
        "updated_at": "2016-04-28T04:16:34.219Z"
    },
    {
        "id": 28,
        "question": "Often forget to put things back in their place",
        "category": "conscientiousness",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.225Z",
        "updated_at": "2016-04-28T04:16:34.225Z"
    },
    {
        "id": 29,
        "question": "Get upset easily",
        "category": "emotional_stability",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.229Z",
        "updated_at": "2016-04-28T04:16:34.229Z"
    },
    {
        "id": 30,
        "question": "Do not have a good imagination",
        "category": "intellect",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.234Z",
        "updated_at": "2016-04-28T04:16:34.234Z"
    },
    {
        "id": 31,
        "question": "Talk to a lot of different people at parties",
        "category": "extraversion",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.239Z",
        "updated_at": "2016-04-28T04:16:34.239Z"
    },
    {
        "id": 32,
        "question": "Am not really interested in others",
        "category": "agreeableness",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.243Z",
        "updated_at": "2016-04-28T04:16:34.243Z"
    },
    {
        "id": 33,
        "question": "Like order",
        "category": "conscientiousness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.248Z",
        "updated_at": "2016-04-28T04:16:34.248Z"
    },
    {
        "id": 34,
        "question": "Change my mood a lot",
        "category": "emotional_stability",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.252Z",
        "updated_at": "2016-04-28T04:16:34.252Z"
    },
    {
        "id": 35,
        "question": "Am quick to understand things",
        "category": "intellect",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.257Z",
        "updated_at": "2016-04-28T04:16:34.257Z"
    },
    {
        "id": 36,
        "question": "Don't like to draw attention to myself",
        "category": "extraversion",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.261Z",
        "updated_at": "2016-04-28T04:16:34.261Z"
    },
    {
        "id": 37,
        "question": "Take time out for others",
        "category": "agreeableness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.269Z",
        "updated_at": "2016-04-28T04:16:34.269Z"
    },
    {
        "id": 38,
        "question": "Shirk my duties",
        "category": "conscientiousness",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.273Z",
        "updated_at": "2016-04-28T04:16:34.273Z"
    },
    {
        "id": 39,
        "question": "Have frequent mood swings",
        "category": "emotional_stability",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.283Z",
        "updated_at": "2016-04-28T04:16:34.283Z"
    },
    {
        "id": 40,
        "question": "Use difficult words",
        "category": "intellect",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.288Z",
        "updated_at": "2016-04-28T04:16:34.288Z"
    },
    {
        "id": 41,
        "question": "Don't mind being the center of attention",
        "category": "extraversion",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.295Z",
        "updated_at": "2016-04-28T04:16:34.295Z"
    },
    {
        "id": 42,
        "question": "Feel others' emotions",
        "category": "agreeableness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.300Z",
        "updated_at": "2016-04-28T04:16:34.300Z"
    },
    {
        "id": 43,
        "question": "Follow a schedule",
        "category": "conscientiousness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.305Z",
        "updated_at": "2016-04-28T04:16:34.305Z"
    },
    {
        "id": 44,
        "question": "Get irritated easily",
        "category": "emotional_stability",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.309Z",
        "updated_at": "2016-04-28T04:16:34.309Z"
    },
    {
        "id": 45,
        "question": "Spend time reflecting on things",
        "category": "intellect",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.314Z",
        "updated_at": "2016-04-28T04:16:34.314Z"
    },
    {
        "id": 46,
        "question": "Am quiet around strangers",
        "category": "extraversion",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.322Z",
        "updated_at": "2016-04-28T04:16:34.322Z"
    },
    {
        "id": 47,
        "question": "Make people feel at ease",
        "category": "agreeableness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.330Z",
        "updated_at": "2016-04-28T04:16:34.330Z"
    },
    {
        "id": 48,
        "question": "Am exacting in my work",
        "category": "conscientiousness",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.339Z",
        "updated_at": "2016-04-28T04:16:34.339Z"
    },
    {
        "id": 49,
        "question": "Often feel blue",
        "category": "emotional_stability",
        "scale": -1,
        "created_at": "2016-04-28T04:16:34.345Z",
        "updated_at": "2016-04-28T04:16:34.345Z"
    },
    {
        "id": 50,
        "question": "Am full of ideas",
        "category": "intellect",
        "scale": 1,
        "created_at": "2016-04-28T04:16:34.351Z",
        "updated_at": "2016-04-28T04:16:34.351Z"
    }
]


const natures = {
    "results": [
        {
            "name": "hardy",
            "url": "https://pokeapi.co/api/v2/nature/1/"
        },
        {
            "name": "bold",
            "url": "https://pokeapi.co/api/v2/nature/2/"
        },
        {
            "name": "modest",
            "url": "https://pokeapi.co/api/v2/nature/3/"
        },
        {
            "name": "calm",
            "url": "https://pokeapi.co/api/v2/nature/4/"
        },
        {
            "name": "timid",
            "url": "https://pokeapi.co/api/v2/nature/5/"
        },
        {
            "name": "lonely",
            "url": "https://pokeapi.co/api/v2/nature/6/"
        },
        {
            "name": "docile",
            "url": "https://pokeapi.co/api/v2/nature/7/"
        },
        {
            "name": "mild",
            "url": "https://pokeapi.co/api/v2/nature/8/"
        },
        {
            "name": "gentle",
            "url": "https://pokeapi.co/api/v2/nature/9/"
        },
        {
            "name": "hasty",
            "url": "https://pokeapi.co/api/v2/nature/10/"
        },
        {
            "name": "adamant",
            "url": "https://pokeapi.co/api/v2/nature/11/"
        },
        {
            "name": "impish",
            "url": "https://pokeapi.co/api/v2/nature/12/"
        },
        {
            "name": "bashful",
            "url": "https://pokeapi.co/api/v2/nature/13/"
        },
        {
            "name": "careful",
            "url": "https://pokeapi.co/api/v2/nature/14/"
        },
        {
            "name": "rash",
            "url": "https://pokeapi.co/api/v2/nature/15/"
        },
        {
            "name": "jolly",
            "url": "https://pokeapi.co/api/v2/nature/16/"
        },
        {
            "name": "naughty",
            "url": "https://pokeapi.co/api/v2/nature/17/"
        },
        {
            "name": "lax",
            "url": "https://pokeapi.co/api/v2/nature/18/"
        },
        {
            "name": "quirky",
            "url": "https://pokeapi.co/api/v2/nature/19/"
        },
        {
            "name": "naive",
            "url": "https://pokeapi.co/api/v2/nature/20/"
        }
    ]
}


const natures = {
    "count": 20,
    "next": null,
    "previous": null,
    "results": [
        {
            "name": "normal",
            "url": "https://pokeapi.co/api/v2/type/1/"
        },
        {
            "name": "fighting",
            "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
            "name": "flying",
            "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
            "name": "ground",
            "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
            "name": "rock",
            "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
            "name": "bug",
            "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
            "name": "ghost",
            "url": "https://pokeapi.co/api/v2/type/8/"
        },
        {
            "name": "steel",
            "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
            "name": "fire",
            "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
            "name": "water",
            "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
            "name": "electric",
            "url": "https://pokeapi.co/api/v2/type/13/"
        },
        {
            "name": "psychic",
            "url": "https://pokeapi.co/api/v2/type/14/"
        },
        {
            "name": "ice",
            "url": "https://pokeapi.co/api/v2/type/15/"
        },
        {
            "name": "dragon",
            "url": "https://pokeapi.co/api/v2/type/16/"
        },
        {
            "name": "dark",
            "url": "https://pokeapi.co/api/v2/type/17/"
        },
        {
            "name": "fairy",
            "url": "https://pokeapi.co/api/v2/type/18/"
        },
        {
            "name": "unknown",
            "url": "https://pokeapi.co/api/v2/type/10001/"
        },
        {
            "name": "shadow",
            "url": "https://pokeapi.co/api/v2/type/10002/"
        }
    ]
}

const iceTypeExample = {
    "name": "ice",

    "pokemon": [
        {
            "pokemon": {
                "name": "dewgong",
                "url": "https://pokeapi.co/api/v2/pokemon/87/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "cloyster",
                "url": "https://pokeapi.co/api/v2/pokemon/91/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "jynx",
                "url": "https://pokeapi.co/api/v2/pokemon/124/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "lapras",
                "url": "https://pokeapi.co/api/v2/pokemon/131/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "articuno",
                "url": "https://pokeapi.co/api/v2/pokemon/144/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "sneasel",
                "url": "https://pokeapi.co/api/v2/pokemon/215/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "swinub",
                "url": "https://pokeapi.co/api/v2/pokemon/220/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "piloswine",
                "url": "https://pokeapi.co/api/v2/pokemon/221/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "delibird",
                "url": "https://pokeapi.co/api/v2/pokemon/225/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "smoochum",
                "url": "https://pokeapi.co/api/v2/pokemon/238/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "snorunt",
                "url": "https://pokeapi.co/api/v2/pokemon/361/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "glalie",
                "url": "https://pokeapi.co/api/v2/pokemon/362/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "spheal",
                "url": "https://pokeapi.co/api/v2/pokemon/363/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "sealeo",
                "url": "https://pokeapi.co/api/v2/pokemon/364/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "walrein",
                "url": "https://pokeapi.co/api/v2/pokemon/365/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "regice",
                "url": "https://pokeapi.co/api/v2/pokemon/378/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "snover",
                "url": "https://pokeapi.co/api/v2/pokemon/459/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "abomasnow",
                "url": "https://pokeapi.co/api/v2/pokemon/460/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "weavile",
                "url": "https://pokeapi.co/api/v2/pokemon/461/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "glaceon",
                "url": "https://pokeapi.co/api/v2/pokemon/471/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "mamoswine",
                "url": "https://pokeapi.co/api/v2/pokemon/473/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "froslass",
                "url": "https://pokeapi.co/api/v2/pokemon/478/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "vanillite",
                "url": "https://pokeapi.co/api/v2/pokemon/582/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "vanillish",
                "url": "https://pokeapi.co/api/v2/pokemon/583/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "vanilluxe",
                "url": "https://pokeapi.co/api/v2/pokemon/584/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "cubchoo",
                "url": "https://pokeapi.co/api/v2/pokemon/613/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "beartic",
                "url": "https://pokeapi.co/api/v2/pokemon/614/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "cryogonal",
                "url": "https://pokeapi.co/api/v2/pokemon/615/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "kyurem",
                "url": "https://pokeapi.co/api/v2/pokemon/646/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "amaura",
                "url": "https://pokeapi.co/api/v2/pokemon/698/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "aurorus",
                "url": "https://pokeapi.co/api/v2/pokemon/699/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "bergmite",
                "url": "https://pokeapi.co/api/v2/pokemon/712/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "avalugg",
                "url": "https://pokeapi.co/api/v2/pokemon/713/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "crabominable",
                "url": "https://pokeapi.co/api/v2/pokemon/740/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "rotom-frost",
                "url": "https://pokeapi.co/api/v2/pokemon/10010/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "castform-snowy",
                "url": "https://pokeapi.co/api/v2/pokemon/10015/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "kyurem-black",
                "url": "https://pokeapi.co/api/v2/pokemon/10022/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "kyurem-white",
                "url": "https://pokeapi.co/api/v2/pokemon/10023/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "abomasnow-mega",
                "url": "https://pokeapi.co/api/v2/pokemon/10060/"
            },
            "slot": 2
        },
        {
            "pokemon": {
                "name": "glalie-mega",
                "url": "https://pokeapi.co/api/v2/pokemon/10074/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "sandshrew-alola",
                "url": "https://pokeapi.co/api/v2/pokemon/10101/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "sandslash-alola",
                "url": "https://pokeapi.co/api/v2/pokemon/10102/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "vulpix-alola",
                "url": "https://pokeapi.co/api/v2/pokemon/10103/"
            },
            "slot": 1
        },
        {
            "pokemon": {
                "name": "ninetales-alola",
                "url": "https://pokeapi.co/api/v2/pokemon/10104/"
            },
            "slot": 1
        }
    ]
}


const pokemonCallExample = {
    "count": 807,
    "next": "https://pokeapi.co/api/v2/pokemon-species/?offset=20&limit=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon-species/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/5/"
        },
        {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon-species/6/"
        },
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon-species/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon-species/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon-species/9/"
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon-species/10/"
        },
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon-species/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon-species/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon-species/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon-species/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon-species/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon-species/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon-species/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon-species/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon-species/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon-species/20/"
        }
    ]
}

const next1 = {
    "count": 807,
    "next": "https://pokeapi.co/api/v2/pokemon-species/?offset=151&limit=131",
    "previous": "https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=20",
    "results": [
        {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon-species/21/"
        },
        {
            "name": "fearow",
            "url": "https://pokeapi.co/api/v2/pokemon-species/22/"
        },
        {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon-species/23/"
        },
        {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon-species/24/"
        },
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/25/"
        },
        {
            "name": "raichu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/26/"
        },
        {
            "name": "sandshrew",
            "url": "https://pokeapi.co/api/v2/pokemon-species/27/"
        },
        {
            "name": "sandslash",
            "url": "https://pokeapi.co/api/v2/pokemon-species/28/"
        },
        {
            "name": "nidoran-f",
            "url": "https://pokeapi.co/api/v2/pokemon-species/29/"
        },
        {
            "name": "nidorina",
            "url": "https://pokeapi.co/api/v2/pokemon-species/30/"
        },
        {
            "name": "nidoqueen",
            "url": "https://pokeapi.co/api/v2/pokemon-species/31/"
        },
        {
            "name": "nidoran-m",
            "url": "https://pokeapi.co/api/v2/pokemon-species/32/"
        },
        {
            "name": "nidorino",
            "url": "https://pokeapi.co/api/v2/pokemon-species/33/"
        },
        {
            "name": "nidoking",
            "url": "https://pokeapi.co/api/v2/pokemon-species/34/"
        },
        {
            "name": "clefairy",
            "url": "https://pokeapi.co/api/v2/pokemon-species/35/"
        },
        {
            "name": "clefable",
            "url": "https://pokeapi.co/api/v2/pokemon-species/36/"
        },
        {
            "name": "vulpix",
            "url": "https://pokeapi.co/api/v2/pokemon-species/37/"
        },
        {
            "name": "ninetales",
            "url": "https://pokeapi.co/api/v2/pokemon-species/38/"
        },
        {
            "name": "jigglypuff",
            "url": "https://pokeapi.co/api/v2/pokemon-species/39/"
        },
        {
            "name": "wigglytuff",
            "url": "https://pokeapi.co/api/v2/pokemon-species/40/"
        },
        {
            "name": "zubat",
            "url": "https://pokeapi.co/api/v2/pokemon-species/41/"
        },
        {
            "name": "golbat",
            "url": "https://pokeapi.co/api/v2/pokemon-species/42/"
        },
        {
            "name": "oddish",
            "url": "https://pokeapi.co/api/v2/pokemon-species/43/"
        },
        {
            "name": "gloom",
            "url": "https://pokeapi.co/api/v2/pokemon-species/44/"
        },
        {
            "name": "vileplume",
            "url": "https://pokeapi.co/api/v2/pokemon-species/45/"
        },
        {
            "name": "paras",
            "url": "https://pokeapi.co/api/v2/pokemon-species/46/"
        },
        {
            "name": "parasect",
            "url": "https://pokeapi.co/api/v2/pokemon-species/47/"
        },
        {
            "name": "venonat",
            "url": "https://pokeapi.co/api/v2/pokemon-species/48/"
        },
        {
            "name": "venomoth",
            "url": "https://pokeapi.co/api/v2/pokemon-species/49/"
        },
        {
            "name": "diglett",
            "url": "https://pokeapi.co/api/v2/pokemon-species/50/"
        },
        {
            "name": "dugtrio",
            "url": "https://pokeapi.co/api/v2/pokemon-species/51/"
        },
        {
            "name": "meowth",
            "url": "https://pokeapi.co/api/v2/pokemon-species/52/"
        },
        {
            "name": "persian",
            "url": "https://pokeapi.co/api/v2/pokemon-species/53/"
        },
        {
            "name": "psyduck",
            "url": "https://pokeapi.co/api/v2/pokemon-species/54/"
        },
        {
            "name": "golduck",
            "url": "https://pokeapi.co/api/v2/pokemon-species/55/"
        },
        {
            "name": "mankey",
            "url": "https://pokeapi.co/api/v2/pokemon-species/56/"
        },
        {
            "name": "primeape",
            "url": "https://pokeapi.co/api/v2/pokemon-species/57/"
        },
        {
            "name": "growlithe",
            "url": "https://pokeapi.co/api/v2/pokemon-species/58/"
        },
        {
            "name": "arcanine",
            "url": "https://pokeapi.co/api/v2/pokemon-species/59/"
        },
        {
            "name": "poliwag",
            "url": "https://pokeapi.co/api/v2/pokemon-species/60/"
        },
        {
            "name": "poliwhirl",
            "url": "https://pokeapi.co/api/v2/pokemon-species/61/"
        },
        {
            "name": "poliwrath",
            "url": "https://pokeapi.co/api/v2/pokemon-species/62/"
        },
        {
            "name": "abra",
            "url": "https://pokeapi.co/api/v2/pokemon-species/63/"
        },
        {
            "name": "kadabra",
            "url": "https://pokeapi.co/api/v2/pokemon-species/64/"
        },
        {
            "name": "alakazam",
            "url": "https://pokeapi.co/api/v2/pokemon-species/65/"
        },
        {
            "name": "machop",
            "url": "https://pokeapi.co/api/v2/pokemon-species/66/"
        },
        {
            "name": "machoke",
            "url": "https://pokeapi.co/api/v2/pokemon-species/67/"
        },
        {
            "name": "machamp",
            "url": "https://pokeapi.co/api/v2/pokemon-species/68/"
        },
        {
            "name": "bellsprout",
            "url": "https://pokeapi.co/api/v2/pokemon-species/69/"
        },
        {
            "name": "weepinbell",
            "url": "https://pokeapi.co/api/v2/pokemon-species/70/"
        },
        {
            "name": "victreebel",
            "url": "https://pokeapi.co/api/v2/pokemon-species/71/"
        },
        {
            "name": "tentacool",
            "url": "https://pokeapi.co/api/v2/pokemon-species/72/"
        },
        {
            "name": "tentacruel",
            "url": "https://pokeapi.co/api/v2/pokemon-species/73/"
        },
        {
            "name": "geodude",
            "url": "https://pokeapi.co/api/v2/pokemon-species/74/"
        },
        {
            "name": "graveler",
            "url": "https://pokeapi.co/api/v2/pokemon-species/75/"
        },
        {
            "name": "golem",
            "url": "https://pokeapi.co/api/v2/pokemon-species/76/"
        },
        {
            "name": "ponyta",
            "url": "https://pokeapi.co/api/v2/pokemon-species/77/"
        },
        {
            "name": "rapidash",
            "url": "https://pokeapi.co/api/v2/pokemon-species/78/"
        },
        {
            "name": "slowpoke",
            "url": "https://pokeapi.co/api/v2/pokemon-species/79/"
        },
        {
            "name": "slowbro",
            "url": "https://pokeapi.co/api/v2/pokemon-species/80/"
        },
        {
            "name": "magnemite",
            "url": "https://pokeapi.co/api/v2/pokemon-species/81/"
        },
        {
            "name": "magneton",
            "url": "https://pokeapi.co/api/v2/pokemon-species/82/"
        },
        {
            "name": "farfetchd",
            "url": "https://pokeapi.co/api/v2/pokemon-species/83/"
        },
        {
            "name": "doduo",
            "url": "https://pokeapi.co/api/v2/pokemon-species/84/"
        },
        {
            "name": "dodrio",
            "url": "https://pokeapi.co/api/v2/pokemon-species/85/"
        },
        {
            "name": "seel",
            "url": "https://pokeapi.co/api/v2/pokemon-species/86/"
        },
        {
            "name": "dewgong",
            "url": "https://pokeapi.co/api/v2/pokemon-species/87/"
        },
        {
            "name": "grimer",
            "url": "https://pokeapi.co/api/v2/pokemon-species/88/"
        },
        {
            "name": "muk",
            "url": "https://pokeapi.co/api/v2/pokemon-species/89/"
        },
        {
            "name": "shellder",
            "url": "https://pokeapi.co/api/v2/pokemon-species/90/"
        },
        {
            "name": "cloyster",
            "url": "https://pokeapi.co/api/v2/pokemon-species/91/"
        },
        {
            "name": "gastly",
            "url": "https://pokeapi.co/api/v2/pokemon-species/92/"
        },
        {
            "name": "haunter",
            "url": "https://pokeapi.co/api/v2/pokemon-species/93/"
        },
        {
            "name": "gengar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/94/"
        },
        {
            "name": "onix",
            "url": "https://pokeapi.co/api/v2/pokemon-species/95/"
        },
        {
            "name": "drowzee",
            "url": "https://pokeapi.co/api/v2/pokemon-species/96/"
        },
        {
            "name": "hypno",
            "url": "https://pokeapi.co/api/v2/pokemon-species/97/"
        },
        {
            "name": "krabby",
            "url": "https://pokeapi.co/api/v2/pokemon-species/98/"
        },
        {
            "name": "kingler",
            "url": "https://pokeapi.co/api/v2/pokemon-species/99/"
        },
        {
            "name": "voltorb",
            "url": "https://pokeapi.co/api/v2/pokemon-species/100/"
        },
        {
            "name": "electrode",
            "url": "https://pokeapi.co/api/v2/pokemon-species/101/"
        },
        {
            "name": "exeggcute",
            "url": "https://pokeapi.co/api/v2/pokemon-species/102/"
        },
        {
            "name": "exeggutor",
            "url": "https://pokeapi.co/api/v2/pokemon-species/103/"
        },
        {
            "name": "cubone",
            "url": "https://pokeapi.co/api/v2/pokemon-species/104/"
        },
        {
            "name": "marowak",
            "url": "https://pokeapi.co/api/v2/pokemon-species/105/"
        },
        {
            "name": "hitmonlee",
            "url": "https://pokeapi.co/api/v2/pokemon-species/106/"
        },
        {
            "name": "hitmonchan",
            "url": "https://pokeapi.co/api/v2/pokemon-species/107/"
        },
        {
            "name": "lickitung",
            "url": "https://pokeapi.co/api/v2/pokemon-species/108/"
        },
        {
            "name": "koffing",
            "url": "https://pokeapi.co/api/v2/pokemon-species/109/"
        },
        {
            "name": "weezing",
            "url": "https://pokeapi.co/api/v2/pokemon-species/110/"
        },
        {
            "name": "rhyhorn",
            "url": "https://pokeapi.co/api/v2/pokemon-species/111/"
        },
        {
            "name": "rhydon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/112/"
        },
        {
            "name": "chansey",
            "url": "https://pokeapi.co/api/v2/pokemon-species/113/"
        },
        {
            "name": "tangela",
            "url": "https://pokeapi.co/api/v2/pokemon-species/114/"
        },
        {
            "name": "kangaskhan",
            "url": "https://pokeapi.co/api/v2/pokemon-species/115/"
        },
        {
            "name": "horsea",
            "url": "https://pokeapi.co/api/v2/pokemon-species/116/"
        },
        {
            "name": "seadra",
            "url": "https://pokeapi.co/api/v2/pokemon-species/117/"
        },
        {
            "name": "goldeen",
            "url": "https://pokeapi.co/api/v2/pokemon-species/118/"
        },
        {
            "name": "seaking",
            "url": "https://pokeapi.co/api/v2/pokemon-species/119/"
        },
        {
            "name": "staryu",
            "url": "https://pokeapi.co/api/v2/pokemon-species/120/"
        },
        {
            "name": "starmie",
            "url": "https://pokeapi.co/api/v2/pokemon-species/121/"
        },
        {
            "name": "mr-mime",
            "url": "https://pokeapi.co/api/v2/pokemon-species/122/"
        },
        {
            "name": "scyther",
            "url": "https://pokeapi.co/api/v2/pokemon-species/123/"
        },
        {
            "name": "jynx",
            "url": "https://pokeapi.co/api/v2/pokemon-species/124/"
        },
        {
            "name": "electabuzz",
            "url": "https://pokeapi.co/api/v2/pokemon-species/125/"
        },
        {
            "name": "magmar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/126/"
        },
        {
            "name": "pinsir",
            "url": "https://pokeapi.co/api/v2/pokemon-species/127/"
        },
        {
            "name": "tauros",
            "url": "https://pokeapi.co/api/v2/pokemon-species/128/"
        },
        {
            "name": "magikarp",
            "url": "https://pokeapi.co/api/v2/pokemon-species/129/"
        },
        {
            "name": "gyarados",
            "url": "https://pokeapi.co/api/v2/pokemon-species/130/"
        },
        {
            "name": "lapras",
            "url": "https://pokeapi.co/api/v2/pokemon-species/131/"
        },
        {
            "name": "ditto",
            "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
        },
        {
            "name": "eevee",
            "url": "https://pokeapi.co/api/v2/pokemon-species/133/"
        },
        {
            "name": "vaporeon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/134/"
        },
        {
            "name": "jolteon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/135/"
        },
        {
            "name": "flareon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/136/"
        },
        {
            "name": "porygon",
            "url": "https://pokeapi.co/api/v2/pokemon-species/137/"
        },
        {
            "name": "omanyte",
            "url": "https://pokeapi.co/api/v2/pokemon-species/138/"
        },
        {
            "name": "omastar",
            "url": "https://pokeapi.co/api/v2/pokemon-species/139/"
        },
        {
            "name": "kabuto",
            "url": "https://pokeapi.co/api/v2/pokemon-species/140/"
        },
        {
            "name": "kabutops",
            "url": "https://pokeapi.co/api/v2/pokemon-species/141/"
        },
        {
            "name": "aerodactyl",
            "url": "https://pokeapi.co/api/v2/pokemon-species/142/"
        },
        {
            "name": "snorlax",
            "url": "https://pokeapi.co/api/v2/pokemon-species/143/"
        },
        {
            "name": "articuno",
            "url": "https://pokeapi.co/api/v2/pokemon-species/144/"
        },
        {
            "name": "zapdos",
            "url": "https://pokeapi.co/api/v2/pokemon-species/145/"
        },
        {
            "name": "moltres",
            "url": "https://pokeapi.co/api/v2/pokemon-species/146/"
        },
        {
            "name": "dratini",
            "url": "https://pokeapi.co/api/v2/pokemon-species/147/"
        },
        {
            "name": "dragonair",
            "url": "https://pokeapi.co/api/v2/pokemon-species/148/"
        },
        {
            "name": "dragonite",
            "url": "https://pokeapi.co/api/v2/pokemon-species/149/"
        },
        {
            "name": "mewtwo",
            "url": "https://pokeapi.co/api/v2/pokemon-species/150/"
        },
        {
            "name": "mew",
            "url": "https://pokeapi.co/api/v2/pokemon-species/151/"
        }
    ]
}
