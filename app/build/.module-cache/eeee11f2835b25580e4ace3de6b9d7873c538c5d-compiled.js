"use strict";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("div", { id: "Banner" }, React.createElement("img", { src: "img/Banner.png" }));
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",

  handleCheckboxClick: function handleCheckboxClick(optionTag, event) {
    app.Card.setState({ showAnswer: true });
    app.Card.setState({ questionSerial: app.Card.state.questionSerial + 1,
      answerSerial: app.Card.state.answerSerial + 1
    });
    event.target.checked = false; // Otherwise the option remains checked in the next question
    //app.Card.setState({showAnswer: false});
  },

  render: function render() {

    if (app.Card.answerSerial >= app.survey.length) {
      return;
      // TODO
    }

    var optionBoxes;
    if (this.props.data.optionContainsImage) {} else {
      optionBoxes = this.props.data.options.map(function (option) {
        return React.createElement("div", { className: "optionBox", key: option.optionTag }, React.createElement("label", null, React.createElement("input", { type: "checkbox",
          name: option.optionTag,
          onChange: this.handleCheckboxClick.bind(this, option.optionTag) }), React.createElement("span", { className: "optionTag" }, option.optionTag), React.createElement("span", { className: "optionText" }, option.optionText)));
      }, this);
    }

    return React.createElement(ReactCSSTransitionGroup, { transitionName: "example", transitionAppear: true }, React.createElement("div", { id: "QuestionPanel", data: this.props.data, key: 0 }, React.createElement("div", { id: "questionTag" }, this.props.data.questionTag), React.createElement("div", { id: "questionText" }, this.props.data.questionText), React.createElement("div", { id: "OptionPanel" }, optionBoxes)));
  }
});

var AnswerPanel = React.createClass({ displayName: "AnswerPanel",
  render: function render() {
    return React.createElement("div", { id: "AnswerPanel", data: this.props.data, key: 0 }, React.createElement("div", { className: "answerBox" }, React.createElement("div", { className: "answerInnerBox" }, React.createElement("span", { className: "answerLabel" }, app.answerLabel), React.createElement("span", { className: "answerTag" }, this.props.data.correctOptionTag))), React.createElement("div", { className: "ExplanationBox" }, this.props.data.ExplanationText));
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
    app.Card = this;
    return React.createElement("div", { id: "Card", surveyData: this.props.surveyData }, React.createElement(Banner, null), this.state.showAnswer ? React.createElement(AnswerPanel, { data: this.props.surveyData[this.state.answerSerial] }) : null, React.createElement(QuestionPanel, { data: this.props.surveyData[this.state.questionSerial] }));
  }
});

React.render(React.createElement(Card, { surveyData: app.survey }), document.getElementById("content"));

// TODO

//# sourceMappingURL=eeee11f2835b25580e4ace3de6b9d7873c538c5d-compiled.js.map