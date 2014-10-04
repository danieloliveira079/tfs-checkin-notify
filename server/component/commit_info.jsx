/** @jsx React.DOM */

var React = require('react'),
    _ = require('underscore');

var CommitInfo = React.createClass({
  render: function() {
    return (
    	<div>
    	<div>
    		<span className="first"> <div>
			@marceloag
			<span className="icon-edit new"></span></div>
		</span>
    	</div>
       	<div>
       		<ul className="timeline">
       			<li>
       				<div className="avatar">
       					<img src="http://www.croop.cl/UI/twitter/images/doug.jpg"/>
       					<div className="hover">
							<div className="icon-twitter"></div>
						</div>
					</div>
					<div className="bubble-container">
						<div className="bubble">
							<div className="retweet">
								<div className="icon-retweet"></div>
							</div>
							<h3>@russel</h3> retweeted <h3>@doug</h3><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, iusto, maxime, ullam autem a voluptate rem quos repudiandae.
							<div className="over-bubble">
								<div className="icon-mail-reply action"></div>
								<div className="icon-retweet action"></div>
								<div className="icon-star"></div>
							</div>
						</div>
					<div className="arrow"></div>
					</div>
       			</li>
			</ul>
		</div>
		</div>
    );
  }
});


module.exports = CommitInfo;