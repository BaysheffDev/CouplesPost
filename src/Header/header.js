import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faTh, faStar, faGem, faHeart } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
      selectedTab: "grid",
		}
	}

  highlightTab = (tab) => {
    this.setState({selectedTab: tab});
  }

	render() {
		return (
			<div className="header">
        <div className="headerLeft">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className="" />
          <div className="logo">Couples Post</div>
        </div>
        <div className="headerMenu">
          <div className={`headerMenuItem ${this.state.selectedTab === "grid" ? "gridTab" : ""}`} onClick={() => this.highlightTab("grid")}>
            <FontAwesomeIcon icon={faTh} className="headerTabIcon" />
            <div className="headerMenuItemTitle">Grid</div>
          </div>
          <div className={`headerMenuItem ${this.state.selectedTab === "goals" ? "goalsTab" : ""}`} onClick={() => this.highlightTab("goals")}>
            <FontAwesomeIcon icon={faStar} className="headerTabIcon" />
            <div className="headerMenuItemTitle">Goals</div>
          </div>
          <div className={`headerMenuItem ${this.state.selectedTab === "collection" ? "collectionTab" : ""}`} onClick={() => this.highlightTab("collection")}>
            <FontAwesomeIcon icon={faGem} className="headerTabIcon" />
            <div className="headerMenuItemTitle">Collection</div>
          </div>
        </div>
        <div className="headerNames">
          <div className="headerName1">Celeste</div>
          <FontAwesomeIcon icon={faHeart} className="headerHeart" />
          <div className="headerName1">Alex</div>
        </div>
      </div>
		);
	}
}
