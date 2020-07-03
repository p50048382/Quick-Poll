var express = require("express");
var app = express();

var polls1 = {
  feed: {
    id: "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollHdrSet",
    title: {
      _type: "text",
      __text: "GetPollHdrSet",
    },
    updated: "2020-06-19T07:35:52Z",
    author: {
      name: "",
    },
    link: [
      {
        _href: "GetPollHdrSet",
        _rel: "self",
        _title: "GetPollHdrSet",
      },
    ],
    entry: [
      {
        id:
          "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollHdrSet('DIS')",
        title: {
          _type: "text",
          __text: "GetPollHdrSet('DIS')",
        },
        updated: "2020-06-19T07:35:52Z",
        category: {
          _term: "ZPOLL_SRV.GetPollHdr",
          _scheme:
            "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
        },
        link: [
          {
            _href: "GetPollHdrSet('DIS')",
            _rel: "self",
            _title: "GetPollHdr",
          },
          {
            inline: {
              feed: {
                id:
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollHdrSet('DIS')/NavGetPollHdrToQues",
                title: {
                  _type: "text",
                  __text: "GetPollQuesSet",
                },
                updated: "2020-06-19T07:35:52Z",
                author: {
                  name: "",
                },
                link: [
                  {
                    _href: "GetPollHdrSet('DIS')/NavGetPollHdrToQues",
                    _rel: "self",
                    _title: "GetPollQuesSet",
                  },
                ],
                entry: [
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollQuesSet('0000000019')",
                    title: {
                      _type: "text",
                      __text: "GetPollQuesSet('0000000019')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollQues",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollQuesSet('0000000019')",
                        _rel: "self",
                        _title: "GetPollQues",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000019",
                        },
                        QText: {
                          __text: "Have you completed your PME ?",
                        },
                        Response: {},
                        NoOfOptions: {
                          __text: "2",
                        },
                        PollName: {
                          __text: "EMPEX",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollQuesSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollQuesSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollQues",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollQuesSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollQues",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        QText: {
                          __text: "Which group are you working for?",
                        },
                        Response: {},
                        NoOfOptions: {
                          __text: "3",
                        },
                        PollName: {
                          __text: "COMPANY",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                ],
                _xmlns: "http://www.w3.org/2005/Atom",
                "_xmlns:m":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "_xmlns:d":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices",
                "_xml:base":
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
              },
            },
            _href: "GetPollHdrSet('DIS')/NavGetPollHdrToQues",
            _rel:
              "http://schemas.microsoft.com/ado/2007/08/dataservices/related/NavGetPollHdrToQues",
            _type: "application/atom+xml;type=feed",
            _title: "NavGetPollHdrToQues",
          },
          {
            inline: {
              feed: {
                id:
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollHdrSet('DIS')/NavGetPollHdrToOptions",
                title: {
                  _type: "text",
                  __text: "GetPollOptionsSet",
                },
                updated: "2020-06-19T07:35:52Z",
                author: {
                  name: "",
                },
                link: [
                  {
                    _href: "GetPollHdrSet('DIS')/NavGetPollHdrToOptions",
                    _rel: "self",
                    _title: "GetPollOptionsSet",
                  },
                ],
                entry: [
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000019')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000019')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000019')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000019",
                        },
                        OptionValue: {
                          __text: "Y",
                        },
                        OptionText: {
                          __text: "Yes",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000019')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000019')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000019')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000019",
                        },
                        OptionValue: {
                          __text: "N",
                        },
                        OptionText: {
                          __text: "No",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RR",
                        },
                        OptionText: {
                          __text: "Reliance Retail",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },{
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RR",
                        },
                        OptionText: {
                          __text: "Reliance Retail",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },{
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RR",
                        },
                        OptionText: {
                          __text: "Reliance Retail",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RIL",
                        },
                        OptionText: {
                          __text: "Reliance Industries",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
				  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RIL",
                        },
                        OptionText: {
                          __text: "Reliance Industries",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },{
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RIL",
                        },
                        OptionText: {
                          __text: "Reliance Industries",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },{
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RIL",
                        },
                        OptionText: {
                          __text: "Reliance Industries",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-19T07:35:52Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "JIO",
                        },
                        OptionText: {
                          __text: "Reliance Jio",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                ],
                _xmlns: "http://www.w3.org/2005/Atom",
                "_xmlns:m":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "_xmlns:d":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices",
                "_xml:base":
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
              },
            },
            _href: "GetPollHdrSet('DIS')/NavGetPollHdrToOptions",
            _rel:
              "http://schemas.microsoft.com/ado/2007/08/dataservices/related/NavGetPollHdrToOptions",
            _type: "application/atom+xml;type=feed",
            _title: "NavGetPollHdrToOptions",
          },
        ],
        content: {
          properties: {
            Mode: {
              __text: "DIS",
            },
            NoOfPolls: {
              __text: "2",
            },
            "_xmlns:m":
              "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
            "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
          },
          _type: "application/xml",
        },
      },
    ],
    _xmlns: "http://www.w3.org/2005/Atom",
    "_xmlns:m":
      "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
    "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
    "_xml:base": "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
  },
};

