const { _saveQuestionAnswer, _saveQuestion } = require("../../utils/_DATA");

describe("saveQuestionAnswer API testing", () => {

  it("should return true for correct parameters", async () => {
    const question = await _saveQuestionAnswer({
      authedUser: "mtsamis",
      qid: "6ni6ok3ym7mf1p33lnez",
      answer: "optionOne"
    });

    expect(question).toBeTruthy();
  });

  it("should return error for false parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: undefined,
      answer: "optionOne"
    }).catch(e => e);
    
    expect(response).toBe("Please provide authedUser, qid, and answer");
  });

  it("will return an error message if incorrect data is passed", async () => {
    const myQuestion = {
      optionOneText: undefined,
      optionTwoText: undefined,
      author: "sarahedo",
    };

    const rejectResponse =
      "Please provide optionOneText, optionTwoText, and author";

    await expect(_saveQuestion(myQuestion)).rejects.toEqual(
      rejectResponse
    );
  });
});
