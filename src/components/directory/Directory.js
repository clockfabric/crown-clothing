import React from "react";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
import "./Directory.scss";

const Directory = ({ sections }) => (
	<div className='directory-menu'>
		{sections.map(({ id, ...otherSectionProps }) => {
			return <MenuItem key={id} {...otherSectionProps} />;
		})}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
