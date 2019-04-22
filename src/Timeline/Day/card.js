import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart, faPencilAlt, faLock }  from '@fortawesome/free-solid-svg-icons';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
      card: this.props.showCard,
      selectedTab: "appreciation",
		}
	}

  componentWillReceiveProps(props) {
    this.setState({card: this.props.showCard}, () => console.log("hmmmm"));
  }

  hideCard = () => {
    this.setState({card: false});
  }

  underlineTab = (tab) => {
    this.setState({selectedTab: tab});
  }

	render() {
		return (
			<div className={`cardContainer ${this.state.card ? "" : "hide"}`}>
        <div className="cardArrow"></div>
        <div className="card">
          <div className="cardTopRow">
            <div className="cardTopRowBox cardTopRowType">Apart</div>
            <div className="cardTopRowBox cardTopRowDate">06/12/2017</div>
            <div className="cardTopRowBox cardTopRowButton">
              <div className="cardTopRowX" onClick={this.hideCard}>
                <FontAwesomeIcon icon={faTimes} className="cardX"/>
              </div>
            </div>
          </div>
          <div className="cardTabBar">
            <div className="cardTab cardTab1" onClick={() => this.underlineTab("appreciation")}>
              <FontAwesomeIcon icon={faHeart} className="cardIcon cardIcon1"/><div className="cardTabTitle">Appreciation</div>
              <div className={this.state.selectedTab === "appreciation" ? "cardTabUnderline appreciationUnderline" : ""}></div>
            </div>
            <div className="cardTab cardTab2" onClick={() => this.underlineTab("notes")}>
              <FontAwesomeIcon icon={faPencilAlt} className="cardIcon cardIcon2"/><div className="cardTabTitle">Notes</div>
                <div className={this.state.selectedTab === "notes" ? "cardTabUnderline notesUnderline" : ""}></div>
            </div>
            <div className="cardTab cardTab3" onClick={() => this.underlineTab("memories")}>
              <FontAwesomeIcon icon={faLock} className="cardIcon cardIcon3"/><div className="cardTabTitle">Memories</div>
              <div className={this.state.selectedTab === "memories" ? "cardTabUnderline memoriesUnderline" : ""}></div>
            </div>
          </div>
          <div className="cardRow3">
            <FontAwesomeIcon icon={faHeart} className=""/>
          </div>
          <div className="cardContentBox">
            <div className="cardPost">
              <div className="cardPostName">Alex</div>
              <div className="cardPostContent">
                <div className="cardPostContentIcon">
                  <FontAwesomeIcon icon={faHeart} className="cardIcon cardIcon1"/>
                </div>
                <div className="cardPostContentText">For saying those nice things earlier.</div>
              </div>
            </div>
            <div className="cardPost">
              <div className="cardPostName name2">Celeste</div>
              <div className="cardPostContent">
                <div className="cardPostContentIcon">
                  <FontAwesomeIcon icon={faHeart} className="cardIcon cardIcon1"/>
                </div>
                <div className="cardPostContentText">For replying to my snap making me feel hot af.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
