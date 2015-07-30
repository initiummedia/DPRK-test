"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("div", { id: "Banner" }, React.createElement("img", { src: "img/Banner.png" }));
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",

  handleCheckboxClick: function handleCheckboxClick(optionTag, event) {
    nkoreaTest.Card.setState({ showAnswer: true });

    function moveToNextQuestion(checkbox) {
      nkoreaTest.Card.setState({ questionSerial: nkoreaTest.Card.state.questionSerial + 1,
        answerSerial: nkoreaTest.Card.state.answerSerial + 1,
        showAnswer: false
      });
      checkbox.checked = false; // Otherwise the option remains checked in the next question
    }
    setTimeout((function (checkbox) {
      return function () {
        moveToNextQuestion(checkbox);
      };
    })(event.target), 1500);
  },

  render: function render() {

    if (nkoreaTest.Card.answerSerial >= nkoreaTest.survey.length) {
      return;
      // TODO
    }

    var optionBoxes;
    if (this.props.data.optionContainsImage) {
      // TODO
      optionBoxes = this.props.data.options.map(function (option) {
        return React.createElement("div", { className: "optionBox", key: option.optionTag }, React.createElement("label", null, React.createElement("input", { type: "checkbox",
          name: option.optionTag,
          onChange: this.handleCheckboxClick.bind(this, option.optionTag) }), React.createElement("span", { className: "optionTag" }, option.optionTag), React.createElement("span", { className: "optionText" }, option.optionText)));
      }, this);
    } else {
      optionBoxes = this.props.data.options.map(function (option) {
        return React.createElement("div", { className: "optionBox", key: option.optionTag }, React.createElement("label", null, React.createElement("input", { type: "checkbox",
          name: option.optionTag,
          onChange: this.handleCheckboxClick.bind(this, option.optionTag) }), React.createElement("span", { className: "optionTag" }, option.optionTag), React.createElement("span", { className: "optionText" }, option.optionText)));
      }, this);
    }

    return React.createElement("div", { id: "QuestionPanel", data: this.props.data }, React.createElement("div", { id: "questionTag" }, this.props.data.questionTag), React.createElement("div", { id: "questionText" }, this.props.data.questionText), React.createElement("div", { id: "OptionPanel" }, optionBoxes));
  }
});

var AnswerPanel = React.createClass({ displayName: "AnswerPanel",
  render: function render() {
    return React.createElement("div", { id: "AnswerPanel", data: this.props.data, key: 0 }, React.createElement("div", { className: "answerBox" }, React.createElement("div", { className: "answerInnerBox" }, React.createElement("span", { className: "answerLabel" }, nkoreaTest.answerLabel), React.createElement("span", { className: "answerTag" }, this.props.data.correctOptionTag))), React.createElement("div", { className: "ExplanationBox" }, this.props.data.ExplanationText));
  }
});

var Card = React.createClass({ displayName: "Card",
  getInitialState: function getInitialState() {
    return {
      questionSerial: 0,
      answerSerial: 0,
      showAnswer: false
    };
  },

  render: function render() {
    nkoreaTest.Card = this;
    return React.createElement("div", { id: "Card", surveyData: this.props.surveyData }, React.createElement(Banner, null), React.createElement(QuestionPanel, { data: this.props.surveyData[this.state.questionSerial] }), this.state.showAnswer ? React.createElement(AnswerPanel, { data: this.props.surveyData[this.state.answerSerial] }) : null);
  }
});

React.render(React.createElement(Card, { surveyData: nkoreaTest.survey }), document.getElementById("content"));

//# sourceMappingURL=5a42b61a454019b21165caaf8eded36b40953cc5-compiled.js.map