var polls = {
  feed: {
    id: "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollHdrSet",
    title: {
      _type: "text",
      __text: "GetPollHdrSet",
    },
    updated: "2020-06-17T17:19:15Z",
    author: {
      name: "",
    },
    link: [
      {
        _href: "GetPollHdrSet",
        _rel: "self",
        _title: "GetPollHdrSet",
      },
    ],
    entry: [
      {
        id:
          "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollHdrSet('DIS')",
        title: {
          _type: "text",
          __text: "GetPollHdrSet('DIS')",
        },
        updated: "2020-06-17T17:19:15Z",
        category: {
          _term: "ZPOLL_SRV.GetPollHdr",
          _scheme:
            "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
        },
        link: [
          {
            _href: "GetPollHdrSet('DIS')",
            _rel: "self",
            _title: "GetPollHdr",
          },
          {
            inline: {
              feed: {
                id:
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollHdrSet('DIS')/NavGetPollHdrToQues",
                title: {
                  _type: "text",
                  __text: "GetPollQuesSet",
                },
                updated: "2020-06-17T17:19:15Z",
                author: {
                  name: "",
                },
                link: [
                  {
                    _href: "GetPollHdrSet('DIS')/NavGetPollHdrToQues",
                    _rel: "self",
                    _title: "GetPollQuesSet",
                  },
                ],
                entry: [
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollQuesSet('0000000019')",
                    title: {
                      _type: "text",
                      __text: "GetPollQuesSet('0000000019')",
                    },
                    updated: "2020-06-17T17:19:15Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollQues",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollQuesSet('0000000019')",
                        _rel: "self",
                        _title: "GetPollQues",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000019",
                        },
                        QText: {
                          __text: "Have you completed your PME ?",
                        },
                        Response: {},
                        NoOfOptions: {
                          __text: "2",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollQuesSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollQuesSet('0000000020')",
                    },
                    updated: "2020-06-17T17:19:15Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollQues",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollQuesSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollQues",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        QText: {
                          __text: "Which group are you working for?",
                        },
                        Response: {},
                        NoOfOptions: {
                          __text: "3",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                ],
                _xmlns: "http://www.w3.org/2005/Atom",
                "_xmlns:m":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "_xmlns:d":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices",
                "_xml:base":
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
              },
            },
            _href: "GetPollHdrSet('DIS')/NavGetPollHdrToQues",
            _rel:
              "http://schemas.microsoft.com/ado/2007/08/dataservices/related/NavGetPollHdrToQues",
            _type: "application/atom+xml;type=feed",
            _title: "NavGetPollHdrToQues",
          },
          {
            inline: {
              feed: {
                id:
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollHdrSet('DIS')/NavGetPollHdrToOptions",
                title: {
                  _type: "text",
                  __text: "GetPollOptionsSet",
                },
                updated: "2020-06-17T17:19:15Z",
                author: {
                  name: "",
                },
                link: [
                  {
                    _href: "GetPollHdrSet('DIS')/NavGetPollHdrToOptions",
                    _rel: "self",
                    _title: "GetPollOptionsSet",
                  },
                ],
                entry: [
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000019')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000019')",
                    },
                    updated: "2020-06-17T17:19:15Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000019')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000019",
                        },
                        OptionValue: {
                          __text: "Y",
                        },
                        OptionText: {
                          __text: "Yes",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000019')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000019')",
                    },
                    updated: "2020-06-17T17:19:15Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000019')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000019",
                        },
                        OptionValue: {
                          __text: "N",
                        },
                        OptionText: {
                          __text: "No",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-17T17:19:15Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RR",
                        },
                        OptionText: {
                          __text: "Reliance Retail",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-17T17:19:15Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "RIL",
                        },
                        OptionText: {
                          __text: "Reliance Industries",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollOptionsSet('0000000020')",
                    title: {
                      _type: "text",
                      __text: "GetPollOptionsSet('0000000020')",
                    },
                    updated: "2020-06-17T17:19:15Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollOptionsSet('0000000020')",
                        _rel: "self",
                        _title: "GetPollOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000020",
                        },
                        OptionValue: {
                          __text: "JIO",
                        },
                        OptionText: {
                          __text: "Reliance Jio",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                ],
                _xmlns: "http://www.w3.org/2005/Atom",
                "_xmlns:m":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "_xmlns:d":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices",
                "_xml:base":
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
              },
            },
            _href: "GetPollHdrSet('DIS')/NavGetPollHdrToOptions",
            _rel:
              "http://schemas.microsoft.com/ado/2007/08/dataservices/related/NavGetPollHdrToOptions",
            _type: "application/atom+xml;type=feed",
            _title: "NavGetPollHdrToOptions",
          },
        ],
        content: {
          properties: {
            Mode: {
              __text: "DIS",
            },
            NoOfPolls: {
              __text: "2",
            },
            "_xmlns:m":
              "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
            "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
          },
          _type: "application/xml",
        },
      },
    ],
    _xmlns: "http://www.w3.org/2005/Atom",
    "_xmlns:m":
      "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
    "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
    "_xml:base": "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
  },
};
var pollSummary1 = {
  feed: {
    id:
      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumHdrSet",
    title: {
      _type: "text",
      __text: "GetPollSumHdrSet",
    },
    updated: "2020-06-19T07:36:37Z",
    author: {
      name: "",
    },
    link: [
      {
        _href: "GetPollSumHdrSet",
        _rel: "self",
        _title: "GetPollSumHdrSet",
      },
    ],
    entry: [
      {
        id:
          "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumHdrSet('DIS')",
        title: {
          _type: "text",
          __text: "GetPollSumHdrSet('DIS')",
        },
        updated: "2020-06-19T07:36:37Z",
        category: {
          _term: "ZPOLL_SRV.GetPollSumHdr",
          _scheme:
            "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
        },
        link: [
          {
            _href: "GetPollSumHdrSet('DIS')",
            _rel: "self",
            _title: "GetPollSumHdr",
          },
          {
            inline: {
              feed: {
                id:
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumHdrSet('DIS')/NavGetPollSumHdrToQues",
                title: {
                  _type: "text",
                  __text: "GetPollSumQuesSet",
                },
                updated: "2020-06-19T07:36:37Z",
                author: {
                  name: "",
                },
                link: [
                  {
                    _href: "GetPollSumHdrSet('DIS')/NavGetPollSumHdrToQues",
                    _rel: "self",
                    _title: "GetPollSumQuesSet",
                  },
                ],
                entry: [
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumQuesSet('0000000017')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumQuesSet('0000000017')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumQues",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumQuesSet('0000000017')",
                        _rel: "self",
                        _title: "GetPollSumQues",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000017",
                        },
                        QText: {
                          __text:
                            "Have you selected your Incometax regime in Rconnect?",
                        },
                        Response: {
                          __text: "Y",
                        },
                        NoOfOptions: {
                          __text: "2",
                        },
                        PollName: {
                          __text: "TAX SCHEME SELECTION",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumQuesSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumQuesSet('0000000018')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumQues",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumQuesSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumQues",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000018",
                        },
                        QText: {
                          __text:
                            "Which fruit from the following is sweetest of all ?",
                        },
                        Response: {
                          __text: "M",
                        },
                        NoOfOptions: {
                          __text: "5",
                        },
                        PollName: {
                          __text: "FRUIT SELECTION",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                ],
                _xmlns: "http://www.w3.org/2005/Atom",
                "_xmlns:m":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "_xmlns:d":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices",
                "_xml:base":
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
              },
            },
            _href: "GetPollSumHdrSet('DIS')/NavGetPollSumHdrToQues",
            _rel:
              "http://schemas.microsoft.com/ado/2007/08/dataservices/related/NavGetPollSumHdrToQues",
            _type: "application/atom+xml;type=feed",
            _title: "NavGetPollSumHdrToQues",
          },
          {
            inline: {
              feed: {
                id:
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumHdrSet('DIS')/NavGetPollSumHdrToOptions",
                title: {
                  _type: "text",
                  __text: "GetPollSumOptionsSet",
                },
                updated: "2020-06-19T07:36:37Z",
                author: {
                  name: "",
                },
                link: [
                  {
                    _href: "GetPollSumHdrSet('DIS')/NavGetPollSumHdrToOptions",
                    _rel: "self",
                    _title: "GetPollSumOptionsSet",
                  },
                ],
                entry: [
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000017')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000017')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000017')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000017",
                        },
                        Response: {
                          __text: "N",
                        },
                        OptionText: {
                          __text: "No",
                        },
                        Cnt: {
                          __text: "3",
                        },
                        Pct: {
                          __text: "43",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000017')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000017')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000017')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000017",
                        },
                        Response: {
                          __text: "Y",
                        },
                        OptionText: {
                          __text: "Yes",
                        },
                        Cnt: {
                          __text: "4",
                        },
                        Pct: {
                          __text: "57",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000018",
                        },
                        Response: {
                          __text: "M",
                        },
                        OptionText: {
                          __text: "Mango",
                        },
                        Cnt: {
                          __text: "1",
                        },
                        Pct: {
                          __text: "20",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000018",
                        },
                        Response: {
                          __text: "A",
                        },
                        OptionText: {
                          __text: "Apple",
                        },
                        Cnt: {
                          __text: "0",
                        },
                        Pct: {
                          __text: "25",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000018",
                        },
                        Response: {
                          __text: "W",
                        },
                        OptionText: {
                          __text: "Watermellon",
                        },
                        Cnt: {
                          __text: "0",
                        },
                        Pct: {
                          __text: "30",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000018",
                        },
                        Response: {
                          __text: "P",
                        },
                        OptionText: {
                          __text: "Pineapple",
                        },
                        Cnt: {
                          __text: "0",
                        },
                        Pct: {
                          __text: "15",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-19T07:36:37Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        PollId: {
                          __text: "0000000018",
                        },
                        Response: {
                          __text: "B",
                        },
                        OptionText: {
                          __text: "Banana",
                        },
                        Cnt: {
                          __text: "0",
                        },
                        Pct: {
                          __text: "10",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                ],
                _xmlns: "http://www.w3.org/2005/Atom",
                "_xmlns:m":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "_xmlns:d":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices",
                "_xml:base":
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
              },
            },
            _href: "GetPollSumHdrSet('DIS')/NavGetPollSumHdrToOptions",
            _rel:
              "http://schemas.microsoft.com/ado/2007/08/dataservices/related/NavGetPollSumHdrToOptions",
            _type: "application/atom+xml;type=feed",
            _title: "NavGetPollSumHdrToOptions",
          },
        ],
        content: {
          properties: {
            Mode: {
              __text: "DIS",
            },
            "_xmlns:m":
              "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
            "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
          },
          _type: "application/xml",
        },
      },
    ],
    _xmlns: "http://www.w3.org/2005/Atom",
    "_xmlns:m":
      "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
    "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
    "_xml:base": "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
  },
};

