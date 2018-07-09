import {requestAPI} from "../../src/requestHandler";

describe("API Call Handler", () => {
    const Validator = require('jsonschema').Validator;
    test("validate json result", async () => {

        const validate = require('jsonschema').validate;
        const schema = {
            "$id": "http://example.com/example.json",
            "type": "object",
            "definitions": {},
            "$schema": "http://json-schema.org/draft-07/schema#",
            "properties": {
                "Success": {
                    "$id": "/properties/Success",
                    "type": "boolean",
                    "title": "The Success Schema ",
                    "default": false,
                    "examples": [
                        true
                    ]
                },
                "Data": {
                    "$id": "/properties/Data",
                    "type": "object",
                    "properties": {
                        "Movies": {
                            "$id": "/properties/Data/properties/Movies",
                            "type": "array",
                            "items": {
                                "$id": "/properties/Data/properties/Movies/items",
                                "type": "object",
                                "properties": {
                                    "Id": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Id",
                                        "type": "integer",
                                        "title": "The Id Schema ",
                                        "default": 0,
                                        "examples": [
                                            12074
                                        ]
                                    },
                                    "Name": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Name",
                                        "type": "string",
                                        "title": "The Name Schema ",
                                        "default": "",
                                        "examples": [
                                            "Incredibles 2"
                                        ]
                                    },
                                    "Has3D": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Has3D",
                                        "type": "boolean",
                                        "title": "The Has3d Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "HasGoldClass": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/HasGoldClass",
                                        "type": "boolean",
                                        "title": "The Hasgoldclass Schema ",
                                        "default": false,
                                        "examples": [
                                            true
                                        ]
                                    },
                                    "HasStandard": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/HasStandard",
                                        "type": "boolean",
                                        "title": "The Hasstandard Schema ",
                                        "default": false,
                                        "examples": [
                                            true
                                        ]
                                    },
                                    "MovieUrl": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/MovieUrl",
                                        "type": "string",
                                        "title": "The Movieurl Schema ",
                                        "default": "",
                                        "examples": [
                                            "/Movie/Incredibles-2"
                                        ]
                                    },
                                    "Attributes": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Attributes",
                                        "type": "array",
                                        "items": {
                                            "$id": "/properties/Data/properties/Movies/items/properties/Attributes/items",
                                            "type": "string",
                                            "title": "The 0th Schema ",
                                            "default": "",
                                            "examples": [
                                                "$10",
                                                "NC",
                                                "ATMOS",
                                                "The Grand"
                                            ]
                                        }
                                    },
                                    "Rating": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Rating",
                                        "type": "string",
                                        "title": "The Rating Schema ",
                                        "default": "",
                                        "examples": [
                                            "PG"
                                        ]
                                    },
                                    "RatingId": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/RatingId",
                                        "type": "integer",
                                        "title": "The Ratingid Schema ",
                                        "default": 0,
                                        "examples": [
                                            52
                                        ]
                                    },
                                    "Policy": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Policy",
                                        "type": "string",
                                        "title": "The Policy Schema ",
                                        "default": "",
                                        "examples": [
                                            "Mild themes, animated violence and coarse language."
                                        ]
                                    },
                                    "BannerText": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/BannerText",
                                        "type": "null",
                                        "title": "The Bannertext Schema ",
                                        "default": null,
                                        "examples": [
                                            null
                                        ]
                                    },
                                    "ReleasedAt": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/ReleasedAt",
                                        "type": "string",
                                        "title": "The Releasedat Schema ",
                                        "default": "",
                                        "examples": [
                                            "2018-06-27T00:00:00"
                                        ]
                                    },
                                    "RunningTime": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/RunningTime",
                                        "type": "integer",
                                        "title": "The Runningtime Schema ",
                                        "default": 0,
                                        "examples": [
                                            125
                                        ]
                                    },
                                    "Genres": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Genres",
                                        "type": "string",
                                        "title": "The Genres Schema ",
                                        "default": "",
                                        "examples": [
                                            "animated"
                                        ]
                                    },
                                    "MainCast": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/MainCast",
                                        "type": "string",
                                        "title": "The Maincast Schema ",
                                        "default": "",
                                        "examples": [
                                            "Samuel L. Jackson, Holly Hunter, Catherine Keener"
                                        ]
                                    },
                                    "Synopsis": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Synopsis",
                                        "type": "string",
                                        "title": "The Synopsis Schema ",
                                        "default": "",
                                        "examples": [
                                            "Bob Parr (Mr. Incredible) is left to care for Jack-Jack while Helen (Elastigirl) is out saving the world."
                                        ]
                                    },
                                    "DoNotDisplay": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/DoNotDisplay",
                                        "type": "boolean",
                                        "title": "The Donotdisplay Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "ShowInRotator": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/ShowInRotator",
                                        "type": "boolean",
                                        "title": "The Showinrotator Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "HideFromMovies": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/HideFromMovies",
                                        "type": "boolean",
                                        "title": "The Hidefrommovies Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "HasTrailers": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/HasTrailers",
                                        "type": "boolean",
                                        "title": "The Hastrailers Schema ",
                                        "default": false,
                                        "examples": [
                                            true
                                        ]
                                    },
                                    "Director": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Director",
                                        "type": "string",
                                        "title": "The Director Schema ",
                                        "default": "",
                                        "examples": [
                                            "Brad Bird"
                                        ]
                                    },
                                    "FirstSession": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/FirstSession",
                                        "type": "string",
                                        "title": "The Firstsession Schema ",
                                        "default": "",
                                        "examples": [
                                            "2018-07-09T13:45:00"
                                        ]
                                    },
                                    "LastSession": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/LastSession",
                                        "type": "string",
                                        "title": "The Lastsession Schema ",
                                        "default": "",
                                        "examples": [
                                            "2018-07-11T21:00:00"
                                        ]
                                    },
                                    "IsFeatured": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/IsFeatured",
                                        "type": "boolean",
                                        "title": "The Isfeatured Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "Trailers": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Trailers",
                                        "type": "array",
                                        "items": {
                                            "$id": "/properties/Data/properties/Movies/items/properties/Trailers/items",
                                            "type": "string",
                                            "title": "The 0th Schema ",
                                            "default": "",
                                            "examples": [
                                                "HjoYaxJwnAs"
                                            ]
                                        }
                                    },
                                    "MovieGenres": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/MovieGenres",
                                        "type": "array",
                                        "items": {
                                            "$id": "/properties/Data/properties/Movies/items/properties/MovieGenres/items",
                                            "type": "object",
                                            "properties": {
                                                "Id": {
                                                    "$id": "/properties/Data/properties/Movies/items/properties/MovieGenres/items/properties/Id",
                                                    "type": "integer",
                                                    "title": "The Id Schema ",
                                                    "default": 0,
                                                    "examples": [
                                                        81172
                                                    ]
                                                },
                                                "Name": {
                                                    "$id": "/properties/Data/properties/Movies/items/properties/MovieGenres/items/properties/Name",
                                                    "type": "string",
                                                    "title": "The Name Schema ",
                                                    "default": "",
                                                    "examples": [
                                                        "Animated"
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    "Experiences": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Experiences",
                                        "type": "array",
                                        "items": {
                                            "$id": "/properties/Data/properties/Movies/items/properties/Experiences/items",
                                            "type": "object",
                                            "properties": {
                                                "code": {
                                                    "$id": "/properties/Data/properties/Movies/items/properties/Experiences/items/properties/code",
                                                    "type": "string",
                                                    "title": "The Code Schema ",
                                                    "default": "",
                                                    "examples": [
                                                        "GC"
                                                    ]
                                                },
                                                "name": {
                                                    "$id": "/properties/Data/properties/Movies/items/properties/Experiences/items/properties/name",
                                                    "type": "string",
                                                    "title": "The Name Schema ",
                                                    "default": "",
                                                    "examples": [
                                                        "Gold Class"
                                                    ]
                                                },
                                                "desc": {
                                                    "$id": "/properties/Data/properties/Movies/items/properties/Experiences/items/properties/desc",
                                                    "type": ["string", null],
                                                    "title": "The Desc Schema ",
                                                    "default": "",
                                                    "examples": [
                                                        "Gold Class – reclining chairs & waiter service"
                                                    ]
                                                },
                                                "doNotDisplay": {
                                                    "$id": "/properties/Data/properties/Movies/items/properties/Experiences/items/properties/doNotDisplay",
                                                    "type": "boolean",
                                                    "title": "The Donotdisplay Schema ",
                                                    "default": false,
                                                    "examples": [
                                                        false
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    "TicketsOnSale": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/TicketsOnSale",
                                        "type": "null",
                                        "title": "The Ticketsonsale Schema ",
                                        "default": null,
                                        "examples": [
                                            null
                                        ]
                                    },
                                    "IsThreeD": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/IsThreeD",
                                        "type": "boolean",
                                        "title": "The Isthreed Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "ForCinebuzz": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/ForCinebuzz",
                                        "type": "boolean",
                                        "title": "The Forcinebuzz Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "MovieCode": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/MovieCode",
                                        "type": "string",
                                        "title": "The Moviecode Schema ",
                                        "default": "",
                                        "examples": [
                                            "INCREDIB-2"
                                        ]
                                    },
                                    "Rank": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Rank",
                                        "type": "integer",
                                        "title": "The Rank Schema ",
                                        "default": 0,
                                        "examples": [
                                            380
                                        ]
                                    },
                                    "HOCode": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/HOCode",
                                        "type": "string",
                                        "title": "The Hocode Schema ",
                                        "default": "",
                                        "examples": [
                                            "HO00009464"
                                        ]
                                    },
                                    "CinemaModels": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/CinemaModels",
                                        "type": "array"
                                    },
                                    "CinemaIds": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/CinemaIds",
                                        "type": "array",
                                        "items": {
                                            "$id": "/properties/Data/properties/Movies/items/properties/CinemaIds/items",
                                            "type": "integer",
                                            "title": "The 0th Schema ",
                                            "default": 0,
                                            "examples": [
                                                501,
                                                502,
                                                503,
                                                504,
                                                505,
                                                506,
                                                507,
                                                508,
                                                509,
                                                510,
                                                512,
                                                514,
                                                513,
                                                515,
                                                516,
                                                517,
                                                518
                                            ]
                                        }
                                    },
                                    "Cinemas": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/Cinemas",
                                        "type": "string",
                                        "title": "The Cinemas Schema ",
                                        "default": "",
                                        "examples": [
                                            "501,502,503,504,505,506,507,508,509,510,512,514,513,515,516,517,518"
                                        ]
                                    },
                                    "HideFromComingSoon": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/HideFromComingSoon",
                                        "type": "boolean",
                                        "title": "The Hidefromcomingsoon Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "IsComingSoon": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/IsComingSoon",
                                        "type": "boolean",
                                        "title": "The Iscomingsoon Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    },
                                    "AbsoluteId": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/AbsoluteId",
                                        "type": "integer",
                                        "title": "The Absoluteid Schema ",
                                        "default": 0,
                                        "examples": [
                                            12074
                                        ]
                                    },
                                    "HideFromComingSoonSites": {
                                        "$id": "/properties/Data/properties/Movies/items/properties/HideFromComingSoonSites",
                                        "type": "array"
                                    }
                                }
                            }
                        },
                        "Genres": {
                            "$id": "/properties/Data/properties/Genres",
                            "type": "array",
                            "items": {
                                "$id": "/properties/Data/properties/Genres/items",
                                "type": "object",
                                "properties": {
                                    "code": {
                                        "$id": "/properties/Data/properties/Genres/items/properties/code",
                                        "type": "string",
                                        "title": "The Code Schema ",
                                        "default": "",
                                        "examples": [
                                            "action"
                                        ]
                                    },
                                    "name": {
                                        "$id": "/properties/Data/properties/Genres/items/properties/name",
                                        "type": "string",
                                        "title": "The Name Schema ",
                                        "default": "",
                                        "examples": [
                                            "Action"
                                        ]
                                    }
                                }
                            }
                        },
                        "Experiences": {
                            "$id": "/properties/Data/properties/Experiences",
                            "type": "array",
                            "items": {
                                "$id": "/properties/Data/properties/Experiences/items",
                                "type": "object",
                                "properties": {
                                    "code": {
                                        "$id": "/properties/Data/properties/Experiences/items/properties/code",
                                        "type": "string",
                                        "title": "The Code Schema ",
                                        "default": "",
                                        "examples": [
                                            "GC"
                                        ]
                                    },
                                    "name": {
                                        "$id": "/properties/Data/properties/Experiences/items/properties/name",
                                        "type": "string",
                                        "title": "The Name Schema ",
                                        "default": "",
                                        "examples": [
                                            "Gold Class"
                                        ]
                                    },
                                    "desc": {
                                        "$id": "/properties/Data/properties/Experiences/items/properties/desc",
                                        "type": ["string", null],
                                        "title": "The Desc Schema ",
                                        "default": null,
                                        "examples": [
                                            "Gold Class – reclining chairs & waiter service"
                                        ]
                                    },
                                    "doNotDisplay": {
                                        "$id": "/properties/Data/properties/Experiences/items/properties/doNotDisplay",
                                        "type": "boolean",
                                        "title": "The Donotdisplay Schema ",
                                        "default": false,
                                        "examples": [
                                            false
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        const uri = "https://www.eventcinemas.co.nz/Movies/GetNowShowing";
        const actualIntent = await requestAPI(uri);
        const result = validate(actualIntent, schema).valid;
        console.log(validate(actualIntent, schema));
        expect(result).toBe(true);
    });
});