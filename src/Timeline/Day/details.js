import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHeart, faPencilAlt, faLock }  from '@fortawesome/free-solid-svg-icons';

export default class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="detailsContainer">
        <div className="details">
          <div className="detailsTopRow">
            <div className="detailsTopRowDate">06/12/2017</div>
            <div className="detailsTopRowButton">See day <FontAwesomeIcon icon={faChevronDown} className=""/></div>
          </div>
          <div className="detailsBottomRow">
            <div className="detailsStats detailsStats1">
              <FontAwesomeIcon icon={faHeart} className="detailsIcon"/><div className="detailsNumberBox">1</div>
              <FontAwesomeIcon icon={faPencilAlt} className="detailsIcon"/><div className="detailsNumberBox">1</div>
              <FontAwesomeIcon icon={faLock} className="detailsIcon"/><div className="detailsNumberBox">1</div>
            </div>
            <div className="detailsStats detailsStats2">
              <FontAwesomeIcon icon={faHeart} className="detailsIcon"/><div className="detailsNumberBox">1</div>
              <FontAwesomeIcon icon={faPencilAlt} className="detailsIcon"/><div className="detailsNumberBox">1</div>
              <FontAwesomeIcon icon={faLock} className="detailsIcon"/><div className="detailsNumberBox">1</div>
            </div>
          </div>
        </div>
        <div className="detailsArrow"></div>
      </div>
		);
	}
}