var pollSummary = {
  feed: {
    id:
      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumHdrSet",
    title: {
      _type: "text",
      __text: "GetPollSumHdrSet",
    },
    updated: "2020-06-17T17:16:02Z",
    author: {
      name: "",
    },
    link: [
      {
        _href: "GetPollSumHdrSet",
        _rel: "self",
        _title: "GetPollSumHdrSet",
      },
    ],
    entry: [
      {
        id:
          "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumHdrSet('DIS')",
        title: {
          _type: "text",
          __text: "GetPollSumHdrSet('DIS')",
        },
        updated: "2020-06-17T17:16:02Z",
        category: {
          _term: "ZPOLL_SRV.GetPollSumHdr",
          _scheme:
            "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
        },
        link: [
          {
            _href: "GetPollSumHdrSet('DIS')",
            _rel: "self",
            _title: "GetPollSumHdr",
          },
          {
            inline: {
              feed: {
                id:
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumHdrSet('DIS')/NavGetPollSumHdrToOptions",
                title: {
                  _type: "text",
                  __text: "GetPollSumOptionsSet",
                },
                updated: "2020-06-17T17:16:02Z",
                author: {
                  name: "",
                },
                link: [
                  {
                    _href: "GetPollSumHdrSet('DIS')/NavGetPollSumHdrToOptions",
                    _rel: "self",
                    _title: "GetPollSumOptionsSet",
                  },
                ],
                entry: [
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000017')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000017')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000017')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        Pct: {
                          __text: "43",
                        },
                        Cnt: {
                          __text: "3",
                        },
                        OptionText: {
                          __text: "No",
                        },
                        Response: {
                          __text: "N",
                        },
                        PollId: {
                          __text: "0000000017",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000017')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000017')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000017')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        Pct: {
                          __text: "57",
                        },
                        Cnt: {
                          __text: "4",
                        },
                        OptionText: {
                          __text: "Yes",
                        },
                        Response: {
                          __text: "Y",
                        },
                        PollId: {
                          __text: "0000000017",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        Pct: {
                          __text: "100",
                        },
                        Cnt: {
                          __text: "1",
                        },
                        OptionText: {
                          __text: "Mango",
                        },
                        Response: {
                          __text: "M",
                        },
                        PollId: {
                          __text: "0000000018",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        Pct: {
                          __text: "0",
                        },
                        Cnt: {
                          __text: "0",
                        },
                        OptionText: {
                          __text: "Apple",
                        },
                        Response: {
                          __text: "A",
                        },
                        PollId: {
                          __text: "0000000018",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        Pct: {
                          __text: "0",
                        },
                        Cnt: {
                          __text: "0",
                        },
                        OptionText: {
                          __text: "Watermellon",
                        },
                        Response: {
                          __text: "W",
                        },
                        PollId: {
                          __text: "0000000018",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        Pct: {
                          __text: "0",
                        },
                        Cnt: {
                          __text: "0",
                        },
                        OptionText: {
                          __text: "Pineapple",
                        },
                        Response: {
                          __text: "P",
                        },
                        PollId: {
                          __text: "0000000018",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumOptionsSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumOptionsSet('0000000018')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumOptions",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumOptionsSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumOptions",
                      },
                    ],
                    content: {
                      properties: {
                        Pct: {
                          __text: "0",
                        },
                        Cnt: {
                          __text: "0",
                        },
                        OptionText: {
                          __text: "Banana",
                        },
                        Response: {
                          __text: "B",
                        },
                        PollId: {
                          __text: "0000000018",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                ],
                _xmlns: "http://www.w3.org/2005/Atom",
                "_xmlns:m":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "_xmlns:d":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices",
                "_xml:base":
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
              },
            },
            _href: "GetPollSumHdrSet('DIS')/NavGetPollSumHdrToOptions",
            _rel:
              "http://schemas.microsoft.com/ado/2007/08/dataservices/related/NavGetPollSumHdrToOptions",
            _type: "application/atom+xml;type=feed",
            _title: "NavGetPollSumHdrToOptions",
          },
          {
            inline: {
              feed: {
                id:
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumHdrSet('DIS')/NavGetPollSumHdrToQues",
                title: {
                  _type: "text",
                  __text: "GetPollSumQuesSet",
                },
                updated: "2020-06-17T17:16:02Z",
                author: {
                  name: "",
                },
                link: [
                  {
                    _href: "GetPollSumHdrSet('DIS')/NavGetPollSumHdrToQues",
                    _rel: "self",
                    _title: "GetPollSumQuesSet",
                  },
                ],
                entry: [
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumQuesSet('0000000017')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumQuesSet('0000000017')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumQues",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumQuesSet('0000000017')",
                        _rel: "self",
                        _title: "GetPollSumQues",
                      },
                    ],
                    content: {
                      properties: {
                        NoOfOptions: {
                          __text: "2",
                        },
                        Response: {
                          __text: "Y",
                        },
                        QText: {
                          __text:
                            "Have you selected your Incometax regime in Rconnect?",
                        },
                        PollId: {
                          __text: "0000000017",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                  {
                    id:
                      "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/GetPollSumQuesSet('0000000018')",
                    title: {
                      _type: "text",
                      __text: "GetPollSumQuesSet('0000000018')",
                    },
                    updated: "2020-06-17T17:16:02Z",
                    category: {
                      _term: "ZPOLL_SRV.GetPollSumQues",
                      _scheme:
                        "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme",
                    },
                    link: [
                      {
                        _href: "GetPollSumQuesSet('0000000018')",
                        _rel: "self",
                        _title: "GetPollSumQues",
                      },
                    ],
                    content: {
                      properties: {
                        NoOfOptions: {
                          __text: "5",
                        },
                        Response: {
                          __text: "M",
                        },
                        QText: {
                          __text:
                            "Which fruit from the following is sweetest of all ?",
                        },
                        PollId: {
                          __text: "0000000018",
                        },
                        "_xmlns:m":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                        "_xmlns:d":
                          "http://schemas.microsoft.com/ado/2007/08/dataservices",
                      },
                      _type: "application/xml",
                    },
                  },
                ],
                _xmlns: "http://www.w3.org/2005/Atom",
                "_xmlns:m":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "_xmlns:d":
                  "http://schemas.microsoft.com/ado/2007/08/dataservices",
                "_xml:base":
                  "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
              },
            },
            _href: "GetPollSumHdrSet('DIS')/NavGetPollSumHdrToQues",
            _rel:
              "http://schemas.microsoft.com/ado/2007/08/dataservices/related/NavGetPollSumHdrToQues",
            _type: "application/atom+xml;type=feed",
            _title: "NavGetPollSumHdrToQues",
          },
        ],
        content: {
          properties: {
            Mode: {
              __text: "DIS",
            },
            "_xmlns:m":
              "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
            "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
          },
          _type: "application/xml",
        },
      },
    ],
    _xmlns: "http://www.w3.org/2005/Atom",
    "_xmlns:m":
      "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
    "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
    "_xml:base": "https://rrnwgwdev.ril.com/sap/opu/odata/sap/ZPOLL_SRV/",
  },
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/polls", (req, res) => {
  res.json(polls);
});

app.get("/pollSummary", (req, res) => {
  res.json(pollSummary);
});
app.get("/polls1", (req, res) => {
  res.json(polls1);
});

app.get("/pollSummary1", (req, res) => {
  res.json(pollSummary1);
});

app.listen(3000);
