import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart, faPencilAlt, faLock }  from '@fortawesome/free-solid-svg-icons';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
      tab: 1,
		}
	}

	render() {
		return (
			<div className="cardContainer">
        <div className="cardArrow"></div>
        <div className="card">
          <div className="cardTopRow">
            <div className="cardTopRowBox cardTopRowType">Apart</div>
            <div className="cardTopRowBox cardTopRowDate">06/12/2017</div>
            <div className="cardTopRowBox cardTopRowButton">
              <div className="cardTopRowX">
                <FontAwesomeIcon icon={faTimes} className="cardX"/>
              </div>
            </div>
          </div>
          <div className="cardTabBar">
            <div className="cardTab cardTab1">
              <FontAwesomeIcon icon={faHeart} className="cardIcon cardIcon1"/><div className="cardTabTitle">Appreciation</div>
              <div className="cardTabUnderline"></div>
            </div>
            <div className="cardTab cardTab2">
              <FontAwesomeIcon icon={faPencilAlt} className="cardIcon cardIcon2"/><div className="cardTabTitle">Notes</div>
            </div>
            <div className="cardTab cardTab3">
              <FontAwesomeIcon icon={faLock} className="cardIcon cardIcon3"/><div className="cardTabTitle">Memories</div>
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
