var Banner = React.createClass({
  render: function() {
    return (
        <div id="Banner">
          <img src="img/Banner.png" />
        </div>
    );
  }
});

var QuestionPanel = React.createClass({

  handleCheckboxClick: function(clickedOptionTag, event) {

    // Guard against multiple clicks
    if (!nkoreaTest.checkboxActive) { return }
    nkoreaTest.checkboxActive = false;

    nkoreaTest.Card.state.chosenOptionTag = clickedOptionTag;

    // All questions answered: display total score
    if (nkoreaTest.Card.state.questionSerial >= nkoreaTest.survey.length - 1) {
      React.render(
          <ScorePage />,
          document.getElementById('content')
      );
    }

    //Show the answer
    nkoreaTest.Card.setState({showAnswer: true});

    if (clickedOptionTag === this.props.data.correctOptionTag) {
      nkoreaTest.totalScore += nkoreaTest.scorePerQuestion;
    }

  },

  getCorrectnessSign: function(optionTag) {
      // Only show correctness sign after the chosen option
      if (optionTag !== nkoreaTest.Card.state.chosenOptionTag) { return '' }
      var correctOption = nkoreaTest.survey[nkoreaTest.Card.state.questionSerial].correctOptionTag;
      var sign, colour, i;
      if (nkoreaTest.Card.state.chosenOptionTag === null) {
          sign = '';
      } else if (nkoreaTest.Card.state.chosenOptionTag === correctOption) {
          sign = '✓';
      } else {
          sign = '✕';
      }

      //Set color
      var correctnessSignDOMNodes = document.getElementsByClassName('CorrectnessSign');
      if (sign === '✓') {
          for (i=0; i<correctnessSignDOMNodes.length; i+=1) {
              correctnessSignDOMNodes[i].className = 'CorrectnessSign CorrectnessSign-correct'
          }
      } else if (sign === '✕') {
          for (i=0; i<correctnessSignDOMNodes.length; i+=1) {
              correctnessSignDOMNodes[i].className = 'CorrectnessSign CorrectnessSign-wrong'
          }
      }
      return sign;
  },

  render: function() {

    if (nkoreaTest.Card.state.answerSerial >= nkoreaTest.survey.length) {
      return;
      // TODO
    }

    var optionBoxes;
    if (this.props.data.optionContainsImage) {
      // TODO: special layout for imaged stuff
        optionBoxes = this.props.data.options.map(function (option) {
            return (
                <div className="optionBox" key={option.optionTag}>
                    <label>
                        <input type="checkbox"
                               name={option.optionTag}
                               onChange={this.handleCheckboxClick.bind(this, option.optionTag)}
                               className="checkbox"
                            />
                        <span className="optionTag">{option.optionTag}</span>
                        <span className="optionText">{option.optionText}</span>
                        <span className="CorrectnessSign">{this.getCorrectnessSign(option.optionTag)}</span>
                    </label>
                </div>
            )
        }, this);
    } else {
        optionBoxes = this.props.data.options.map(function (option) {
            return (
                <div className="optionBox" key={option.optionTag}>
                    <label>
                        <input type="checkbox"
                               name={option.optionTag}
                               onChange={this.handleCheckboxClick.bind(this, option.optionTag)}
                               className="checkbox"
                            />
                        <span className="optionTag">{option.optionTag}</span>
                        <span className="optionText">{option.optionText}</span>
                        <span className="CorrectnessSign">{this.getCorrectnessSign(option.optionTag)}</span>
                    </label>
                </div>
            )
        }, this);
    }

    return (
        <div id="QuestionPanel" data={this.props.data}>
          <div id="questionTag">
            {this.props.data.questionTag}
          </div>
          <div id="questionText">
            {this.props.data.questionText}
          </div>
          <div id="OptionPanel">
            {optionBoxes}
          </div>
        </div>
    );
  }
});

var AnswerPanel = React.createClass({

  handleNextButtonClick: function (event) {
      //Show the next question
      nkoreaTest.Card.setState({
            questionSerial: nkoreaTest.Card.state.questionSerial + 1,
            answerSerial: nkoreaTest.Card.state.answerSerial + 1,
            showAnswer: false
          }
      );

      //Uncheck all checkboxes
      var checkboxes = document.getElementsByClassName("checkbox");
      for (var i=0; i<checkboxes.length; i+=1) {
          checkboxes[i].checked = false;
      }
      nkoreaTest.Card.state.chosenOptionTag = null;

      nkoreaTest.checkboxActive = true;
  },

  render: function() {
    return (
        <div id="AnswerPanel" data={this.props.data} key={0}>
          <div className="answerBox">
            <div className="answerInnerBox">
              <span className="answerLabel">
                {nkoreaTest.answerLabel}
              </span>
              <span className="answerTag">
                {this.props.data.correctOptionTag}
              </span>
            </div>
          </div>
          <div className="ExplanationBox">
            {this.props.data.ExplanationText}
            <button id="next" onClick={this.handleNextButtonClick}> {nkoreaTest.nextButtonLabel} </button>
          </div>
        </div>
    );
  }
});

var Card = React.createClass({
  getInitialState: function() {
    return {
      questionSerial: 0,
      answerSerial: 0,
      showAnswer: false,
      chosenOptionTag: null
    };
  },

  render: function() {
    nkoreaTest.Card = this;
    return (
        <div id="Card" surveyData={this.props.surveyData}>
          <Banner />
          <QuestionPanel data={this.props.surveyData[this.state.questionSerial]}
          />
          {this.state.showAnswer ?
              <AnswerPanel data={this.props.surveyData[this.state.answerSerial]}
              /> :
              null
          }
        </div>
    );
  }
});

var ScorePage = React.createClass({
  render: function() {
    var comment = nkoreaTest.scoreComments[nkoreaTest.totalScore.toString()];
    return (
        <div id="ScorePage">
          <h1>你的總分是：{nkoreaTest.totalScore}</h1>
          <p>{comment}</p>
        </div>
    );
  }
});

React.render(
    <Card surveyData={nkoreaTest.survey} />,
    document.getElementById('content')
);
