import { TestBed, inject } from '@angular/core/testing';

import { DataUtilService } from './data-util.service';

describe('DataUtilService', () => {
  let sheetData = {
    "range": "'discussion-all'!A1:L60",
    "majorDimension": "ROWS",
    "values": [
      [
        "id",
        "title",
        "sub",
        "date",
        "attendees",
        "tags",
        "sections",
        "nextMeeting"
      ],
      [
        "99a756e2-bfd9-49db-b193-9b2cc0c4cae4",
        "Modelling the past and future",
        "Presentation of paper \"Modelling the past and future for neural machine translation\" by Allan.",
        "2018-07-25",
        "8",
        "SIS Neural,, Modelling",
        "Adding FUTURE and PAST two vectors to the attention based NMT model to keep track of the content which has been translated and hasn't been translated. The FUTURE layer is initialized with the last hidden state of the encoder and updated with subtraction ideally. The PAST layer is initialized with 0 vector and updated with addition.,, Explicit soft loss added for FUTURE and PAST two vectors to make sure certain consistency between the updates in FUTURE/PAST vector and the generated word's embedding in the timestamp.,, An experiment shows that the initialization of attention-based decoder doesn't make much difference.",
        "Presentation of paper \"Attention is All You Need\" by Zhang Yan."
      ],
      [
        "a3950520-12df-4f67-bf2c-fb8f80377a83",
        "Using structure-label system",
        "We discussed the paper on constituency parsing using structure-label system and provably optimal dynamic oracles.",
        "2018-07-31",
        "8",
        "SIS Parsing,, structure-label",
        "We discussed the paper on constituency parsing using structure-label system and provably optimal dynamic oracles.,, They used spans as elements in the stacks of their transition-based systems and proved a optimal dynamic oracle to reach the final configuration.,, Takeaway: we can use the difference between the foward (backward) LSTMs at two positions as the span representation.",
        "We will be discussing the paper \"Constituency Parsing with a Self-Attentive Encoder\"."
      ]
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataUtilService]
    });
  });

  it('should be created', inject([DataUtilService], (service: DataUtilService) => {
    expect(service).toBeTruthy();
  }));
  it('getArrayDataFromSheet should return object array', inject([DataUtilService], (service: DataUtilService) => {
    let items = service.getArrayDataFromSheet(sheetData);
    expect(items).not.toBeNull();
    expect(items.length).toBeGreaterThan(0);
  }));
  it('convertSheetDataToDiscussions should return discussions array', inject([DataUtilService], (service: DataUtilService) => {
    let items = service.convertSheetDataToDiscussions(sheetData);
    expect(items).not.toBeNull();
    expect(items.length).toBeGreaterThan(0);
  }));
  it('convertSheetStringToArray should return array', inject([DataUtilService], (service: DataUtilService) => {
    let items = service.convertSheetStringToArray('He,,is');
    expect(items).not.toBeNull();
    expect(items.length).toBeGreaterThan(0);
  }));
  it('convertSheetDataToStrings should return string array', inject([DataUtilService], (service: DataUtilService) => {
    let items = service.convertSheetDataToStrings(sheetData);
    expect(items).not.toBeNull();
    expect(items.length).toBeGreaterThan(0);
  }));
});
